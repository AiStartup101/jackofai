import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function CookiePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-base text-sky-400 hover:text-sky-300 mb-8">
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold">Cookie Notice</h1>

        <p className="text-lg">
          JackofAI Pty Ltd. ("JackofAI™") may use cookies to enhance website functionality, remember
          user preferences, and analyse performance. Cookies may also be used by
          third-party analytics tools.
        </p>

        <h2 className="text-2xl font-semibold pt-4">What Cookies We Use</h2>
        <ul className="list-disc pl-6 space-y-2 text-base text-slate-300">
          <li>Essential cookies for basic site functionality.</li>
          <li>Performance cookies to understand usage patterns.</li>
          <li>Preference cookies to remember settings.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">Managing Cookies</h2>
        <p className="text-base text-slate-300">
          You may disable cookies in your browser settings, though some features
          may not work properly without them.
        </p>

        <div className="border-t border-white/10 pt-6 mt-8 text-sm text-slate-400">
          © {new Date().getFullYear()} JackofAI Pty Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
}
