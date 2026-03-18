import DetailPageSwiper from "../Components/DetailPageSwiper";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Post from "../Components/Post";

const DetailPage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <DetailPageSwiper/>
      <Post />
      <Footer />
    </section>
  );
};

export default DetailPage;
