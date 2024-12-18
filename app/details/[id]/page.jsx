import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import BlogDetails from "@/components/otherPages/blog/BlogDetails";
import Link from "next/link";
import { blogCards } from "@/data/blogs";
import Footer2 from "@/components/footers/Footer2";
export const metadata = {
  title:
    "Blog Details"
};
export default function Page({ params }) {
  console.log('Params:', params); 
  console.log('All Blogs:', blogCards); 

  const blogItem =
  blogCards.find((elm) => {
      console.log('Comparing:', elm.id, 'with', params.id); 
      return elm.id.toString() === params.id;
    }) || blogCards[0];

  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {blogItem.title}
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <BlogDetails blogItem={blogItem} />
      </main>
      <Footer2 />
    </>
  );
}