import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Post from "../Components/Post";
import Swiper from "../Components/Swiper";

const Homepages = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Gallery />
      <Swiper />
      <Post/>
      <Footer/>
    </section>
  );
};

export default Homepages;
