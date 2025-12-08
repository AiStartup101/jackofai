import { Link } from "wouter";

export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto py-20 px-4 text-slate-100 space-y-6">
        <Link href="/" className="text-sm text-sky-300 hover:text-sky-200 mb-8 inline-block" data-testid="back-home">
          ← Back to home
        </Link>
        
        <h1 className="text-3xl font-bold text-white" data-testid="early-access-title">Early access program</h1>

        <p className="text-base text-slate-300">
          We believe the best products are built with real people, not in isolation. 
          Our early access program invites a small group of testers and supporters to help shape ChristmasPulse and FamilyPulse as they evolve.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">Who it's for</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>People who enjoy trying early versions of apps.</li>
          <li>Families and individuals who value emotional connection and meaningful moments.</li>
          <li>Creators and storytellers who want to experiment with new tools.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6">What you'll get</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Early access to features before public release.</li>
          <li>Occasional behind-the-scenes updates from the founder.</li>
          <li>An opportunity to influence how the apps feel and work.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6">What we ask in return</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Honest, kind feedback on what feels useful or confusing.</li>
          <li>Consent before sharing any stories or screenshots publicly.</li>
          <li>Patience – early builds may be rough around the edges.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6">How to join</h2>
        <p className="text-base text-slate-300">
          If you'd like to be considered for early access, please send a short note to{" "}
          <a href="mailto:hello@jackofai.com" className="text-sky-300 hover:text-sky-200" data-testid="contact-email">hello@jackofai.com</a>{" "}
          with:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Who you are and where you're based.</li>
          <li>Whether you're more interested in ChristmasPulse, FamilyPulse, or both.</li>
          <li>Why early access appeals to you.</li>
        </ul>

        <div className="pt-6 border-t border-white/10 mt-10">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} JackofAI Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
