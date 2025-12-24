import { useState, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      setEmail("");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    mutation.mutate(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row max-w-md" data-testid="newsletter-signup">
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl bg-slate-900/70 border border-white/10 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
        data-testid="newsletter-email-input"
      />
      <button
        type="submit"
        disabled={mutation.isPending}
        className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white hover:bg-sky-400 disabled:opacity-60 transition-colors"
        data-testid="newsletter-submit-btn"
      >
        {mutation.isPending ? "Joining..." : "Join"}
      </button>
      {mutation.isSuccess && (
        <p className="text-sm text-emerald-300 self-center" data-testid="newsletter-success">
          You're on the list!
        </p>
      )}
      {mutation.isError && (
        <p className="text-sm text-rose-300 self-center" data-testid="newsletter-error">
          {mutation.error instanceof Error && mutation.error.message.includes("409") 
            ? "Already subscribed!" 
            : "Try again"}
        </p>
      )}
    </form>
  );
}
