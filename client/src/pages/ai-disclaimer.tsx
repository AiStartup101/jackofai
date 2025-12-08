import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function AIDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-base text-sky-400 hover:text-sky-300 mb-8">
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold">AI Use Disclaimer</h1>

        <p className="text-lg">
          JackofAI™ products use artificial intelligence to assist with message
          generation, creativity, organisation, and personalised experiences. AI
          systems may sometimes produce incomplete, outdated, or incorrect
          information.
        </p>

        <p className="text-base text-slate-300">
          Users should review AI-generated content before relying on it. JackofAI™
          is not responsible for decisions made based on AI outputs.
        </p>

        <p className="text-base text-slate-300">
          By using our apps, you acknowledge that AI-generated suggestions are
          probabilistic and not always accurate.
        </p>

        <p className="text-base text-slate-300">
          If you have questions, please contact: 
          <a className="text-sky-400 hover:text-sky-300" href="mailto:hello@jackofai.com"> hello@jackofai.com</a>.
        </p>
      </div>
    </div>
  );
}
