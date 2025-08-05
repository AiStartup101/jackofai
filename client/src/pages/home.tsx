import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import TalentFeed from "@/components/talent-feed";
import Insights from "@/components/insights";
import Community from "@/components/community";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <TalentFeed />
      <Insights />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}
