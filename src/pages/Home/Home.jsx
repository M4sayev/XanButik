import "./Home.css";
import Header from "../../components/HomePage/Header/Header";
import SmartBanner from "../../components/HomePage/SmartBanner/SmartBanner";
import FeaturedItems from "../../components/HomePage/FeaturedItems/FeaturedItems";
import ServicesBanner from "../../components/HomePage/ServicesBanner/ServicesBanner";
import OurClientsCarousel from "../../components/OurClientsCarousel/OurClientsCarousel";

function Home() {
  return (
    <main>
      <Header />
      <SmartBanner />
      <FeaturedItems />
      <ServicesBanner />
      <OurClientsCarousel bg="light" />
    </main>
  );
}

export default Home;
