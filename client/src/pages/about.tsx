import { Link } from "wouter";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto py-20 px-4 text-slate-100 space-y-6">
        <Link href="/" className="text-sm text-sky-300 hover:text-sky-200 mb-8 inline-block" data-testid="back-home">
          ← Back to home
        </Link>
        
        <h1 className="text-3xl font-bold text-white" data-testid="about-title">About JackofAI</h1>

        <p className="text-base text-slate-300">
          JackofAI™ is a small, founder-led studio exploring how simple digital tools 
          can help people feel more connected – to themselves, to their families, and to the moments that matter.
        </p>

        <p className="text-base text-slate-300">
          Instead of building loud, overwhelming apps, we focus on calm, warm experiences: 
          tools that fit quietly into everyday life and support reflection, celebration, and togetherness.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">What we're building</h2>
        <p className="text-base text-slate-300">
          We're starting with a small family of apps currently in development:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>
            <strong className="text-slate-100">ChristmasPulse</strong> – a festive app designed to help people create warm, heartfelt 
            Christmas moments with cards, messages, and shared memories.
          </li>
          <li>
            <strong className="text-slate-100">FamilyPulse</strong> – a calm, everyday app that supports emotional connection within families 
            through gentle reflection, communication, and rituals.
          </li>
        </ul>
        <p className="text-sm text-slate-400">
          Details may evolve as we learn and build. We share only high-level product stories publicly; anything deeper happens privately.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">How we like to build</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Small, focused releases instead of big, noisy launches.</li>
          <li>Design that feels warm, clear, and human – even when powered by AI under the surface.</li>
          <li>Meaningful collaborations with builders, creators, experts, and early adopters.</li>
        </ul>

        <p className="text-base text-slate-300">
          If this direction resonates with you, we'd love to connect – whether you're a collaborator, expert, investor, or early supporter.
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
