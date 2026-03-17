import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Post from "../Components/Post";
import Swiper from "../Components/Swiper";

const Homepage = () => {
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

export default Homepage;
