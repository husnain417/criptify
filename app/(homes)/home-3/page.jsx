import Footer1 from "@/components/footers/Footer1";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import About from "@/components/homes/home-3/About";
import DownloadApp from "@/components/homes/home-3/DownloadApp";
import Features from "@/components/homes/home-3/Features";
import Hero from "@/components/homes/home-3/Hero";
import Pricing from "@/components/homes/home-3/Pricing";
import Screenshoots from "@/components/homes/home-3/Screenshoots";
import Service2 from "@/components/homes/home-3/Service2";
import Services from "@/components/homes/home-3/Services";
import Form from "@/components/homes/home-3/Form";
import Skills from "@/components/homes/home-3/Skills";
import Testimonials from "@/components/homes/home-3/Testimonials";
import TextSlider from "@/components/homes/home-2/TextSlider";
import Blog from "@/components/homes/home-1/Blog";
import Faq2 from "@/components/otherPages/faq/Faq";
import Profits from "@/components/homes/home-3/Profits";

export const metadata = {
  title: "Cryptify",
  description: "Cryptify",
};

export default function Page() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        {/* <section id="about">
          <About />
        </section> */}
        <section id="features">
          <Features />
        </section>
        <section id="service2">
          <Service2 />
        </section>
        <section id="profits">
          <Profits />
        </section>
        <section id="text-slider">
          <TextSlider />
        </section>
        <section id="form">
          <Form />
        </section>
        <section id="faq">
          <Faq2 />
        </section>
        {/* <section id="screenshots">
          <Screenshoots />
        </section> */}
        {/* <section id="pricing">
          <Pricing />
        </section> */}
        {/* <section id="skills">
          <Skills />
        </section> */}
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="blog">
          <Blog />
        </section>
        {/* <section id="download-app">
          <DownloadApp />
        </section> */}
      </main>
      <Footer2 />
    </>
  );
}
