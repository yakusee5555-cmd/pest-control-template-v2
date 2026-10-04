import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Estimator } from "@/components/site/Estimator";
import { Pricing } from "@/components/site/Pricing";
import { Reviews } from "@/components/site/Reviews";
import { Faq } from "@/components/site/Faq";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Locations } from "@/components/site/Locations";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCallBar } from "@/components/site/MobileCallBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rocky Raccoon & Possum Removal | Wildlife Removal in Hialeah, FL" },
      {
        name: "description",
        content:
          "Humane wildlife removal for homes and businesses in Hialeah, FL. Transparent pricing, simple service options, and easy online booking.",
      },
      { property: "og:title", content: "Rocky Raccoon & Possum Removal | Wildlife Removal in Hialeah, FL" },
      {
        property: "og:description",
        content:
          "Raccoon, possum, squirrel, and bat removal by local Hialeah experts — humane trapping, exclusion, and cleanup.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Estimator />
        <Pricing />
        <Faq />
        <WhyUs />
        <Process />
        <Reviews />
        <Contact />
        <Locations />
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileCallBar />
      {/* Spacer so the sticky mobile call bar never covers footer content */}
      <div aria-hidden="true" className="h-24 md:hidden" />
    </div>
  );
}
