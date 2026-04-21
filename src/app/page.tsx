import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UrgencyBanner from "@/components/UrgencyBanner";
import WhyHeyBrew from "@/components/WhyHeyBrew";
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
        <FranchiseInquiry />
      </main>
      <Footer />
    </>
  );
}
