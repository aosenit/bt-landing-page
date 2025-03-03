import AboutDrinks from "./components/AboutDrinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeinekenGlobal from "./components/HeinekenGlobal";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import TestimonialCard from "./components/TestimonialCard";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TestimonialCard />
      <HeinekenGlobal />
      <AboutDrinks />
      <Subscribe />
      <Footer />
    </>
  );
}
