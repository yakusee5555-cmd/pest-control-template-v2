import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MobileCallBar } from "@/components/site/MobileCallBar";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Wildlife Removal Services | Rocky Raccoon & Possum Removal" },
      { name: "description", content: "Explore Rocky Raccoon & Possum Removal wildlife-removal services: raccoon removal, possum removal, wildlife control, and animal exclusion in Hialeah, FL." },
      { property: "og:title", content: "Wildlife Removal Services | Rocky Raccoon & Possum Removal" },
      { property: "og:description", content: "Humane wildlife-removal services tailored to your property — raccoons, possums, squirrels, and bats." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar />
      <main className="pb-24 pt-36 md:pt-44">
        <section className="mx-auto max-w-7xl px-6">
          <h1 className="section-title mt-4 max-w-4xl text-4xl sm:text-6xl">Humane Removal For Every Wildlife Problem</h1>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="card-soft overflow-hidden">
                <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-bold">{service.title}</h2>
                    <span className="shrink-0 rounded-full bg-[#FFC300] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#1B4332]">
                      from {service.fromPrice}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.summary}</p>
                  <Link to="/services/$serviceSlug" params={{ serviceSlug: service.slug }} className="mt-6 inline-flex items-center gap-2 font-bold text-brand">
                    Learn more <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
      <div aria-hidden="true" className="h-24 md:hidden" />
      <WhatsAppFab />
    </div>
  );
}
