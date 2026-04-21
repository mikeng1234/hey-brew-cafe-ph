import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UrgencyBanner from "@/components/UrgencyBanner";
import WhyHeyBrew from "@/components/WhyHeyBrew";
import Samples from "@/components/Samples";
import Pricing from "@/components/Pricing";
import FranchiseInquiry from "@/components/FranchiseInquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UrgencyBanner />
        <WhyHeyBrew />
        <Samples />
        <Pricing />
        <FranchiseInquiry />
      </main>
      <Footer />
    </>
  );
}
