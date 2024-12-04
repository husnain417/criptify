// utils/googleSheets.js
import axios from 'axios';

export const formatSheetData = (capturedStepData) => {
  return {
    timestamp: new Date().toISOString(),
    name: capturedStepData.step1?.name || '',
    phone: capturedStepData.step1 
      ? `${capturedStepData.step1.phone.countryCode}${capturedStepData.step1.phone.number}` 
      : '',
    email: capturedStepData.step2?.email || '',
    usesCrypto: capturedStepData.step3?.usesCrypto || '',
    platforms: capturedStepData.step3?.platforms 
      ? capturedStepData.step3.platforms.map(p => p.value).join(', ')
      : '',
    otherPlatform: capturedStepData.step3?.otherPlatform || ''
  };
};

export const appendDataToSheet = async (capturedStepData) => {
  try {
    // Format the data for Google Sheets
    const formattedData = formatSheetData(capturedStepData);

    // Send to your API route
    const response = await axios.post('/api/submit-form', formattedData);
    
    console.log('Data submitted successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error;
  }
};