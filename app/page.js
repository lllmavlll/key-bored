import NavBar from "./components/NavBar";
import MainBoard from "./components/MainBoard";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <MainBoard />
      <Description />
      <Footer />
    </>
  );
};

export default Home;
