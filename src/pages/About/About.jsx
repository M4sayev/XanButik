import "./About.css";
import AboutUsHeader from "../../components/AboutUsPage/AboutUsHeader/AboutUsHeader";
import OurResultsBanner from "../../components/AboutUsPage/OurResultsBanner/OurResultsBanner";
import Welcome from "../../components/AboutUsPage/Welcome/Welcome";
import OurServices from "../../components/AboutUsPage/OurServices/OurServices";
import OurClientsCarousel from "../../components/OurClientsCarousel/OurClientsCarousel";
import ComingSoon from "../../components/AboutUsPage/ComingSoon/ComingSoon";

function About() {
  return (
    <main>
      <AboutUsHeader />
      <OurResultsBanner />
      <Welcome />
      <OurServices />
      <OurClientsCarousel bg={"dark"} />
      <ComingSoon />
    </main>
  );
}

export default About;
