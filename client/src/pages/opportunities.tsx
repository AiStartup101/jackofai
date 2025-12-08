import { Link } from "wouter";

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto py-20 px-4 text-slate-100 space-y-6">
        <Link href="/" className="text-sm text-sky-300 hover:text-sky-200 mb-8 inline-block" data-testid="back-home">
          ← Back to home
        </Link>
        
        <h1 className="text-3xl font-bold text-white" data-testid="opportunities-title">Opportunities at JackofAI</h1>

        <p className="text-base text-slate-300">
          We're not a traditional hiring pipeline. Instead, we're building a small network of people who enjoy 
          crafting thoughtful digital products – and we collaborate in flexible, project-based ways.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">For builders & creators</h2>
        <p className="text-base text-slate-300">
          Ideal if you like turning ideas into working products and experiences:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>App developers (React Native, Next.js, full-stack).</li>
          <li>UI/UX designers for modern, calm mobile interfaces.</li>
          <li>Motion designers, illustrators, and video creators.</li>
          <li>Social media creators and marketing partners.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6">For experts & advisors</h2>
        <p className="text-base text-slate-300">
          We welcome conversations with people experienced in consumer technology, AI-assisted products, 
          digital wellbeing, behaviour design, and intellectual property for software and apps.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">For investors & strategic partners</h2>
        <p className="text-base text-slate-300">
          We're open to thoughtful early conversations with angels, operators, and partners who understand 
          calm consumer apps and brand-led product building.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6">How to reach us</h2>
        <p className="text-base text-slate-300">
          If you'd like to explore working together, please email:
        </p>
        <p className="text-base">
          <a href="mailto:hello@jackofai.com" className="text-sky-300 hover:text-sky-200" data-testid="contact-email">hello@jackofai.com</a>
        </p>
        <p className="text-sm text-slate-400">
          Share a short bio, what you do, links to your work, and what kind of collaboration you have in mind.
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
