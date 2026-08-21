import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import {
  LifestyleGallery,
  Reviews,
  Collection,
  FinalCta,
} from "@/components/heir-sections";
import heirBottleOptimized from "@/assets/heir-bottle-640.avif";
import heirPackagingOptimized from "@/assets/heir-packaging-768.avif";

// Price placeholder — edit here.
const PRICE = "₹ 1,699";
const VOLUME = "100ml Extrait de Parfum";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SARKAR HEIR — Honey, Vanilla & Sandalwood Parfum" },
      {
        name: "description",
        content:
          "SARKAR HEIR: a fresh citrus opening, a honeyed heart and a warm base of vanilla and sandalwood. Sweetness that stays. Calmness that lingers.",
      },
      { property: "og:title", content: "SARKAR HEIR — Honey, Vanilla & Sandalwood Parfum" },
      {
        property: "og:description",
        content: "Sweetness that stays. Calmness that lingers. The new signature parfum from SARKAR.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        href: heirBottleOptimized,
        as: "image",
        type: "image/avif",
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

const notes = [
  {
    step: "01",
    tier: "Top",
    name: "Fresh Citrus",
    copy: "A cold, clean opening — bergamot and lemon leaf lifted with green cardamom.",
  },
  {
    step: "02",
    tier: "Heart",
    name: "Honey",
    copy: "Honey blossom unfolds slowly: soft, golden, never sugary.",
  },
  {
    step: "03",
    tier: "Base",
    name: "Vanilla",
    copy: "Bourbon vanilla rounds the sweetness into something creamy and quiet.",
  },
  {
    step: "04",
    tier: "Base",
    name: "Sandalwood",
    copy: "Mysore sandalwood closes it — warm, woody, calming on skin.",
  },
];

const experience = [
  {
    phase: "First Impression",
    title: "Fresh at first",
    copy: "The opening is bright and clean, like cold air over citrus peel.",
  },
  {
    phase: "After an Hour",
    title: "Softly sweet in the heart",
    copy: "Honey settles in — a restrained sweetness that reads as warmth, not dessert.",
  },
  {
    phase: "Hours Later",
    title: "Warm and calming as it settles",
    copy: "Vanilla and sandalwood stay close to the skin, soft and unhurried.",
  },
];

function Eyebrow({ children, tone = "wood" }: { children: string; tone?: "wood" | "honey" }) {
  return (
    <p
      className={`text-[10px] font-semibold tracking-brand uppercase ${
        tone === "honey" ? "text-honey" : "text-wood"
      }`}
    >
      {children}
    </p>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory">
      <SiteHeader />

      <main>
      {/* HERO */}
      <section className="border-b border-border bg-ivory">
        <div className="mx-auto flex max-w-6xl flex-col px-6 pt-10 pb-14 md:grid md:grid-cols-[1fr_0.9fr] md:items-center md:gap-16 md:px-10 md:pt-20 md:pb-24 lg:gap-24">
          {/* Product visual */}
          <div className="order-1 md:order-2">
            <div className="surface-honey relative mx-auto flex aspect-[4/5] w-full max-w-[300px] items-center justify-center px-8 py-8 sm:max-w-[340px] md:aspect-[4/5] md:max-w-none md:px-12">
              <img
                src={heirBottleOptimized}
                alt="SARKAR HEIR parfum bottle in white-honey glass"
                width={640}
                height={640}
                fetchPriority="high"
                decoding="async"
                className="h-full w-auto max-w-full object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-2 mt-10 md:order-1 md:mt-0">
            <Eyebrow>New Signature</Eyebrow>
            <h1 className="mt-4 font-display text-[2.75rem] leading-[0.92] font-bold tracking-tight uppercase sm:text-6xl md:text-[5rem]">
              <span className="block text-muted-foreground/70 text-base font-semibold tracking-brand sm:text-lg md:text-xl">
                Sarkar
              </span>
              <span className="mt-2 block">Heir</span>
            </h1>
            <div className="mt-6 h-px w-14 bg-honey" />
            <p className="mt-6 max-w-sm font-display text-lg leading-snug font-medium sm:text-xl">
              Sweetness that stays. Calmness that lingers.
            </p>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
              A clean citrus opening melts into honey, then rests in creamy vanilla and warm
              sandalwood — built to feel calm on the skin, hour after hour.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#story"
                className="inline-flex min-h-[3.25rem] items-center justify-center bg-primary px-8 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85"
              >
                Discover the Fragrance
              </a>
              <span className="text-center text-[10px] tracking-[0.18em] text-muted-foreground uppercase sm:text-left">
                {VOLUME}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="border-b border-border bg-cream">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:px-10 md:py-32">
          <Eyebrow>The Fragrance</Eyebrow>
          <h2 className="mt-6 font-display text-[1.75rem] leading-[1.1] font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
            A quiet kind of sweetness
          </h2>
          <p className="mt-8 text-[0.9375rem] leading-[1.85] text-muted-foreground md:text-base">
            HEIR begins where most sweet fragrances end. The first minutes are cool and clean —
            citrus, air, a little green. Then honey arrives, softened rather than sugared, and the
            composition turns inward. What remains is vanilla and sandalwood: creamy, woody and
            steady, close enough to feel personal.
          </p>
          <p className="mt-5 text-[0.9375rem] leading-[1.85] text-muted-foreground md:text-base">
            Warm without weight, sweet without excess — the same Sarkar restraint, in a new register.
          </p>
        </div>
      </section>

      <LifestyleGallery />

      {/* NOTES */}
      <section id="notes" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-32">
          <Eyebrow tone="honey">The Notes</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-[1.75rem] leading-[1.1] font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
            Four movements
          </h2>
          <div className="mt-12 md:mt-16">
            {notes.map((n) => (
              <div
                key={n.name}
                className="grid grid-cols-[2rem_1fr] gap-x-4 border-t border-ink-foreground/15 py-7 md:grid-cols-[4rem_1fr_1.3fr] md:items-baseline md:gap-x-10 md:py-10"
              >
                <span className="font-display text-xs text-honey/70">{n.step}</span>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-ink-foreground/45 uppercase">
                    {n.tier}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-tight font-semibold uppercase sm:text-2xl md:text-3xl">
                    {n.name}
                  </h3>
                </div>
                <p className="col-start-2 mt-3 max-w-md text-sm leading-relaxed text-ink-foreground/60 md:col-start-3 md:mt-0">
                  {n.copy}
                </p>
              </div>
            ))}
            <div className="border-t border-ink-foreground/15" />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-b border-border bg-ivory">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-32">
          <Eyebrow>How It Wears</Eyebrow>
          <h2 className="mt-5 max-w-md font-display text-[1.75rem] leading-[1.1] font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
            Three hours, three moods
          </h2>
          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-12">
            {experience.map((e) => (
              <div key={e.title} className="border-t border-foreground/15 pt-6">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-wood uppercase">
                  {e.phase}
                </p>
                <h3 className="mt-4 font-display text-lg leading-snug font-semibold md:text-xl">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-LASTING */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
          <img
            src={heirPackagingOptimized}
            alt="SARKAR HEIR in the signature Sarkar matte black packaging"
            width={768}
            height={768}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
          />
          <div>
            <Eyebrow>Built to Linger</Eyebrow>
            <h2 className="mt-5 font-display text-[1.75rem] leading-[1.1] font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
              It stays with you
            </h2>
            <p className="mt-6 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
              Composed at extrait strength, HEIR holds its shape through the day. The sweetness
              fades gently rather than disappearing, leaving a soft woody warmth noticed only by
              those close to you.
            </p>
            <ul className="mt-8 max-w-md">
              {[
                "Extrait concentration for a slow, even fade",
                "A close, intimate trail rather than loud projection",
                "Lingers on fabric long after the skin has quieted",
              ].map((t) => (
                <li key={t} className="flex gap-4 border-b border-border py-4 first:border-t">
                  <span className="text-honey">—</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PURCHASE */}
      <section id="product" className="bg-ivory">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-32">
          <div className="grid items-center gap-10 border border-border bg-background p-6 sm:p-10 md:grid-cols-[0.85fr_1fr] md:gap-16 md:p-14">
            <div className="surface-honey flex aspect-[4/5] items-center justify-center px-6 py-8">
              <img
                src={heirBottleOptimized}
                alt="SARKAR HEIR 100ml extrait de parfum bottle"
                width={640}
                height={640}
                loading="lazy"
                decoding="async"
                className="h-full w-auto object-contain mix-blend-multiply"
              />
            </div>
            <div>
              <Eyebrow>Sarkar Perfume</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
                Heir
              </h2>
              <p className="mt-3 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Citrus · Honey · Vanilla · Sandalwood
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Fresh at the top, honeyed at the heart, warm and calming at the base. Unisex,
                extrait strength, in the signature Sarkar bottle.
              </p>
              <div className="mt-8 flex items-baseline gap-3 border-t border-border pt-6">
                <p className="font-display text-3xl font-bold">{PRICE}</p>
                <p className="text-xs text-muted-foreground">{VOLUME}</p>
              </div>
              <a
                href="#product"
                className="mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-center bg-primary px-8 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85 sm:w-auto"
              >
                Shop HEIR
              </a>
              <p className="mt-3 text-[11px] text-muted-foreground">Inclusive of all taxes</p>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <Collection />
      <FinalCta />
      </main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-display text-lg font-bold tracking-brand uppercase">Sarkar</p>
              <p className="mt-2 text-xs tracking-[0.18em] text-honey uppercase">Heir</p>
              <p className="mt-4 max-w-xs text-xs leading-relaxed text-ink-foreground/50">
                Sweetness that stays. Calmness that lingers.
              </p>
            </div>
            <nav className="flex flex-col gap-3 text-[11px] tracking-[0.18em] uppercase">
              <a href="#story" className="text-ink-foreground/60 hover:text-honey">
                The Fragrance
              </a>
              <a href="#notes" className="text-ink-foreground/60 hover:text-honey">
                Notes
              </a>
              <a href="#product" className="text-ink-foreground/60 hover:text-honey">
                Shop Heir
              </a>
            </nav>
          </div>
          <p className="mt-12 border-t border-ink-foreground/15 pt-6 text-[10px] tracking-[0.15em] text-ink-foreground/40 uppercase">
            © {new Date().getFullYear()} Sarkar Perfume. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
