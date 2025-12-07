import { useState } from "react";
import { Menu, X } from "lucide-react";

function PrimaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      data-testid={`btn-primary-${href.replace(/[#/]/g, "").slice(0, 20)}`}
      className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 hover:bg-sky-300 transition-colors"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      data-testid={`btn-secondary-${href.replace(/[#/]/g, "").slice(0, 20)}`}
      className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/5 transition-colors"
    >
      {children}
    </a>
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 -left-16 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-rose-400/15 blur-3xl" />
      </div>

      <div className="container py-10 md:py-16 space-y-20 md:space-y-28">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-rose-400 shadow-soft-glow" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide" data-testid="brand-name">
                JackofAI<span className="align-super text-[10px]">™</span>
              </span>
              <span className="text-xs text-slate-400">
                Warm, simple AI products
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300" data-testid="desktop-nav">
            <a href="#products" className="hover:text-sky-300">
              Products
            </a>
            <a href="#talent" className="hover:text-sky-300">
              Talent & Freelancers
            </a>
            <a href="#early-adopters" className="hover:text-sky-300">
              Early Adopters
            </a>
            <a href="#investors" className="hover:text-sky-300">
              Investors
            </a>
            <a href="#founder" className="hover:text-sky-300">
              Founder
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {mobileMenuOpen && (
          <nav className="md:hidden glass-card p-4 space-y-3 text-sm font-medium text-slate-300" data-testid="mobile-nav">
            <a href="#products" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              Products
            </a>
            <a href="#talent" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              Talent & Freelancers
            </a>
            <a href="#early-adopters" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              Early Adopters
            </a>
            <a href="#investors" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              Investors
            </a>
            <a href="#founder" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              Founder
            </a>
          </nav>
        )}

        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] items-center" data-testid="hero-section">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300/80">
              JackofAI<span className="align-super text-[8px]">™</span> Studio
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight" data-testid="hero-title">
              We build{" "}
              <span className="gradient-text">warm, simple AI apps</span>{" "}
              that bring people closer.
            </h1>
            <p className="max-w-xl text-sm md:text-base text-slate-300" data-testid="hero-description">
              JackofAI™ is a creative technology studio shaping meaningful
              digital experiences — starting with ChristmasPulse and
              FamilyPulse.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PrimaryButton href="#products">
                Explore ChristmasPulse
              </PrimaryButton>
              <SecondaryButton href="#products">
                Explore FamilyPulse
              </SecondaryButton>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 text-xs text-slate-400">
              <SecondaryButton href="#early-adopters">
                Join Early Access
              </SecondaryButton>
              <SecondaryButton href="#talent">
                Work With Us
              </SecondaryButton>
            </div>
          </div>

          <div className="glass-card p-6 md:p-7 space-y-5" data-testid="product-teaser-card">
            <p className="text-xs font-medium text-sky-300 uppercase tracking-[0.2em]">
              Coming Soon
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-slate-100">
                  ChristmasPulse
                </span>
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-[10px] font-medium text-sky-300">
                  Festive app
                </span>
              </div>
              <p className="text-xs text-slate-300">
                A joyful digital experience designed to help people create warm,
                heartfelt Christmas moments — cards, messages, and shared
                memories made easy.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-sky-500/40 via-slate-500/20 to-rose-400/40" />

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-slate-100">
                  FamilyPulse
                </span>
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-[10px] font-medium text-rose-300">
                  Family app
                </span>
              </div>
              <p className="text-xs text-slate-300">
                A simple, calming app focused on supporting everyday emotional
                connection within families — gentle reflection, communication,
                and togetherness.
              </p>
            </div>

            <div className="pt-3 text-[10px] text-slate-400">
              Both products are currently in development. Join as an early
              adopter, collaborator, or supporter.
            </div>
          </div>
        </section>

        <section id="products" className="space-y-6" data-testid="products-section">
          <h2 className="text-lg md:text-2xl font-semibold">
            Our upcoming apps
          </h2>
          <p className="max-w-2xl text-sm text-slate-300">
            We're starting with two focused experiences: one for Christmas
            joy, and one for quiet everyday connection at home.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card p-6 space-y-4" data-testid="card-christmaspulse">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎄</span>
                  <div>
                    <h3 className="text-base font-semibold">
                      ChristmasPulse — Coming Soon
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Festive, warm, creative
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-300">
                  Coming soon
                </span>
              </div>
              <p className="text-sm text-slate-300">
                A joyful digital experience designed to help people create warm,
                heartfelt Christmas moments — cards, messages, and shared
                memories made easy.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PrimaryButton href="https://christmaspulse.com">
                  Visit ChristmasPulse.com
                </PrimaryButton>
                <SecondaryButton href="#early-adopters">
                  Join waitlist
                </SecondaryButton>
              </div>
            </div>

            <div className="glass-card p-6 space-y-4" data-testid="card-familypulse">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">❤️</span>
                  <div>
                    <h3 className="text-base font-semibold">
                      FamilyPulse — Coming Soon
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Calm, daily, grounded
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-[10px] font-medium text-rose-300">
                  Coming soon
                </span>
              </div>
              <p className="text-sm text-slate-300">
                A simple, calming app focused on supporting everyday emotional
                connection within families — gentle reflection, communication,
                and togetherness.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <PrimaryButton href="https://familypulse.live">
                  Visit FamilyPulse.live
                </PrimaryButton>
                <SecondaryButton href="#early-adopters">
                  Join waitlist
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4" data-testid="philosophy-section">
          <h2 className="text-lg md:text-2xl font-semibold">
            Our philosophy
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-sm md:text-base font-medium">
              Technology feels best when it feels human.
            </p>
            <p className="text-sm text-slate-300">
              We believe digital products should make life warmer — not louder.
              That's why we build small, simple apps with emotional clarity
              and thoughtful design at their core.
            </p>
            <div className="grid gap-4 md:grid-cols-3 text-sm">
              <div>
                <p className="font-semibold text-slate-100">Warm design</p>
                <p className="text-slate-300 text-xs mt-1">
                  Intuitive, human, emotionally grounded experiences that feel
                  calm rather than overwhelming.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  Simple experiences
                </p>
                <p className="text-slate-300 text-xs mt-1">
                  Tiny apps with meaningful moments — focused, deliberate, and
                  easy to return to.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  Real connection
                </p>
                <p className="text-slate-300 text-xs mt-1">
                  Tools that bring people closer every day, rather than pulling
                  attention away from what matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="talent" className="space-y-4" data-testid="talent-section">
          <h2 className="text-lg md:text-2xl font-semibold">
            Work with us: talent & freelancers
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-sm text-slate-300">
              We're building our early team — slowly and thoughtfully.
              We're looking for talented, creative collaborators who care
              about meaningful digital experiences.
            </p>
            <ul className="grid gap-2 text-sm text-slate-200 md:grid-cols-2">
              <li>• Developers (React Native, Next.js, full-stack)</li>
              <li>• UI/UX designers with a warm, emotional style</li>
              <li>• Motion & video creators</li>
              <li>• Illustrators and visual storytellers</li>
              <li>• AI creatives and product thinkers</li>
              <li>• Freelancers & part-time contributors</li>
              <li>• Early-stage advisors</li>
            </ul>
            <p className="text-xs text-slate-400">
              If you enjoy building small, beautiful things that matter — we'd
              love to hear from you.
            </p>
            <SecondaryButton href="mailto:hello@jackofai.com?subject=Talent%20Network%20%2F%20Collaboration">
              Join our talent network
            </SecondaryButton>
          </div>
        </section>

        <section id="early-adopters" className="space-y-4" data-testid="early-adopters-section">
          <h2 className="text-lg md:text-2xl font-semibold">
            For early adopters
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-sm text-slate-300">
              We're inviting early adopters to test, explore, and give
              feedback on our upcoming releases.
            </p>
            <p className="text-sm text-slate-300">
              Get early access to:
            </p>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>• ChristmasPulse</li>
              <li>• FamilyPulse</li>
            </ul>
            <p className="text-xs text-slate-400">
              Be part of crafting the experience from the very beginning.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href="mailto:hello@jackofai.com?subject=ChristmasPulse%20Early%20Access">
                ChristmasPulse early access
              </PrimaryButton>
              <SecondaryButton href="mailto:hello@jackofai.com?subject=FamilyPulse%20Early%20Access">
                FamilyPulse early access
              </SecondaryButton>
            </div>
          </div>
        </section>

        <section id="investors" className="space-y-4" data-testid="investors-section">
          <h2 className="text-lg md:text-2xl font-semibold">
            For investors & advisors
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-sm text-slate-300">
              If you're exploring opportunities in human-first AI or want
              to support purpose-driven digital products, we'd love to
              share our vision.
            </p>
            <p className="text-sm text-slate-300">
              We are open to connecting with:
            </p>
            <ul className="text-sm text-slate-200 space-y-1">
              <li>• Angel investors</li>
              <li>• Operators</li>
              <li>• Product advisors</li>
              <li>• Creative technology leaders</li>
            </ul>
            <PrimaryButton href="mailto:hello@jackofai.com?subject=Investor%20%2F%20Advisor%20Intro">
              Request founder intro
            </PrimaryButton>
          </div>
        </section>

        <section id="founder" className="space-y-4" data-testid="founder-section">
          <h2 className="text-lg md:text-2xl font-semibold">
            A note from the founder
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-sm text-slate-300">
              I started JackofAI™ to build simple, warm digital tools that help
              people feel more connected — to themselves, to their families, and
              to the moments that matter.
            </p>
            <p className="text-sm text-slate-300">
              The world doesn't need more complex apps. It needs softer,
              calmer, more human technology.
            </p>
            <p className="text-sm text-slate-300">
              If our mission resonates with you — whether you're a
              creator, collaborator, investor, or early supporter — I'd
              love to connect.
            </p>
            <p className="text-sm font-medium text-slate-100" data-testid="founder-name">— Bhavik Patel</p>
          </div>
        </section>

        <footer className="border-t border-white/5 pt-6 pb-10 text-xs text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-3" data-testid="footer">
          <div>
            JackofAI<span className="align-super text-[8px]">™</span> ·{" "}
            {new Date().getFullYear()}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-sky-300">
              Home
            </a>
            <a href="#products" className="hover:text-sky-300">
              Products
            </a>
            <a href="#talent" className="hover:text-sky-300">
              Talent
            </a>
            <a href="mailto:hello@jackofai.com" className="hover:text-sky-300">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
