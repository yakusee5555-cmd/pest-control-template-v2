import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const areaLinks = [
  { label: "Hialeah, FL", href: "/#locations" },
  { label: "Miami Lakes, FL", href: "/#locations" },
  { label: "Doral, FL", href: "/#locations" },
  { label: "Opa-locka, FL", href: "/#locations" },
];

export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid size-9 place-items-center rounded-xl bg-brand text-lg font-black">
              R
            </span>
            <span className="text-lg font-black uppercase tracking-tight">
              Rocky <span className="text-[#FFC300]">Raccoon</span>
            </span>
          </div>
          <p className="mt-4 text-sm">
            Humane wildlife removal for homes and businesses across Hialeah and Miami-Dade —
            raccoons, possums, and nuisance wildlife removed and kept out for good.
          </p>
          <div className="mt-5 space-y-3 text-sm">
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#FFC300]" /> {site.address}
            </span>
            <a href={`mailto:${site.email}`} className="flex min-h-12 items-center gap-2 hover:text-[#FFC300]">
              <Mail className="size-4 shrink-0 text-[#FFC300]" /> {site.email}
            </a>
            <a href={site.phoneHref} className="flex min-h-12 items-center gap-2 hover:text-[#FFC300]">
              <Phone className="size-4 shrink-0 text-[#FFC300]" /> {site.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$serviceSlug"
                  params={{ serviceSlug: s.slug }}
                  className="flex min-h-12 items-center transition-colors hover:text-[#FFC300]"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="flex min-h-12 items-center transition-colors hover:text-[#FFC300]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-white">Service Areas</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {areaLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="flex min-h-12 items-center transition-colors hover:text-[#FFC300]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs">
          © {new Date().getFullYear()} {site.name} · {site.legal}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
