import { useState } from "react";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      window.location.href = `mailto:alexandra.d.brandl@gmail.com?subject=Newsletter-Anmeldung&body=Bitte tragt mich in den Shared Ground Newsletter ein: ${email}`;
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Masthead />

      <main className="max-w-[600px] mx-auto px-4 py-16 font-sans">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-8">
          Newsletter
        </h2>

        {!submitted ? (
          <>
            <p className="text-[1.05rem] text-foreground leading-relaxed mb-2">
              Einmal pro Woche die wichtigsten Nachrichten aus den Bereichen Feminismus,
              Frauen und LGBTQIA+ — direkt in dein Postfach.
            </p>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-10">
              Kein Spam. Kein Clickbait. Nur das, was zählt.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[420px]">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Deine E-Mail-Adresse
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@beispiel.de"
                className="w-full border border-border rounded-sm px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors font-sans"
              />
              <button
                type="submit"
                className="w-full bg-foreground text-background px-4 py-3 text-sm font-semibold rounded-sm hover:opacity-80 transition-opacity font-sans"
              >
                Anmelden
              </button>
            </form>

            <p className="mt-8 text-xs text-muted-foreground">
              Du kannst dich jederzeit wieder abmelden. Deine Daten werden nicht
              an Dritte weitergegeben.
            </p>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="font-serif-display text-2xl font-bold text-foreground mb-3">
              Danke!
            </h3>
            <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
              Wir haben deine Anmeldung erhalten. Du hörst bald von uns.
            </p>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
};

export default NewsletterPage;
