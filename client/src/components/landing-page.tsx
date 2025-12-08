import { useState } from "react";
import { Menu, X, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import jackofaiLogo from "@assets/image_1765154390436.jpeg";

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
  const [isFounderChatOpen, setIsFounderChatOpen] = useState(false);
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
              Warm, simple AI products
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300" data-testid="desktop-nav">
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
            <a href="#contact" className="block hover:text-sky-300" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </nav>
        )}

        <AnimatedSection className="grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] items-center" data-testid="hero-section">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300/80">
              JackofAI<span className="align-super text-[10px]">™</span> Studio
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight" data-testid="hero-title">
              We build{" "}
              <span className="gradient-text">warm, simple AI apps</span>{" "}
              that bring people closer.
            </h1>
            <p className="max-w-xl text-base md:text-lg text-slate-300" data-testid="hero-description">
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

            <div className="flex flex-wrap items-center gap-3 pt-4 text-sm text-slate-400">
              <SecondaryButton href="#early-adopters">
                Join Early Access
              </SecondaryButton>
              <SecondaryButton href="#talent">
                Work With Us
              </SecondaryButton>
            </div>
          </div>

          <div className="glass-card p-6 md:p-7 space-y-5" data-testid="product-teaser-card">
            <p className="text-sm font-medium text-sky-300 uppercase tracking-[0.2em]">
              Coming Soon
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-base font-semibold text-slate-100">
                  ChristmasPulse
                </span>
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                  Festive app
                </span>
              </div>
              <p className="text-sm text-slate-300">
                A joyful digital experience designed to help people create warm,
                heartfelt Christmas moments — cards, messages, and shared
                memories made easy.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-sky-500/40 via-slate-500/20 to-rose-400/40" />

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-base font-semibold text-slate-100">
                  FamilyPulse
                </span>
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300">
                  Family app
                </span>
              </div>
              <p className="text-sm text-slate-300">
                A simple, calming app focused on supporting everyday emotional
                connection within families — gentle reflection, communication,
                and togetherness.
              </p>
            </div>

            <div className="pt-3 text-xs text-slate-400">
              Both products are currently in development. Join as an early
              adopter, collaborator, or supporter.
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="products" className="space-y-6" data-testid="products-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            Our upcoming apps
          </h2>
          <p className="max-w-2xl text-base text-slate-300">
            We're starting with two focused experiences: one for Christmas
            joy, and one for quiet everyday connection at home.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card p-6 space-y-4" data-testid="card-christmaspulse">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎄</span>
                  <div>
                    <h3 className="text-lg font-semibold">
                      ChristmasPulse — Coming Soon
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Festive, warm, creative
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Coming soon
                </span>
              </div>
              <p className="text-base text-slate-300">
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
                    <h3 className="text-lg font-semibold">
                      FamilyPulse — Coming Soon
                    </h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Calm, daily, grounded
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300">
                  Coming soon
                </span>
              </div>
              <p className="text-base text-slate-300">
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
        </AnimatedSection>

        <AnimatedSection className="space-y-4" data-testid="philosophy-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            Our philosophy
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-base md:text-lg font-medium">
              Technology feels best when it feels human.
            </p>
            <p className="text-base text-slate-300">
              We believe digital products should make life warmer — not louder.
              That's why we build small, simple apps with emotional clarity
              and thoughtful design at their core.
            </p>
            <div className="grid gap-4 md:grid-cols-3 text-base">
              <div>
                <p className="font-semibold text-slate-100">Warm design</p>
                <p className="text-slate-300 text-sm mt-1">
                  Intuitive, human, emotionally grounded experiences that feel
                  calm rather than overwhelming.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  Simple experiences
                </p>
                <p className="text-slate-300 text-sm mt-1">
                  Tiny apps with meaningful moments — focused, deliberate, and
                  easy to return to.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  Real connection
                </p>
                <p className="text-slate-300 text-sm mt-1">
                  Tools that bring people closer every day, rather than pulling
                  attention away from what matters.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="talent" className="space-y-4" data-testid="talent-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            Work with us: talent & collaborators
          </h2>
          <p className="text-base text-slate-300">
            We're growing a small, intentional network of people who enjoy creating simple, human-centered digital products. 
            Whether you build, design, advise, invest, or test early ideas — we'd love to connect.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Card 1 – Builders & creators */}
            <div className="glass-card p-5 space-y-3">
              <h3 className="text-lg font-semibold text-slate-100">For builders & creators</h3>
              <p className="text-sm text-slate-300">
                Ideal if you like designing or building real products.
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• App developers (React Native, Next.js, full-stack)</li>
                <li>• UI/UX designers for clean mobile experiences</li>
                <li>• Motion, illustration, video & content creators</li>
                <li>• Social media creators & marketers</li>
              </ul>
            </div>

            {/* Card 2 – Experts & advisors */}
            <div className="glass-card p-5 space-y-3">
              <h3 className="text-lg font-semibold text-slate-100">For experts & advisors</h3>
              <p className="text-sm text-slate-300">
                Ideal if you bring experience in technology, behaviour, or law and enjoy guiding early-stage work.
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Consumer tech, AI or mobile product specialists</li>
                <li>• Digital wellbeing / behavioural design experts</li>
                <li>• Intellectual property & tech / apps / AI legal advisors</li>
                <li>• Product, brand or growth advisors</li>
              </ul>
              <p className="text-xs text-slate-400">
                We don't discuss sensitive or unprotected details publicly — deeper conversations happen privately and, if needed, under NDA.
              </p>
            </div>

            {/* Card 3 – Investors & strategic partners */}
            <div className="glass-card p-5 space-y-3">
              <h3 className="text-lg font-semibold text-slate-100">For investors & strategic partners</h3>
              <p className="text-sm text-slate-300">
                Ideal if you're interested in early-stage consumer technology and calm, human-first digital products.
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Angels and early-stage investors</li>
                <li>• Operators with app or consumer tech experience</li>
                <li>• Strategic partners in design, distribution or growth</li>
              </ul>
            </div>

            {/* Card 4 – Early adopters & supporters */}
            <div className="glass-card p-5 space-y-3">
              <h3 className="text-lg font-semibold text-slate-100">For early adopters & supporters</h3>
              <p className="text-sm text-slate-300">
                Ideal if you enjoy trying early products and shaping them with honest feedback.
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Test prototypes and new features</li>
                <li>• Share feedback on design and experience</li>
                <li>• Help us prioritise what really matters</li>
              </ul>
            </div>
          </div>

          {/* Shared call-to-action */}
          <div className="glass-card p-5 space-y-3">
            <p className="text-base text-slate-300">
              If you'd like to collaborate in any way, please share:
            </p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>• Your name & short bio</li>
              <li>• Your role or specialty</li>
              <li>• A brief overview of your experience</li>
              <li>• Links to your work (GitHub, portfolio, Instagram, YouTube, LinkedIn, etc.)</li>
              <li>• The type of collaboration you're exploring</li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <PrimaryButton href="mailto:hello@jackofai.com?subject=Collaboration%20Inquiry">
                Email us
              </PrimaryButton>
              <button
                onClick={() => setIsFounderChatOpen(true)}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-slate-100 hover:bg-white/5 transition-colors"
                data-testid="talent-chat-founder-btn"
              >
                Chat with the Founder
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="founder" className="space-y-4" data-testid="founder-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            A note from the founder
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4">
            <p className="text-base text-slate-300">
              I started JackofAI™ to build simple, warm digital tools that help
              people feel more connected — to themselves, to their families, and
              to the moments that matter.
            </p>
            <p className="text-base text-slate-300">
              The world doesn't need more complex apps. It needs softer,
              calmer, more human technology.
            </p>
            <p className="text-base text-slate-300">
              If our mission resonates with you — whether you're a
              creator, collaborator, investor, or early supporter — I'd
              love to connect.
            </p>
            <p className="text-base font-medium text-slate-100" data-testid="founder-name">— Bhavik Patel</p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="space-y-4" data-testid="contact-section">
          <h2 className="text-xl md:text-3xl font-semibold">
            Contact
          </h2>
          <div className="glass-card p-6 md:p-7 space-y-4 text-base text-slate-300">
            <p>
              For collaborations, talent opportunities, early access, or investor conversations,
              you can reach JackofAI™ here:
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
              <SecondaryButton href="https://wa.me/61426996009">
                Chat on WhatsApp
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
              <a href="#talent" className="hover:text-sky-300 transition-colors">Talent</a>
              <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-300">
            <a href="/privacy" className="hover:text-sky-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-sky-300 transition-colors">Terms & Conditions</a>
            <a href="/cookies" className="hover:text-sky-300 transition-colors">Cookie Notice</a>
            <a href="/ai-disclaimer" className="hover:text-sky-300 transition-colors">AI Disclaimer</a>
          </div>
        </footer>
      </div>

      <a
        href="https://wa.me/61426996009"
        className="fixed bottom-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition-colors"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
        data-testid="whatsapp-floating-btn"
      >
        💬 Chat on WhatsApp
      </a>

      {isFounderChatOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm" data-testid="founder-chat-modal">
          <div className="glass-card max-w-md w-full mx-4 p-6 space-y-4 relative">
            <button
              onClick={() => setIsFounderChatOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-200 text-sm"
              aria-label="Close founder chat"
              data-testid="founder-chat-close-btn"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-slate-100">
              Chat with the founder
            </h2>

            <p className="text-base text-slate-300">
              Hi, I'm Bhavik. I started JackofAI™ to build simple, warm digital tools
              that help people feel more connected. I'd love to hear who you are and
              how you'd like to be involved — as a collaborator, early adopter, or
              investor.
            </p>

            <div className="space-y-2 text-base text-slate-100">
              <p>
                <span className="font-semibold">WhatsApp: </span>
                <a
                  href="https://wa.me/61426996009?text=Hi%20Bhavik%2C%20I%20just%20visited%20JackofAI.com%20and%20would%20love%20to%20connect."
                  className="text-sky-300 hover:text-sky-200"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="founder-modal-whatsapp"
                >
                  Chat on WhatsApp
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone: </span>
                <a
                  href="tel:+61426996009"
                  className="text-sky-300 hover:text-sky-200"
                  data-testid="founder-modal-phone"
                >
                  +61 426 996 009
                </a>
              </p>
              <p>
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:hello@jackofai.com?subject=JackofAI%20Founder%20Chat"
                  className="text-sky-300 hover:text-sky-200"
                  data-testid="founder-modal-email"
                >
                  hello@jackofai.com
                </a>
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 mt-2">
              <p className="text-xs text-slate-400">
                Tip: When you reach out, feel free to mention whether you're a
                developer, designer, early adopter, or investor, and what you'd like
                to explore together.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setIsFounderChatOpen(false)}
                className="text-xs text-slate-400 hover:text-slate-200"
                data-testid="founder-chat-close-text-btn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
