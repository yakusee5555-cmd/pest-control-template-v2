import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 px-4 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur md:hidden">
      <div className="flex gap-2.5">
        <a
          href={site.phoneHref}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand text-base font-extrabold text-brand-foreground shadow-soft"
        >
          <Phone className="size-5" /> Call Now
        </a>
        <a
          href="/#contact"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-brand text-base font-extrabold text-brand"
        >
          Free Quote
        </a>
      </div>
      <p className="py-1.5 text-center text-xs text-muted-foreground">{site.phone}</p>
    </div>
  );
}
