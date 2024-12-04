// pages/api/submit-form.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  // Extensive logging of request details
  console.log('Request Method:', req.method);
  console.log('Request Body:', JSON.stringify(req.body, null, 2));
  console.log('Environment Variables:');
  console.log('GOOGLE_CLIENT_EMAIL:', !!process.env.GOOGLE_CLIENT_EMAIL);
  console.log('GOOGLE_PRIVATE_KEY:', !!process.env.GOOGLE_PRIVATE_KEY ? 'Present' : 'Missing');

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate environment variables
    if (process.env.GOOGLE_PRIVATE_KEY) {
      console.error('GOOGLE_PRIVATE_KEY is missing');
      return res.status(500).json({ 
        message: 'Server configuration error', 
        error: 'Google Private Key is not configured' 
      });
    }

    if (process.env.GOOGLE_CLIENT_EMAIL) {
      console.error('GOOGLE_CLIENT_EMAIL is missing');
      return res.status(500).json({ 
        message: 'Server configuration error', 
        error: 'Google Client Email is not configured' 
      });
    }

    // Hardcode the spreadsheet ID or get it from environment variable
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID || '1Boif9Wo54TYRa7J7xdDJ9_khI9L-MnOKAsmS_5IHqEk';
    
    // Log spreadsheet ID explicitly
    console.log('Spreadsheet ID:', spreadsheetId);

    // Authentication with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    });

    // Get client instance
    const client = await auth.getClient();

    // Initialize Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth: client });

    // Prepare the row data with robust fallback values
    const values = [
      [
        req.body.timestamp || new Date().toISOString(),
        req.body.submissionType || 'Unknown',
        req.body.name || '',
        req.body.phone || '',
        req.body.email || '',
        req.body.usesCrypto || 'N/A',
        req.body.platforms || '',
        req.body.otherPlatform || ''
      ]
    ];

    // Log values to be appended
    console.log('Values to append:', JSON.stringify(values, null, 2));

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId, 
      range: 'Sheet1!A:H', 
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: { values },
    });
    

    res.status(200).json({ 
      message: 'Form submitted successfully', 
      data: response.data 
    });
  } catch (error) {
    // Comprehensive error logging
    console.error('Detailed Error:', error);
    console.error('Error Name:', error.name);
    console.error('Error Message:', error.message);
    console.error('Error Stack:', error.stack);

    res.status(500).json({ 
      message: 'Error submitting form', 
      errorName: error.name,
      errorMessage: error.message,
      errorDetails: error.toString()
    });
  }
}