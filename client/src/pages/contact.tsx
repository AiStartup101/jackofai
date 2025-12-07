import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 -left-16 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-rose-400/15 blur-3xl" />
      </div>

      <div className="container py-12 md:py-16 space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-300 transition-colors" data-testid="back-to-home">
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <h1 className="text-2xl md:text-3xl font-semibold" data-testid="contact-page-title">
          Contact JackofAI<span className="align-super text-[10px]">™</span>
        </h1>
        <p className="max-w-xl text-sm md:text-base text-slate-300">
          For collaborations, talent opportunities, early access, or investor conversations,
          you can reach us using the details below.
        </p>

        <div className="glass-card p-6 md:p-7 space-y-3 text-sm text-slate-100">
          <p>
            <span className="font-semibold">Email: </span>
            <a href="mailto:hello@jackofai.com" className="text-sky-300 hover:text-sky-200" data-testid="page-contact-email">
              hello@jackofai.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone: </span>
            <a href="tel:+61426996009" className="text-sky-300 hover:text-sky-200" data-testid="page-contact-phone">
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
              data-testid="page-contact-whatsapp"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href="mailto:hello@jackofai.com"
            className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 hover:bg-sky-300 transition-colors"
            data-testid="page-email-btn"
          >
            Email JackofAI
          </a>
          <a
            href="https://wa.me/61426996009"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition-colors"
            target="_blank"
            rel="noreferrer"
            data-testid="page-whatsapp-btn"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/61426996009"
        className="fixed bottom-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-3 text-xs font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition-colors"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
        data-testid="whatsapp-floating-btn"
      >
        💬 Chat on WhatsApp
      </a>
    </main>
  );
}
