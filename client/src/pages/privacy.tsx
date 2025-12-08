import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-slate-400">Last updated: {new Date().getFullYear()}</p>

        <p>
          JackofAI™ is committed to protecting your privacy. This Privacy Policy
          explains what information we collect, how we use it, and your rights
          regarding your personal data.
        </p>

        <h2 className="text-xl font-semibold pt-4">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Information you provide directly (name, email, messages).</li>
          <li>Automatically collected usage data (device type, pages visited).</li>
          <li>Content generated through interaction with our AI-powered features.</li>
        </ul>

        <h2 className="text-xl font-semibold pt-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>To provide and improve our apps and services.</li>
          <li>To respond to inquiries or support requests.</li>
          <li>To analyse usage trends and improve user experience.</li>
          <li>To develop future JackofAI products and features.</li>
        </ul>

        <h2 className="text-xl font-semibold pt-4">How We Store & Protect Data</h2>
        <p className="text-slate-300">
          We use industry-standard cloud infrastructure and encryption practices
          to keep your data secure. Only authorised team members may access
          operational data.
        </p>

        <h2 className="text-xl font-semibold pt-4">Third-Party Services</h2>
        <p className="text-slate-300">
          JackofAI™ may use third-party tools (analytics, authentication, AI
          infrastructure). Each provider follows their own privacy practices.
        </p>

        <h2 className="text-xl font-semibold pt-4">Your Rights</h2>
        <p className="text-slate-300">
          You may request data access, correction, or deletion at any time by
          contacting: <a className="text-sky-400 hover:text-sky-300" href="mailto:hello@jackofai.com">hello@jackofai.com</a>
        </p>

        <h2 className="text-xl font-semibold pt-4">Contact Us</h2>
        <p className="text-slate-300">Email: <a className="text-sky-400 hover:text-sky-300" href="mailto:hello@jackofai.com">hello@jackofai.com</a></p>
      </div>
    </div>
  );
}
