import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import heirBottle from "@/assets/heir-bottle.jpg";
import heirPackaging from "@/assets/heir-packaging.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HEIR by SARKAR — Vanilla & Sandalwood Parfum" },
      {
        name: "description",
        content:
          "HEIR (100ml) — a sweeter, long-lasting parfum of vanilla, sandalwood and calm freshness, in a white-honey chess bottle. New from SARKAR.",
      },
      { property: "og:title", content: "HEIR by SARKAR — Vanilla & Sandalwood Parfum" },
      {
        property: "og:description",
        content:
          "Sweet vanilla, creamy sandalwood, a fresh opening and a calming trail. The newest SARKAR parfum, in white-honey glass.",
      },
    ],
  }),
  component: Index,
});

const notes = [
  {
    tier: "Top",
    label: "The Fresh Opening",
    items: ["Bergamot Zest", "Pear Nectar", "Green Cardamom"],
  },
  {
    tier: "Heart",
    label: "The Calm Centre",
    items: ["Mysore Sandalwood", "Honey Blossom", "White Iris"],
  },
  {
    tier: "Base",
    label: "The Long Trail",
    items: ["Bourbon Vanilla", "Tonka Bean", "Warm Amber Musk"],
  },
];

const lineup = [
  {
    name: "HEIR",
    desc: "SWEET · VANILLA · SANDALWOOD",
    img: heirBottle,
    isNew: true,
  },
  {
    name: "NOBLE",
    desc: "FRESH · WOODY · AROMATIC",
    img: "https://www.sarkar.store/cdn/shop/files/noble_8c3802da-24c2-4b48-85bb-d75cc4769fd3.png?v=1785759252&width=832",
  },
  {
    name: "THRONE",
    desc: "WARM · LEATHER · AMBER",
    img: "https://www.sarkar.store/cdn/shop/files/Throne_6459f77a-e801-4216-9fb1-4c7f1daad3ef.png?v=1777539866&width=1000",
  },
  {
    name: "ORION",
    desc: "FRESH · CITRUS · AROMATIC",
    img: "https://www.sarkar.store/cdn/shop/files/Orion_62ec9098-e702-46a4-8a36-6d1931a1b8c2.png?v=1784572821&width=967",
  },
  {
    name: "REGAL",
    desc: "OUD · SMOKY · MUSK",
    img: "https://www.sarkar.store/cdn/shop/files/regal_168db6cc-97c6-4eaf-8578-43b94301e41a.png?v=1785759304&width=832",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section id="heir" className="surface-honey border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-10 md:py-20">
          <div className="order-2 md:order-1">
            <p className="text-[11px] font-semibold tracking-brand text-honey-foreground uppercase">
              New Introduction · 2026
            </p>
            <h1 className="mt-5 font-display text-6xl font-bold tracking-tight uppercase md:text-8xl">
              Heir
            </h1>
            <p className="mt-4 text-sm font-semibold tracking-[0.22em] uppercase">
              Sweet. Serene. Everlasting.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              It opens cold and clean, settles into creamy sandalwood, and stays for the
              rest of the day as vanilla, honey and soft amber. The calm that comes after
              the power.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="border border-primary/20 bg-background/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase">
                Unisex
              </span>
              <span className="border border-primary/20 bg-background/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase">
                Gourmand Woody
              </span>
              <span className="border border-primary/20 bg-background/60 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase">
                Extrait de Parfum
              </span>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <div>
                <p className="font-display text-3xl font-bold">₹ 1,699</p>
                <p className="text-xs text-muted-foreground">100ml · Incl. of all taxes</p>
              </div>
              <a
                href="#collection"
                className="bg-primary px-8 py-4 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85"
              >
                Add to Cart
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={heirBottle}
              alt="HEIR by SARKAR — chess-piece perfume bottle in white-honey glass"
              width={1024}
              height={1280}
              className="mx-auto w-full max-w-md shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className="bg-ink py-16 text-ink-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="font-display text-3xl font-bold tracking-[0.12em] uppercase md:text-5xl">
            The Composition
          </h2>
          <p className="mt-3 max-w-xl text-sm text-ink-foreground/60">
            Built around vanilla and sandalwood, sweetened with honey blossom, opened with
            cold citrus — engineered for 10+ hours of quiet projection.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden border border-ink-foreground/15 md:grid-cols-3">
            {notes.map((n) => (
              <div key={n.tier} className="border-ink-foreground/15 p-8 md:border-r md:last:border-r-0">
                <p className="text-[10px] font-semibold tracking-brand text-honey uppercase">
                  {n.tier} Notes
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold uppercase">
                  {n.label}
                </h3>
                <ul className="mt-6 space-y-2 text-sm text-ink-foreground/70">
                  {n.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-8 border-t border-ink-foreground/15 pt-10 sm:grid-cols-3">
            {[
              ["10–12 Hrs", "Longevity on skin"],
              ["Arm's Length", "Sillage · calm, not loud"],
              ["30% Concentration", "Extrait de parfum"],
            ].map(([a, b]) => (
              <div key={a}>
                <p className="font-display text-2xl font-bold uppercase">{a}</p>
                <p className="mt-1 text-xs tracking-[0.15em] text-ink-foreground/50 uppercase">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <img
            src={heirPackaging}
            alt="HEIR packaging — signature SARKAR black box with the white-honey bottle"
            width={1440}
            height={960}
            loading="lazy"
            className="w-full"
          />
          <div>
            <p className="text-[11px] font-semibold tracking-brand text-muted-foreground uppercase">
              Same House. New Glass.
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[0.1em] uppercase md:text-5xl">
              Honey in the Bottle
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              HEIR keeps the signature SARKAR silhouette and the matte black box, untouched.
              Only the glass changes — a milky white crown melting into warm honey at the
              base, so you can read the fragrance before you spray it.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Identical chess-piece bottle & gold collar",
                "Identical matte black rigid packaging",
                "New white-to-honey graded glass",
              ].map((t) => (
                <li key={t} className="flex gap-3 border-b border-border pb-3">
                  <span className="text-honey">—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <h2 className="text-center font-display text-2xl font-bold tracking-brand uppercase md:text-4xl">
          Shop the Collection
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-px bg-border md:grid-cols-5">
          {lineup.map((p) => (
            <article key={p.name} className="group bg-background p-6 text-center">
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-secondary">
                {p.isNew && (
                  <span className="absolute top-3 left-3 bg-honey px-2 py-1 text-[9px] font-bold tracking-[0.15em] text-honey-foreground uppercase">
                    New
                  </span>
                )}
                <img
                  src={p.img}
                  alt={`${p.name} parfum bottle by SARKAR`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-[0.15em] uppercase">
                {p.name}
              </h3>
              <p className="mt-1 text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
                {p.desc}
              </p>
              <a
                href="#heir"
                className="mt-4 inline-block border border-primary px-5 py-2 text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Buy Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-ink py-12 text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 text-center md:px-10">
          <p className="font-display text-lg font-bold tracking-brand uppercase">Sarkar</p>
          <p className="text-xs tracking-[0.15em] text-ink-foreground/50 uppercase">
            Unisex in spirit. Absolute in command.
          </p>
        </div>
      </footer>
    </div>
  );
}
