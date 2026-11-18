import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "KI-Automatisierung für Support und Betrieb",
  description:
    "Michel Merae, AI Engineer in Hamburg. n8n-Workflows prüfen, Fehler beheben und Zendesk-Antworten mit KI vorbereiten.",
  alternates: { canonical: "/de" },
};

export default function GermanServices() {
  return (
    <main lang="de" className="wrap detail german">
      <p className="eyebrow">Michel Merae · Hamburg</p>
      <h1>Ich automatisiere Support- und Betriebsabläufe mit n8n.</h1>
      <p className="lede">
        Ich bin AI Engineer in Hamburg. Ich helfe Teams, wiederkehrende Arbeit
        zu automatisieren und Fehler in bestehenden Workflows zu finden.
      </p>
      <section id="leistungen" className="story">
        <section>
          <h2>Einen n8n-Workflow reparieren</h2>
          <p>
            Ein Vorgang wird doppelt ausgeführt oder Daten kommen unvollständig
            im CRM an? Ich gehe einen konkreten Fall vom Auslöser bis zum
            Ergebnis durch. Sie erhalten den korrigierten Workflow,
            dokumentierte Testfälle und eine Übergabe für Ihr Team.
          </p>
        </section>
        <section>
          <h2>Antwortentwürfe in Zendesk testen</h2>
          <p>
            Für JobLeads habe ich einen Ablauf gebaut, der den Ticketverlauf und
            passende Hilfeartikel für einen Antwortentwurf nutzt. Das
            Support-Team prüft jede Antwort vor dem Versand. Ein erster Pilot
            für Ihr Team kann mit einer einzigen Anfrageart starten.
          </p>
          <Link className="text-link" href="/work/zendesk-draft-review">
            Fallstudie lesen (Englisch) <ArrowUpRight size={16} />
          </Link>
        </section>
      </section>
      <section id="kontakt" className="contact">
        <h2>Welcher Ablauf kostet Ihr Team Zeit?</h2>
        <p>
          Schreiben Sie mir, welche Systeme beteiligt sind und an welcher Stelle
          es hakt.
        </p>
        <a
          className="button"
          href="mailto:michel.merae@gmail.com?subject=Anfrage%20zu%20einem%20Workflow"
        >
          Workflow besprechen <ArrowUpRight size={17} />
        </a>
      </section>
    </main>
  );
}
