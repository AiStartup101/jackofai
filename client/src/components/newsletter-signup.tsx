import { useState, FormEvent } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 max-w-xl" data-testid="newsletter-signup">
      <h3 className="text-lg font-semibold text-white">
        Get updates & early access
      </h3>
      <p className="text-sm text-slate-300 mt-2">
        Be the first to hear about new apps, early access invites, and collaboration opportunities.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
          data-testid="newsletter-email-input"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400 disabled:opacity-60"
          data-testid="newsletter-submit-btn"
        >
          {status === "submitting" ? "Sending..." : "Get updates"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-2 text-xs text-emerald-300" data-testid="newsletter-success">
          Thank you — you're on the list.
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-rose-300" data-testid="newsletter-error">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
