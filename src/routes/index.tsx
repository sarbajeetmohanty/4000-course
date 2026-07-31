import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import chaiImg from "@/assets/chai.png";
import { TopBar } from "@/components/TopBar";
import { FloatingFomo } from "@/components/FloatingFomo";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4000+ Premium Courses Bundle — Lifetime Access for ₹99" },
      {
        name: "description",
        content:
          "Get lifetime access to 4000+ premium courses across 30+ categories — coding, AI, marketing, design, finance and more — for a one-time ₹99.",
      },
      { property: "og:title", content: "4000+ Premium Courses Bundle — Lifetime Access for ₹99" },
      {
        property: "og:description",
        content:
          "One-time ₹99 for 4000+ premium courses, 500GB of bonus resources and lifetime Google Drive access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const BRAND = "SkillVault";
// Superprofile checkout link — replace with your live Superprofile product URL
const BUY_URL = "https://superprofile.bio/";

const benefits = [
  { icon: "📚", title: "Massive Library", text: "4000+ Courses covering everything imaginable" },
  { icon: "🧮", title: "Unbelievable Math", text: "Less than ₹0.02 per premium course file" },
  {
    icon: "🎯",
    title: "All Experience Levels",
    text: "Curated roadmaps for absolute beginners to masters",
  },
  {
    icon: "🗂️",
    title: "Flawlessly Organized",
    text: "Categorized Google Drive folders for instant view",
  },
  { icon: "🚀", title: "Future-Proof Skills", text: "AI, Web3, Copywriting, Marketing & Sales" },
  {
    icon: "♾️",
    title: "Lifetime access",
    text: "One-time payment. Never pay a renewal fee again.",
  },
];

const categories = [
  "💻 Web Development",
  "🐍 Python",
  "📊 Data Science",
  "📈 Data Analytics",
  "🤖 AI & ChatGPT",
  "☁️ Cloud Computing",
  "🔧 DevOps",
  "🌐 Networking",
  "💻 Programming",
  "⚙️ Coding",
  "🎬 Video Editing",
  "🎨 Graphic Designing",
  "🎮 2D & 3D Animation",
  "📱 Digital Marketing",
  "💰 Online Earning",
  "📊 Sales",
  "💼 Freelancing",
  "🏷️ Branding",
  "📝 Content Creation",
  "📝 Copywriting",
  "📈 Trading",
  "🚀 YouTube Automation",
  "📺 YouTube Blueprint",
  "🛒 Ecommerce",
  "📈 Career Growth",
  "🧠 Mindset",
  "📖 Self Development",
  "💬 Communication",
  "⚡ Productivity",
  "🗣️ English Speaking",
  "💰 Personal Finance",
  "📱 Social Media",
  "🎯 Digital Skills",
];

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    text: "Honestly, 4000+ Courses at ₹99 felt like a scam. But I trusted my gut and bought it. The Google Drive link arrived instantly. It's fully packed and beautifully organized! Best investment of my college life.",
  },
  {
    name: "Rahul Verma",
    city: "Delhi",
    text: "The categories are insane. I wanted to learn video editing and trading, and this bundle has top-tier courses for both! Google Drive loading is incredibly fast.",
  },
  {
    name: "Anjali Patel",
    city: "Bangalore",
    text: "Perfect! Instant access on email. The marketing roadmaps are super structured. Extremely helpful for my startup.",
  },
];

const faqs = [
  {
    q: "How do I receive the courses after completing payment?",
    a: `Immediately after a successful checkout, you will receive an automated email from ${BRAND} with a lifetime Google Drive link containing all the categories. You can also view it on the instant success page.`,
  },
  {
    q: "Are these courses in English or Hindi?",
    a: "The bundle contains a carefully curated mix. Major technical fields have both English and Hindi courses, making learning super simple!",
  },
  {
    q: "Can I access them on my mobile or tablet?",
    a: "Yes! Since the courses are hosted securely on Google Drive, you can access, read, stream, or download them on any device: smartphones, iPads, Macs, or Windows laptops.",
  },
  {
    q: "Is there any monthly subscription or renewal fees?",
    a: "No. The ₹99 price is a strictly one-time payment for lifetime access. There are absolutely no hidden charges, memberships, or renewals. Ever.",
  },
];

function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(left / 3600)).padStart(2, "0");
  const m = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return { h, m, s };
}

function TimerChip({ value, label }: { value: string; label: string }) {
  return (
    <span className="flex flex-col items-center">
      <span className="min-w-[2.2rem] rounded-md bg-surface-2 px-2 py-1 font-mono text-sm font-bold tabular-nums text-gold">
        {value}
      </span>
      <span className="mt-0.5 text-[9px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </span>
  );
}

function LandingPage() {
  
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowExit(true), 20000);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />
      <FloatingFomo />      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-12rem] h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-gradient-brand opacity-20 blur-[120px]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            🔥 Ultimate Career Acceleration Bundle
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Unlock 4000+ Elite Premium Courses{" "}
            <span className="text-gradient-brand">for the Price of One Cutting Chai</span>
            <img
              src={chaiImg}
              alt="A glass of Indian masala chai"
              width={768}
              height={768}
              className="ml-2 inline-block h-20 w-20 align-middle sm:h-28 sm:w-28 drop-shadow-[0_6px_18px_rgba(0,0,0,0.5)]"
            />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Business · AI · Marketing · Coding · Video Editing · Finance · Self-Growth &amp; 30+
            Categories
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-xl text-muted-foreground line-through">₹3,799</span>
            <span className="text-5xl font-extrabold text-primary">₹99 only</span>
          </div>
          <p className="mt-3 text-sm font-semibold text-gold">
            🔥 97% OFF — ₹99 Offer • Valid This Today Only ⏰
          </p>

          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-brand px-10 py-4 text-base font-bold text-primary-foreground shadow-glow animate-cta transition-transform hover:scale-[1.03]"
          >
            BUY NOW — ₹99 · Instant Access
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Secure checkout · UPI · GPay · PhonePe · Cards
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-4">
            {["100% Secured", "Instant Access", "Lifetime Download", "Mobile + PC Compatible"].map(
              (t) => (
                <div key={t} className="rounded-xl border border-border bg-surface px-3 py-3">
                  ✅ {t}
                </div>
              ),
            )}
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <div className="text-gold">⭐⭐⭐⭐⭐</div>
            <p className="mt-1">Rated 4.9/5 by 2,400+ learners across India</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Why This Bundle is Absolutely Game-Changing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Stop spending thousands on separate courses. Own the world's most complete digital
            knowledge vault today.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <div className="text-3xl">{b.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-border bg-surface/40 px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">30+ Highly In-Demand Specializations</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-surface-2 px-4 py-2 text-sm text-foreground/90"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            📚 4000+ Premium Courses · ⭐ 4.9/5 Rating · ✅ 2,400+ Active Learners
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            🌍 Dual Hindi &amp; English Media · 🎧 500GB Vault Space · 📱 Lifetime Drive Access
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Smart Choice or Expensive Mistake?
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                The Expensive Way
              </p>
              <p className="mt-3 text-2xl font-bold text-destructive">
                ₹6,799 / per individual course
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  "Limited to one single topic",
                  "Extremely expensive scaling cost",
                  "No bonus materials or toolkits",
                  "Time-bound access logs",
                ].map((t) => (
                  <li key={t}>❌ {t}</li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl border border-primary/60 bg-surface p-8 shadow-glow">
              <span className="absolute -top-3 left-8 rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-[oklch(0.2_0.04_60)]">
                ⭐ Best Lifetime Value
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                The Smart {BRAND} Way
              </p>
              <p className="mt-3 text-2xl font-bold">
                ₹99 <span className="text-lg text-muted-foreground line-through">₹3,799</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/90">
                {[
                  "Unlimited 4000+ Premium Courses",
                  "30+ Highly in-demand categories",
                  "Lifetime Google Drive Access",
                  "Free 500GB Additional Toolkits",
                ].map((t) => (
                  <li key={t}>✅ {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-surface/40 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Loved by Over 2,400+ Happy Career Hustlers
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-surface p-6">
                <div className="text-gold">⭐⭐⭐⭐⭐</div>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.city} • Verified Purchase ✅</p>
                <p className="mt-4 text-sm text-muted-foreground">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus */}
      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-primary/40 bg-surface p-10 text-center shadow-glow">
          <h3 className="text-2xl font-bold text-gradient-brand sm:text-3xl">
            INSANE EXCLUSIVE FREE BONUS!
          </h3>
          <p className="mt-4 text-muted-foreground">
            Unlock{" "}
            <strong className="text-foreground">
              500GB of Premium Resources, Templates &amp; Assets
            </strong>{" "}
            absolutely FREE
          </p>
          <p className="mt-2 text-sm text-gold">
            Offer valid only if you checkout before the countdown timer hits zero.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              "🎧 500GB Extra Media",
              "🏆 Master Resume Templates",
              "🧭 Career Growth Blueprints",
              "📊 High-Productivity Planners",
              "✅ Freelancer Contract Templates",
            ].map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-surface-2 px-4 py-2 text-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold"
                >
                  {f.q}
                  <span className="text-primary">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy */}
      <section id="payment" className="border-t border-border bg-surface/40 px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Claim the Entire Digital Learning Library Forever
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            4000+ Premium Courses · 500GB Free Bonuses · Lifetime Updates
          </p>

          <div className="mt-10 rounded-3xl border border-border bg-surface p-8">
            <div className="flex items-center justify-center gap-3">
              <span className="text-xl text-muted-foreground line-through">₹3,799</span>
              <span className="text-4xl font-extrabold text-primary">₹99</span>
              <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-gold">
                97% OFF
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              One-time payment · No renewals · Lifetime access
            </p>

            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl bg-gradient-brand py-4 text-center font-bold text-primary-foreground shadow-glow animate-cta transition-transform hover:scale-[1.01]"
            >
              BUY NOW — ₹99
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Instant access on email · UPI · GPay · PhonePe · Cards
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-10 text-center text-sm text-muted-foreground">
        🔒 Fully Verified Secure Payments · © {new Date().getFullYear()} {BRAND}
      </footer>

      {/* Chat support */}
      <a
        href="https://wa.me/910000000000"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Chat Support
      </a>

      {/* Exit intent bar */}
      {showExit && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-surface-2 px-4 py-4">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
            <p className="text-sm">
              🚀 <strong>Wait! Special Price ₹99!</strong> Complete checkout now to secure 500GB of
              FREE digital bonuses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-brand px-5 py-2 text-sm font-bold text-primary-foreground"
              >
                Buy Now — ₹99 →
              </a>
              <button onClick={() => setShowExit(false)} className="text-sm text-muted-foreground">
                ✕ Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
