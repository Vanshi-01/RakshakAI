import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import DashboardPreview from "../components/DashboardPreview";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Footer />
    </>
  );
}

export default Home;