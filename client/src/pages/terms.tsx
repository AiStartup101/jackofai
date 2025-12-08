import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-base text-sky-400 hover:text-sky-300 mb-8">
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        <p className="text-base text-slate-400">Last updated: {new Date().getFullYear()}</p>

        <p className="text-lg">
          By accessing or using JackofAI™ products, websites, or services, you
          agree to these Terms & Conditions.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Use of Service</h2>
        <p className="text-base text-slate-300">
          You agree to use JackofAI™ services responsibly and in accordance with
          applicable laws. You may not misuse, reverse-engineer, or interfere with
          the functionality of our systems.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Intellectual Property</h2>
        <p className="text-base text-slate-300">
          All trademarks, logos, and content are the property of JackofAI™. You
          may not reproduce or redistribute without written permission.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Early Access Disclaimer</h2>
        <p className="text-base text-slate-300">
          ChristmasPulse and FamilyPulse are currently in development. Features
          may change, and no warranties are provided during early access.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Limitation of Liability</h2>
        <p className="text-base text-slate-300">
          JackofAI™ is not liable for damages arising from use or inability to use
          our services, including reliance on AI-generated content.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Contact</h2>
        <p className="text-base text-slate-300">Email: <a className="text-sky-400 hover:text-sky-300" href="mailto:hello@jackofai.com">hello@jackofai.com</a></p>
      </div>
    </div>
  );
}
