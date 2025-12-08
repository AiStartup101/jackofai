import { Link } from "wouter";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto py-20 px-4 text-slate-100 space-y-6">
        <Link href="/" className="text-sm text-sky-300 hover:text-sky-200 mb-8 inline-block" data-testid="back-home">
          ← Back to home
        </Link>
        
        <h1 className="text-3xl font-bold text-white" data-testid="press-title">Press & media kit</h1>

        <p className="text-base text-slate-300">
          This page provides a quick overview of JackofAI™ for journalists, partners, and collaborators.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">Quick facts</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li><strong className="text-slate-100">Name:</strong> JackofAI™ Studio</li>
          <li><strong className="text-slate-100">Focus:</strong> Simple, human-centered digital products with a warm, calm feel.</li>
          <li><strong className="text-slate-100">Current apps:</strong> ChristmasPulse (festive app, in development), FamilyPulse (everyday family connection app, in development).</li>
          <li><strong className="text-slate-100">Location:</strong> Founder based in Australia.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6">Logo & branding</h2>
        <p className="text-base text-slate-300">
          You may use the JackofAI™ logo to reference the company in articles or coverage, 
          provided it is not altered or used in a misleading way.
        </p>
        <p className="text-sm text-slate-400">
          For high-resolution logo files or specific usage questions, please email{" "}
          <a href="mailto:hello@jackofai.com" className="text-sky-300 hover:text-sky-200" data-testid="logo-email">hello@jackofai.com</a>.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">Contact for press</h2>
        <p className="text-base text-slate-300">
          For interviews, quotes, or media enquiries:
        </p>
        <p className="text-base">
          <a href="mailto:hello@jackofai.com" className="text-sky-300 hover:text-sky-200" data-testid="contact-email">hello@jackofai.com</a>
        </p>

        <div className="pt-6 border-t border-white/10 mt-10">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} JackofAI Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
