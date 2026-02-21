const KEYWORDS = {
  "Frauen & Feminismus": [
    "frauen", "frau", "mädchen", "weiblich", "feminismus", "feministisch",
    "gleichberechtigung", "gleichstellung", "frauenrechte", "frauenquote",
    "lohnlücke", "lohnungleichheit", "entgeltungleichheit", "abtreibung",
    "schwangerschaftsabbruch", "paragraph 218", "mutterschaft", "schwangerschaft",
    "mutterschutz", "elterngeld", "elternzeit", "sexismus", "misogynie", "patriarchat",
    "häusliche gewalt", "femizid", "sexuelle belästigung", "vergewaltigung",
    "me-too", "metoo", "menstruation", "verhütung", "trafficking", "menschenhandel",
    "women", "woman", "girl", "female", "feminism", "feminist", "gender equality",
    "reproductive rights", "abortion", "domestic violence", "femicide",
  ],
  "LGBTQIA+": [
    "schwul", "lesbisch", "bisexuell", "transgender", "transsexuell",
    "nicht-binär", "nichtbinär", "intergeschlechtlich", "queer", "homosexuell",
    "coming out", "homophobie", "transphobie", "csd", "christopher street day",
    "ehe für alle", "drag queen", "drag king", "geschlechtsidentität",
    "pronomen", "lsbtiq", "konversionstherapie", "geschlechtsangleichung",
    "pubertätsblocker", "lgbt", "lgbtq", "lgbtqia", "gay", "lesbian", "bisexual",
    "trans rights", "homophobia", "transphobia", "pride", "same-sex",
  ],
  "Migration & Asyl": [
    "flüchtling", "geflüchtete", "asylsuchende", "asylbewerber", "migration",
    "migrant", "einwanderung", "abschiebung", "aufenthaltsrecht", "einbürgerung",
    "fremdenfeindlichkeit", "flucht", "vertreibung", "immigration", "refugee",
    "asylum", "deportation", "citizenship", "xenophobia",
  ],
  "Menschenrechte": [
    "menschenrechte", "bürgerrechte", "diskriminierung", "rassismus",
    "antirassismus", "protest", "aktivismus", "zensur", "pressefreiheit",
    "minderheitenrechte", "humanitär", "human rights", "civil rights",
    "discrimination", "racism", "activism", "censorship",
  ],
};

const SOURCES = {
  "Tageszeitungen (keyword-gefiltert)": [
    "Spiegel Online", "Zeit Online", "FAZ", "Süddeutsche Zeitung",
    "Die Welt", "Tagesspiegel", "Stern", "Focus Online",
  ],
  "Öffentlich-Rechtliche (keyword-gefiltert)": [
    "Tagesschau", "ZDF heute", "Deutschlandfunk", "BR24",
    "MDR Nachrichten", "NDR Nachrichten",
  ],
  "Progressive Medien (keyword-gefiltert)": [
    "taz", "Freitag",
  ],
  "Österreich & Schweiz (keyword-gefiltert)": [
    "Der Standard", "ORF News", "NZZ", "SRF News",
  ],
  "Feministische Publikationen (alle Artikel inklusive)": [
    "EMMA",
  ],
  "LGBTQIA+ Publikationen (alle Artikel inklusive)": [
    "queer.de", "L-MAG",
  ],
};

const TOPICS_LIST = [
  { emoji: "🩺", label: "Reproduktive Rechte" },
  { emoji: "💰", label: "Lohnlücke & Wirtschaft" },
  { emoji: "🏳️‍🌈", label: "LGBTQIA+" },
  { emoji: "🌍", label: "Migration & Asyl" },
  { emoji: "⚖️", label: "Menschenrechte" },
  { emoji: "🏥", label: "Gesundheit & Medizin" },
  { emoji: "📜", label: "Recht & Politik" },
  { emoji: "🏛️", label: "Politik & Regierung" },
  { emoji: "🎭", label: "Kultur & Medien" },
  { emoji: "⚽", label: "Sport" },
  { emoji: "🛡️", label: "Gewalt & Sicherheit" },
  { emoji: "💼", label: "Arbeit & Wirtschaft" },
];

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-4 mt-10 font-sans">
    {children}
  </h2>
);

const AboutPage = () => {
  return (
    <main className="max-w-[700px] mx-auto px-4 py-8 font-sans">

      {/* Intro */}
      <p className="text-[0.95rem] text-foreground leading-relaxed">
        <strong>shared ground</strong> ist ein unabhängiger Nachrichtenleser,
        der feministische, frauenpolitische und LGBTQIA+-Nachrichten aus dem
        deutschsprachigen Raum aggregiert. Artikel werden alle 12 Stunden
        (MEZ) aus RSS-Feeds gescrapt. Es werden nur öffentlich zugängliche
        Artikel einbezogen — kostenpflichtige Inhalte erscheinen möglicherweise
        nicht, auch wenn sie einem Thema entsprechen.
      </p>

      {/* Quellen */}
      <SectionHeading>Unsere Quellen — 23 Publikationen</SectionHeading>
      {Object.entries(SOURCES).map(([category, names]) => (
        <div key={category} className="mb-5">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">
            {category}
          </p>
          <p className="text-[0.9rem] text-foreground leading-relaxed">
            {names.join(" · ")}
          </p>
        </div>
      ))}

      {/* Artikelauswahl */}
      <SectionHeading>Wie Artikel ausgewählt werden</SectionHeading>
      <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-6">
        Bei allgemeinen Nachrichtenquellen werden Artikel nur aufgenommen,
        wenn sie mindestens eines der folgenden Stichwörter in der Überschrift
        oder Zusammenfassung enthalten. Spezialpublikationen (Feministische
        &amp; LGBTQIA+ Medien) werden vollständig übernommen.
      </p>
      {Object.entries(KEYWORDS).map(([category, words]) => (
        <div key={category} className="mb-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
            {category}
          </p>
          <p className="text-[0.8rem] text-muted-foreground leading-relaxed">
            {words.join(", ")}
          </p>
        </div>
      ))}

      {/* Themen */}
      <SectionHeading>Themen</SectionHeading>
      <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4">
        Artikel werden automatisch anhand von Keyword-Matching mit Themen getaggt.
      </p>
      <div className="flex flex-wrap gap-2">
        {TOPICS_LIST.map((t) => (
          <span
            key={t.label}
            className="inline-block px-3 py-1 text-xs font-medium border border-border bg-secondary text-foreground rounded-sm"
          >
            {t.emoji} {t.label}
          </span>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-12 text-xs text-muted-foreground border-t border-border pt-4">
        shared ground · Scrapet alle 12 Stunden · Für unabhängige Leser:innen
      </p>
    </main>
  );
};

export default AboutPage;
