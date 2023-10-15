import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Service from "../components/Service/Service";
import Testimonial from "../components/Testimonial/Testimonial";
import data from "../data.json";


const Home = () => {
  const { heroData, aboutData, experienceData, portfolioData, serviceData, blogData, sliderData, contactData, footerData } = data;
  return (
    <>
      <main className="wrapper">
        <Hero data={heroData} />
        <About data={aboutData} />
        <Experience data={experienceData} />
        <Service data={serviceData} />
        <Portfolio data={portfolioData} />
        <Testimonial data={sliderData} />
        <Blog data={blogData} />
        <Contact data={contactData} />
        <Footer data={footerData} />
      </main>
    </>
  )
}

export default Home;
