import { Link } from "react-router-dom";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";

const THEMEN = [
  {
    emoji: "🩺",
    label: "Reproduktive Rechte",
    beschreibung: "Abtreibungsrechte, körperliche Selbstbestimmung, Schwangerschaft, Verhütung und reproduktive Gesundheit.",
  },
  {
    emoji: "💰",
    label: "Lohnlücke & Wirtschaft",
    beschreibung: "Gleicher Lohn für gleiche Arbeit, wirtschaftliche Teilhabe von Frauen, Gehaltstransparenz und Gender Pay Gap.",
  },
  {
    emoji: "🏳️‍🌈",
    label: "LGBTQIA+",
    beschreibung: "Queer-Rechte, Trans-Sichtbarkeit, Gleichstellung, Pride und gesellschaftliche Akzeptanz.",
  },
  {
    emoji: "🌍",
    label: "Migration & Asyl",
    beschreibung: "Flucht, Asylrecht, Integration, Grenzpolitik und die Situation geflüchteter Frauen und queerer Menschen.",
  },
  {
    emoji: "⚖️",
    label: "Menschenrechte",
    beschreibung: "Diskriminierung, Gleichheit, Aktivismus, Bürgerrechte und der Kampf gegen Unterdrückung.",
  },
  {
    emoji: "🏥",
    label: "Gesundheit & Medizin",
    beschreibung: "Frauengesundheit, psychische Gesundheit, medizinische Versorgung und geschlechtsspezifische Unterschiede in der Medizin.",
  },
  {
    emoji: "📜",
    label: "Recht & Justiz",
    beschreibung: "Gesetze, Urteile, Rechtsprechung und Gesetzgebung mit Auswirkungen auf Frauen und queere Menschen.",
  },
  {
    emoji: "🏛️",
    label: "Politik & Gesellschaft",
    beschreibung: "Wahlen, Parteipolitik, gesellschaftliche Debatten und politische Teilhabe.",
  },
  {
    emoji: "🎭",
    label: "Kultur & Medien",
    beschreibung: "Repräsentation in Kunst, Film & Serien, Musik, Literatur und der Medienlandschaft.",
  },
  {
    emoji: "⚽",
    label: "Sport",
    beschreibung: "Frauen im Sport, Gleichstellung im Sportbereich, Trans-Athletinnen und Sichtbarkeit.",
  },
  {
    emoji: "🛡️",
    label: "Gewalt & Sicherheit",
    beschreibung: "Häusliche Gewalt, Femizid, sexuelle Belästigung, Stalking und Sicherheit im öffentlichen Raum.",
  },
  {
    emoji: "💼",
    label: "Arbeit & Wirtschaft",
    beschreibung: "Arbeitsmarkt, Elternzeit, Karriere, gläserne Decke und Gleichstellung am Arbeitsplatz.",
  },
];

const ThemenPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Masthead />

      <main className="max-w-[1100px] mx-auto px-4 py-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-8 font-sans">
          Alle Themen
        </h2>

        <p className="text-[0.95rem] text-muted-foreground font-sans mb-10 max-w-[600px]">
          Shared Ground bündelt Nachrichten aus {THEMEN.length} Themenbereichen.
          Klicke auf ein Thema, um direkt zum gefilterten Feed zu gelangen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {THEMEN.map((thema) => (
            <Link
              key={thema.label}
              to={`/?topic=${encodeURIComponent(thema.label)}`}
              className="group block border border-border rounded-sm p-5 hover:border-foreground transition-colors bg-background"
            >
              <div className="text-3xl mb-3">{thema.emoji}</div>
              <h3 className="font-serif-display text-lg font-semibold text-foreground mb-2 group-hover:underline underline-offset-2">
                {thema.label}
              </h3>
              <p className="text-[0.82rem] text-muted-foreground font-sans leading-relaxed">
                {thema.beschreibung}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default ThemenPage;
