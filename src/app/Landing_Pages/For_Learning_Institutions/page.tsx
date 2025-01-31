import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/app/Landing_Pages/For_Learning_Institutions/Components/hero-section";
import { KeyOfferings } from "@/app/Landing_Pages/For_Learning_Institutions/Components/key-offering";
import { Partners } from "@/app/Landing_Pages/For_Learning_Institutions/Components/partners";
import { Integration } from "@/app/Landing_Pages/For_Learning_Institutions/Components/integration";
import { CallToAction } from "@/app/Landing_Pages/For_Learning_Institutions/Components/call-to-action";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <KeyOfferings />
        <Partners />
        <Integration />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
