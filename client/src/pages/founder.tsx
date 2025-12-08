import { Link } from "wouter";

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto py-20 px-4 text-slate-100 space-y-6">
        <Link href="/" className="text-sm text-sky-300 hover:text-sky-200 mb-8 inline-block" data-testid="back-home">
          ← Back to home
        </Link>
        
        <h1 className="text-3xl font-bold text-white" data-testid="founder-title">A note from the founder</h1>

        <p className="text-base text-slate-300">
          I started JackofAI™ to build small, warm digital tools that help people feel more connected – 
          to themselves, to their families, and to the moments that matter.
        </p>

        <p className="text-base text-slate-300">
          Technology doesn't have to be overwhelming or noisy. I'm interested in apps that feel calm, 
          respectful of attention, and emotionally intelligent – tools that support real life rather than 
          compete with it.
        </p>

        <p className="text-base text-slate-300">
          JackofAI is still early, but the intention is clear: build a family of simple products that people 
          genuinely enjoy using, and work with collaborators who care about craft and kindness.
        </p>

        <p className="text-base text-slate-300">
          If this resonates with you – whether you're a builder, creator, expert, investor, or early adopter – 
          I'd love to connect.
        </p>

        <p className="mt-6 text-slate-100">
          — Bhavik Patel<br />
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
