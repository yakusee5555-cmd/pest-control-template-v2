import { useState } from "react";
import { ArrowRight, Calculator, Phone } from "lucide-react";
import { site } from "@/lib/site";

const ANIMALS = [
  { id: "raccoon", label: "Raccoon", base: 299 },
  { id: "possum", label: "Possum / Opossum", base: 249 },
  { id: "squirrel", label: "Squirrel", base: 229 },
  { id: "bat", label: "Bats", base: 349 },
] as const;

const PROPERTIES = [
  { id: "house", label: "Single-family home", mult: 1 },
  { id: "townhome", label: "Townhome / duplex", mult: 1.15 },
  { id: "commercial", label: "Commercial property", mult: 1.5 },
] as const;

const URGENCY = [
  { id: "standard", label: "Standard (2–3 days)", mult: 1 },
  { id: "sameday", label: "Same-day", mult: 1.2 },
  { id: "emergency", label: "24/7 emergency", mult: 1.4 },
] as const;

function round5(n: number) {
  return Math.round(n / 5) * 5;
}

const selectClass =
  "mt-2 min-h-12 w-full rounded-xl border border-border bg-background px-4 text-sm font-semibold outline-none focus:border-brand";

export function Estimator() {
  const [animal, setAnimal] = useState<(typeof ANIMALS)[number]["id"]>("raccoon");
  const [property, setProperty] = useState<(typeof PROPERTIES)[number]["id"]>("house");
  const [urgency, setUrgency] = useState<(typeof URGENCY)[number]["id"]>("standard");

  const base = ANIMALS.find((a) => a.id === animal)!.base;
  const mult =
    PROPERTIES.find((p) => p.id === property)!.mult *
    URGENCY.find((u) => u.id === urgency)!.mult;
  const low = round5(base * mult * 0.9);
  const high = round5(base * mult * 1.2);

  return (
    <section id="estimator" className="bg-surface py-10 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-[#1B4332] px-6 py-10 text-white sm:px-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFC300]">
                <Calculator className="size-4" /> Instant estimate
              </span>
              <h2 className="section-title mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
                What Will It Cost To Get Them Out?
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                Answer three quick questions and get an honest price range on the spot —
                no email required, no games.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-bold uppercase tracking-wide text-white/70">
                  Animal
                  <select
                    value={animal}
                    onChange={(e) => setAnimal(e.target.value as typeof animal)}
                    className={`${selectClass} text-foreground`}
                  >
                    {ANIMALS.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-xs font-bold uppercase tracking-wide text-white/70">
                  Property type
                  <select
                    value={property}
                    onChange={(e) => setProperty(e.target.value as typeof property)}
                    className={`${selectClass} text-foreground`}
                  >
                    {PROPERTIES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-xs font-bold uppercase tracking-wide text-white/70 sm:col-span-2">
                  How urgent is it?
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value as typeof urgency)}
                    className={`${selectClass} text-foreground`}
                  >
                    {URGENCY.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl bg-white p-8 text-foreground shadow-card sm:p-10">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Your estimated range
              </p>
              <p className="mt-3 text-5xl font-black tracking-tight text-[#1B4332] sm:text-6xl">
                ${low}–${high}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Covers humane removal plus an entry-point check. The final price is
                confirmed during our $45 inspection — and the inspection is free
                with any removal service.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground transition-transform hover:scale-[1.02]"
                >
                  Get My Exact Price <ArrowRight className="size-4" />
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#1B4332] px-6 py-3 text-sm font-bold text-[#1B4332]"
                >
                  <Phone className="size-4" /> {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
