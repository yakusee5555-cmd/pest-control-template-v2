import { Phone, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const reviews = [
  {
    quote:
      "Raccoons had taken over our attic — we could hear them every single night. They trapped them humanely, sealed every entry point, and six months later it's still quiet up there.",
    name: "Maria Delgado",
    town: "Hialeah, FL",
  },
  {
    quote:
      "A possum was living under our deck and our dog wouldn't go near the backyard. They got it out the same day I called and walked me through keeping it from coming back.",
    name: "James Carter",
    town: "Miami Lakes, FL",
  },
  {
    quote:
      "Fair price, showed up on time, and the attic cleanup was thorough. You can tell they do wildlife removal every single day — total pros.",
    name: "Sofia Ramirez",
    town: "Doral, FL",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-brand-soft py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Trusted For The Details That Matter
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.quote}
              className="relative flex min-h-64 flex-col border-t-4 border-brand bg-card p-7 shadow-soft sm:p-8"
            >
              <Quote className="absolute right-7 top-7 size-8 text-brand/15" aria-hidden="true" />
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-5 fill-brand text-brand" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-7 flex-1 text-base leading-7 text-foreground sm:text-lg">
                “{review.quote}”
              </blockquote>
              <p className="mt-6 text-sm font-bold">{review.name}</p>
              <p className="text-xs text-muted-foreground">{review.town}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild className="min-h-12 rounded-full bg-brand px-7 text-sm font-bold text-brand-foreground hover:bg-brand/90">
            <a href={site.phoneHref}>
              <Phone className="size-4" /> Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}