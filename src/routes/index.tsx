import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import heirBottle from "@/assets/heir-bottle.jpg";
import heirPackaging from "@/assets/heir-packaging.jpg";

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

function Index() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="surface-honey absolute inset-x-0 top-0 h-1/2 opacity-60 md:hidden" />
        <div className="relative mx-auto max-w-6xl px-5 pt-12 pb-16 md:grid md:min-h-[80vh] md:grid-cols-2 md:items-center md:gap-16 md:px-10 md:py-24">
          <div className="order-2 mt-12 md:order-1 md:mt-0">
            <p className="text-[10px] font-semibold tracking-brand text-wood uppercase">
              New Signature · Sarkar
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[0.9] font-bold tracking-tight uppercase sm:text-6xl md:text-7xl">
              Sarkar
              <span className="block text-honey">Heir</span>
            </h1>
            <p className="mt-6 max-w-sm font-display text-lg leading-snug text-foreground italic md:text-xl">
              Sweetness that stays. Calmness that lingers.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              A clean citrus opening melts into honey, then rests in creamy vanilla and warm
              sandalwood — a fragrance built to feel calm on the skin, hour after hour.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#story"
                className="inline-flex justify-center bg-primary px-8 py-4 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85"
              >
                Discover the Fragrance
              </a>
              <span className="text-center text-[10px] tracking-[0.18em] text-muted-foreground uppercase sm:text-left">
                {VOLUME}
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="surface-honey relative mx-auto flex max-w-sm items-center justify-center px-6 py-10 shadow-soft md:max-w-none md:px-10 md:py-16">
              <img
                src={heirBottle}
                alt="SARKAR HEIR parfum bottle in white-honey glass"
                width={1024}
                height={1280}
                className="w-full max-w-[280px] mix-blend-multiply md:max-w-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="border-b border-border bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-10 md:py-28">
          <p className="text-[10px] font-semibold tracking-brand text-wood uppercase">
            The Fragrance
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight font-bold tracking-tight uppercase md:text-5xl">
            A quiet kind of sweetness
          </h2>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground md:text-lg">
            HEIR begins where most sweet fragrances end. The first minutes are cool and clean —
            citrus, air, a little green. Then honey arrives, softened rather than sugared, and the
            composition turns inward. What remains is vanilla and sandalwood: creamy, woody and
            steady, close enough to feel personal.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-lg">
            It is warm without weight, sweet without excess — the same Sarkar restraint, in a new
            register.
          </p>
        </div>
      </section>

      {/* NOTES */}
      <section id="notes" className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-28">
          <p className="text-[10px] font-semibold tracking-brand text-honey uppercase">
            The Notes
          </p>
          <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight font-bold tracking-tight uppercase md:text-5xl">
            Four movements
          </h2>
          <div className="mt-12 md:mt-16">
            {notes.map((n) => (
              <div
                key={n.name}
                className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-ink-foreground/15 py-7 md:grid-cols-[5rem_1fr_1.4fr] md:gap-x-10 md:py-9"
              >
                <span className="font-display text-sm text-honey/70">{n.step}</span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-ink-foreground/45 uppercase">
                    {n.tier}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold uppercase md:text-3xl">
                    {n.name}
                  </h3>
                </div>
                <p className="col-start-2 max-w-md text-sm leading-relaxed text-ink-foreground/60 md:col-start-3 md:self-center">
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
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-28">
          <h2 className="max-w-md font-display text-3xl leading-tight font-bold tracking-tight uppercase md:text-5xl">
            How it wears
          </h2>
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-12">
            {experience.map((e) => (
              <div key={e.title} className="border-t border-foreground/15 pt-6">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-wood uppercase">
                  {e.phase}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold md:text-2xl">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-LASTING */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
          <img
            src={heirPackaging}
            alt="SARKAR HEIR in the signature Sarkar matte black packaging"
            width={1440}
            height={960}
            loading="lazy"
            className="w-full"
          />
          <div>
            <p className="text-[10px] font-semibold tracking-brand text-wood uppercase">
              Built to Linger
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-bold tracking-tight uppercase md:text-5xl">
              It stays with you
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Composed at extrait strength, HEIR is made to hold its shape through the day. The
              sweetness fades gently rather than disappearing, leaving a soft woody warmth that
              people notice when they are close to you — never before.
            </p>
            <ul className="mt-8 max-w-md space-y-3 text-sm">
              {[
                "Extrait concentration for a slow, even fade",
                "Close, intimate trail rather than a loud projection",
                "Lingers on fabric long after the skin has quieted",
              ].map((t) => (
                <li key={t} className="flex gap-4 border-b border-border pb-3">
                  <span className="text-honey">—</span>
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PURCHASE */}
      <section id="product" className="bg-cream">
        <div className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-28">
          <div className="grid items-center gap-10 bg-background p-6 shadow-soft sm:p-10 md:grid-cols-2 md:gap-14 md:p-14">
            <div className="surface-honey flex items-center justify-center px-6 py-10">
              <img
                src={heirBottle}
                alt="SARKAR HEIR 100ml extrait de parfum bottle"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full max-w-[240px] mix-blend-multiply"
              />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-brand text-wood uppercase">
                Sarkar Perfume
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight uppercase md:text-5xl">
                Heir
              </h2>
              <p className="mt-3 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                Citrus · Honey · Vanilla · Sandalwood
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Fresh at the top, honeyed at the heart, warm and calming at the base. Unisex,
                extrait strength, in the signature Sarkar bottle.
              </p>
              <p className="mt-8 font-display text-3xl font-bold">{PRICE}</p>
              <p className="mt-1 text-xs text-muted-foreground">{VOLUME} · Incl. of all taxes</p>
              <a
                href="#product"
                className="mt-7 inline-flex w-full justify-center bg-primary px-8 py-4 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85 sm:w-auto"
              >
                Shop HEIR
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-16">
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
