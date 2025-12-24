import { useState } from "react";
import { Menu, X, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import jackofaiLogo from "@assets/image_1765154390436.jpeg";
import NewsletterSignup from "./newsletter-signup";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function AnimatedSection({ 
  children, 
  className = "",
  id,
  "data-testid": testId
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
  "data-testid"?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      data-testid={testId}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
}

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
      className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-sky-500/30 hover:bg-sky-300 transition-colors"
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
      className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-slate-100 hover:bg-white/5 transition-colors"
    >
      {children}
    </a>
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@jackofai.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 -left-16 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-rose-400/15 blur-3xl" />
      </div>

      <div className="container py-10 md:py-16 space-y-20 md:space-y-28">
        <header className="flex items-center justify-between gap-4">
          <a href="#" className="flex flex-col gap-1" data-testid="logo-link">
            <img 
              src={jackofaiLogo} 
              alt="JackofAI Logo" 
              className="h-10 md:h-12 w-auto select-none"
              data-testid="brand-logo"
            />
            <span className="text-[10px] md:text-xs text-slate-400 tracking-wide">
              Warm AI for real life
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300" data-testid="desktop-nav">
            <a href="#products" className="hover:text-sky-300">
              Products
            </a>
            <a href="#early-access" className="hover:text-sky-300">
              Early Access
            </a>
            <a href="/about" className="hover:text-sky-300">
              About
            </a>
            <a href="#contact" className="hover:text-sky-300">
              Contact
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
          <nav className="md:hidden glass-card p-4 space-y-3 text-base font-medium text-slate-300" data-testid="mobile-nav">
            <a href="#products" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              Products
            </a>
            <a href="#early-access" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              Early Access
            </a>
            <a href="/about" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#contact" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </nav>
        )}

        {/* HERO SECTION */}
        <AnimatedSection className="max-w-3xl space-y-6" data-testid="hero-section">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight" data-testid="hero-title">
            <span className="gradient-text">Warm AI for real life.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300" data-testid="hero-description">
            JackofAI builds calm, consumer AI products designed around everyday human moments — not productivity, not noise, not feeds.
          </p>
          <p className="text-base md:text-lg text-slate-300">
            We start with celebration and family connection. We build slowly, thoughtfully, and with care.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <PrimaryButton href="#products">
              Explore our products
            </PrimaryButton>
            <SecondaryButton href="#early-access">
              Join early access
            </SecondaryButton>
          </div>
        </AnimatedSection>

        {/* WHAT JACKOFAI IS */}
        <AnimatedSection className="space-y-4" data-testid="what-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            What JackofAI is
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-base md:text-lg text-slate-300">
              JackofAI is a consumer product company.
            </p>
            <p className="text-base text-slate-300">
              We design and ship small, focused apps that feel human, emotionally clear, and easy to return to.
            </p>
            <p className="text-base text-slate-300">
              AI is present, but never the point. The experience always comes first.
            </p>
          </div>
        </AnimatedSection>

        {/* OUR PRODUCTS */}
        <AnimatedSection id="products" className="space-y-6" data-testid="products-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            Our products
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card p-6 space-y-4" data-testid="card-christmaspulse">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎄</span>
                <h3 className="text-lg font-semibold">ChristmasPulse</h3>
              </div>
              <p className="text-base text-slate-300">
                A warm, festive app for creating and sharing meaningful Christmas moments — cards, messages, and simple creative expressions.
              </p>
              <p className="text-sm text-slate-400">
                Designed to feel joyful, personal, and calm.
              </p>
              <div className="pt-2">
                <PrimaryButton href="https://christmaspulse.com">
                  Visit ChristmasPulse
                </PrimaryButton>
              </div>
            </div>

            <div className="glass-card p-6 space-y-4" data-testid="card-familypulse">
              <div className="flex items-center gap-2">
                <span className="text-xl">❤️</span>
                <h3 className="text-lg font-semibold">FamilyPulse</h3>
              </div>
              <p className="text-base text-slate-300">
                A gentle app for everyday emotional connection within families — reflection, communication, and togetherness without pressure.
              </p>
              <p className="text-sm text-slate-400">
                Designed for presence, not performance.
              </p>
              <div className="pt-2">
                <PrimaryButton href="https://familypulse.live">
                  Visit FamilyPulse
                </PrimaryButton>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* OUR POINT OF VIEW */}
        <AnimatedSection className="space-y-4" data-testid="philosophy-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            Our point of view
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-base md:text-lg font-medium text-slate-100">
              Technology works best when it stays in the background.
            </p>
            <p className="text-base text-slate-300">
              We believe people don't need more apps — they need better ones. Calm is a feature. Emotional clarity matters more than feature depth.
            </p>
            <p className="text-base text-slate-300">
              So we build products that are intentionally small, emotionally grounded, and designed to support real life — not replace it.
            </p>
          </div>
        </AnimatedSection>

        {/* HOW WE BUILD */}
        <AnimatedSection className="space-y-4" data-testid="how-we-build-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            How we build
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-sky-300 mt-1">•</span>
                <div>
                  <p className="font-semibold text-slate-100">Warm design</p>
                  <p className="text-slate-300 text-sm">Interfaces feel human, intuitive, and emotionally considerate.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sky-300 mt-1">•</span>
                <div>
                  <p className="font-semibold text-slate-100">Simple experiences</p>
                  <p className="text-slate-300 text-sm">Fewer features. Clear intent. Easy to return to.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sky-300 mt-1">•</span>
                <div>
                  <p className="font-semibold text-slate-100">Real connection</p>
                  <p className="text-slate-300 text-sm">Technology should bring people closer, not compete for attention.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 pt-2 border-t border-white/10">
              These aren't brand values. They're design constraints.
            </p>
          </div>
        </AnimatedSection>

        {/* A NOTE FROM THE FOUNDER */}
        <AnimatedSection id="founder" className="space-y-4" data-testid="founder-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            A note from the founder
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-base text-slate-300">
              I started JackofAI to build the kind of products I wanted to exist — tools that feel calm, human, and respectful of people's lives.
            </p>
            <p className="text-base text-slate-300">
              The world doesn't need louder technology. It needs technology that knows when to step back.
            </p>
            <p className="text-base text-slate-300">
              If what we're building resonates with you, you're welcome to follow along.
            </p>
            <p className="text-base font-medium text-slate-100" data-testid="founder-name">— Bhavik Patel</p>
          </div>
        </AnimatedSection>

        {/* EARLY ACCESS */}
        <AnimatedSection id="early-access" className="space-y-4" data-testid="early-access-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            Early access
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-base text-slate-300">
              Our products are developed carefully and released gradually. Join for updates and early access invites.
            </p>
            <NewsletterSignup />
          </div>
        </AnimatedSection>

        {/* CONTACT */}
        <AnimatedSection id="contact" className="space-y-4" data-testid="contact-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            Contact
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4 text-base text-slate-300">
            <p>
              For early access, collaborations, or investor conversations:
            </p>
            <div className="space-y-1 text-slate-100">
              <p>
                <span className="font-semibold">Email: </span>
                <a href="mailto:hello@jackofai.com" className="text-sky-300 hover:text-sky-200" data-testid="contact-email">
                  hello@jackofai.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone: </span>
                <a href="tel:+61426996009" className="text-sky-300 hover:text-sky-200" data-testid="contact-phone">
                  +61 426 996 009
                </a>
              </p>
              <p>
                <span className="font-semibold">WhatsApp: </span>
                <a
                  href="https://wa.me/61426996009"
                  className="text-sky-300 hover:text-sky-200"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="contact-whatsapp"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>

            <p className="text-sm text-slate-400">
              If you'd like to collaborate, <a href="/opportunities" className="text-sky-300 hover:text-sky-200">view opportunities</a>.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="text-slate-400">Find us:</span>
              <a
                href="https://www.linkedin.com/company/jackofai"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-3 py-1 hover:border-sky-400 hover:text-sky-300 transition"
                data-testid="social-linkedin"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/jackofai"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-3 py-1 hover:border-sky-400 hover:text-sky-300 transition"
                data-testid="social-instagram"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@jackofai"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-3 py-1 hover:border-sky-400 hover:text-sky-300 transition"
                data-testid="social-youtube"
              >
                YouTube
              </a>
              <a
                href="https://github.com/jackofai"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-3 py-1 hover:border-sky-400 hover:text-sky-300 transition"
                data-testid="social-github"
              >
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <SecondaryButton href="mailto:hello@jackofai.com">
                Email JackofAI
              </SecondaryButton>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-slate-100 hover:bg-white/5 transition-colors"
                data-testid="copy-email-btn"
              >
                {emailCopied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Email
                  </>
                )}
              </button>
            </div>
          </div>
        </AnimatedSection>

        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col gap-6" data-testid="footer">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-base font-semibold text-slate-100">
                JackofAI<span className="align-super text-[10px]">™</span> Pty Ltd.
              </span>
              <span className="text-sm text-slate-300">
                Warm, simple AI products that bring people closer.
              </span>
              <span className="text-xs text-slate-400 mt-1">
                © {new Date().getFullYear()} JackofAI Pty Ltd. All rights reserved.
              </span>
            </div>

            <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-200">
              <a href="/" className="hover:text-sky-300 transition-colors">Home</a>
              <a href="#products" className="hover:text-sky-300 transition-colors">Products</a>
              <a href="#early-access" className="hover:text-sky-300 transition-colors">Early Access</a>
              <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-300">
            <a href="/about" className="hover:text-sky-300 transition-colors">About</a>
            <a href="/opportunities" className="hover:text-sky-300 transition-colors">Opportunities</a>
            <a href="/founder" className="hover:text-sky-300 transition-colors">Founder</a>
            <a href="/press" className="hover:text-sky-300 transition-colors">Press</a>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a href="/privacy" className="hover:text-sky-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-sky-300 transition-colors">Terms & Conditions</a>
            <a href="/cookies" className="hover:text-sky-300 transition-colors">Cookie Notice</a>
            <a href="/ai-disclaimer" className="hover:text-sky-300 transition-colors">AI Disclaimer</a>
          </div>
        </footer>
      </div>

      <a
        href="https://wa.me/61426996009"
        className="fixed bottom-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-white/15 transition-colors"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
        data-testid="whatsapp-floating-btn"
      >
        💬 WhatsApp
      </a>
    </main>
  );
}
