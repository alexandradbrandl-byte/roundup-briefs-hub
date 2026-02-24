import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";

const AnalysisPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Masthead />
      <main className="max-w-[1100px] mx-auto px-4 py-16 font-sans text-center">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-12 text-left">
          Analysis
        </h2>
        <div className="max-w-[500px] mx-auto">
          <p className="font-serif-display text-4xl font-bold text-foreground mb-4">
            Bald verfügbar.
          </p>
          <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
            Hier werden bald Analysen erscheinen: welche Quellen am meisten berichten,
            wie sich die Berichterstattung über Zeit entwickelt, und welche Keywords
            am häufigsten vorkommen.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default AnalysisPage;
