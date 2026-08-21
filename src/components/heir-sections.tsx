import lifeBedside from "@/assets/life-bedside-576.avif";
import lifeVanity from "@/assets/life-vanity-576.avif";
import lifeCandle from "@/assets/life-candle-576.avif";
import lifeShelf from "@/assets/life-shelf-576.avif";
import heirBottle from "@/assets/heir-bottle-640.avif";
import sarkarNoble from "@/assets/sarkar-noble-400.avif";
import sarkarOrion from "@/assets/sarkar-orion-400.avif";
import sarkarRegal from "@/assets/sarkar-regal-400.avif";
import sarkarThrone from "@/assets/sarkar-throne-400.avif";

const gallery = [
  { src: lifeBedside, alt: "SARKAR HEIR on a wooden bedside table beside an open book and linen sheets" },
  { src: lifeVanity, alt: "SARKAR HEIR on a cream vanity in morning light with fine gold jewellery" },
  { src: lifeCandle, alt: "SARKAR HEIR on a ceramic tray with a lit candle and dried flowers" },
  { src: lifeShelf, alt: "SARKAR HEIR on a shelf with warm beige décor" },
];

const reviews = [
  {
    name: "Aanya M.",
    quote: "Fresh in the morning and warm by evening. It genuinely lasts all day.",
  },
  {
    name: "Rhea K.",
    quote: "The honey isn't overpowering. It's soft, calming and feels incredibly expensive.",
  },
  {
    name: "Vihaan S.",
    quote: "Finally a sweet fragrance that still smells clean. I've already bought a second bottle.",
  },
  {
    name: "Ishita P.",
    quote: "My everyday signature scent. Vanilla and sandalwood blend beautifully.",
  },
];

const collection = [
  {
    name: "Heir",
    desc: "Fresh citrus, honey, vanilla and sandalwood.",
    img: heirBottle,
    blend: true,
    isNew: true,
    href: "#product",
  },
  {
    name: "Noble",
    desc: "Silent, sharp and disciplined — bergamot over oakmoss.",
    img: sarkarNoble,
    href: "https://www.sarkar.store/",
  },
  {
    name: "Orion",
    desc: "Bright and expansive, with a cool aromatic clarity.",
    img: sarkarOrion,
    href: "https://www.sarkar.store/",
  },
  {
    name: "Regal",
    desc: "Deep, composed and quietly commanding.",
    img: sarkarRegal,
    href: "https://www.sarkar.store/",
  },
  {
    name: "Throne",
    desc: "Rich and enduring — the boldest of the house.",
    img: sarkarThrone,
    href: "https://www.sarkar.store/",
  },
];

function Stars() {
  return (
    <p aria-label="5 out of 5 stars" className="text-sm tracking-[0.2em] text-honey">
      ★★★★★
    </p>
  );
}

export function LifestyleGallery() {
  return (
    <section id="gallery" className="border-b border-border bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <div className="max-w-md">
          <p className="text-[10px] font-semibold tracking-brand text-wood uppercase">In Context</p>
          <h2 className="mt-5 font-display text-[1.75rem] leading-[1.1] font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
            Seen in your space
          </h2>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
            HEIR is made for ordinary hours — mornings at the vanity, evenings by candlelight.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-6">
          {gallery.map((g) => (
            <figure key={g.alt} className="overflow-hidden bg-cream">
              <img
                src={g.src}
                alt={g.alt}
                width={1024}
                height={1280}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="border-b border-border bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <div className="max-w-md">
          <p className="text-[10px] font-semibold tracking-brand text-wood uppercase">Reviews</p>
          <h2 className="mt-5 font-display text-[1.75rem] leading-[1.1] font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
            Loved by every mood
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col border border-border bg-background p-6 shadow-soft md:p-7"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-[11px] font-semibold tracking-[0.18em] uppercase">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Collection() {
  return (
    <section id="collection" className="border-b border-border bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <div className="max-w-md">
          <p className="text-[10px] font-semibold tracking-brand text-wood uppercase">The House</p>
          <h2 className="mt-5 font-display text-[1.75rem] leading-[1.1] font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
            Explore the Sarkar collection
          </h2>
        </div>

        <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-5">
          {collection.map((c) => (
            <article
              key={c.name}
              className="flex w-[70vw] max-w-[260px] shrink-0 snap-start flex-col border border-border bg-background md:w-auto md:max-w-none"
            >
              <div className="relative flex aspect-square items-center justify-center bg-cream p-6">
                {c.isNew && (
                  <span className="absolute top-3 left-3 bg-primary px-2 py-1 text-[9px] font-semibold tracking-[0.18em] text-primary-foreground uppercase">
                    New
                  </span>
                )}
                <img
                  src={c.img}
                  alt={`Sarkar ${c.name} perfume bottle`}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-auto object-contain ${c.blend ? "mix-blend-multiply" : ""}`}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold tracking-tight uppercase">{c.name}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
                <a
                  href={c.href}
                  className="mt-5 inline-flex min-h-[2.75rem] items-center justify-center border border-foreground px-4 text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  View {c.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="surface-honey">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-28">
        <h2 className="font-display text-[1.75rem] leading-[1.1] font-bold tracking-tight uppercase sm:text-4xl md:text-5xl">
          Make HEIR your signature.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
          Sweetness that stays. Calmness that lingers.
        </p>
        <a
          href="#product"
          className="mt-8 inline-flex min-h-[3.25rem] w-full items-center justify-center bg-primary px-10 text-[11px] font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85 sm:w-auto"
        >
          Shop HEIR
        </a>
      </div>
    </section>
  );
}
