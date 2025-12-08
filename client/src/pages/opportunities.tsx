import { Link } from "wouter";

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto py-20 px-4 text-slate-100 space-y-8">
        <Link href="/" className="text-sm text-sky-300 hover:text-sky-200 mb-8 inline-block" data-testid="back-home">
          ← Back to home
        </Link>

        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-white" data-testid="opportunities-title">Opportunities at JackofAI</h1>
          <p className="text-slate-300">
            We're not a traditional hiring pipeline. We're building a small network of people who enjoy crafting 
            thoughtful digital products – and we collaborate in flexible, project-based ways.
          </p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-200">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Current priority needs</span>
          </div>
          <ul className="mt-3 text-sm text-slate-200 space-y-1">
            <li>• React Native developer for short sprints and prototypes</li>
            <li>• Next.js frontend collaborator for landing pages & micro-sites</li>
            <li>• UI/UX designer focused on calm, modern mobile apps</li>
            <li>• Social media / content partner for LinkedIn, Instagram & YouTube</li>
            <li>• IP advisor familiar with software & AI-related patents</li>
          </ul>
          <p className="mt-2 text-[11px] text-slate-400">
            These needs change over time – even if the list doesn't match you perfectly, we're still happy to hear from you.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">For builders & creators</h2>
          <p className="text-slate-300">
            Ideal if you like turning ideas into working products and experiences:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-200 text-sm">
            <li>App developers (React Native, Next.js, full-stack).</li>
            <li>UI/UX designers for modern, calm mobile interfaces.</li>
            <li>Motion designers, illustrators, and video creators.</li>
            <li>Social media creators and marketing partners.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">For experts & advisors</h2>
          <p className="text-slate-300">
            We welcome conversations with people experienced in consumer technology, AI-assisted products, 
            digital wellbeing, behaviour design, and intellectual property for software and apps.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">For investors & strategic partners</h2>
          <p className="text-slate-300">
            We're open to thoughtful early conversations with angels, operators, and partners who understand 
            calm consumer apps and brand-led product building.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">How to reach us</h2>
          <p className="text-slate-300">
            If you'd like to explore working together, please email a short note with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-200 text-sm">
            <li>Your name and what you do.</li>
            <li>A short bio and any relevant experience.</li>
            <li>Links to your work (GitHub, portfolio, Dribbble, Instagram, YouTube, LinkedIn, etc.).</li>
            <li>The type of collaboration you're interested in.</li>
          </ul>
          <p className="text-base">
            Email:{" "}
            <a href="mailto:hello@jackofai.com" className="text-sky-300 hover:text-sky-200" data-testid="contact-email">
              hello@jackofai.com
            </a>
          </p>
        </section>

        <div className="pt-6 border-t border-white/10 mt-10">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} JackofAI Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
