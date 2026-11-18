import { ArrowUpRight } from "lucide-react";
export function Contact() {
  return (
    <section className="wrap section">
      <div id="contact" className="contact">
        <h2>Which workflow is taking your team time?</h2>
        <p>
          Tell me what triggers it, which tools are involved and where it
          breaks.
        </p>
        <a
          href="mailto:michel.merae@gmail.com?subject=Workflow%20enquiry"
          className="button"
        >
          Discuss a workflow <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
