import { MessageSquareText, Workflow } from "lucide-react";
import type { Service } from "@/lib/content";
export function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="section wrap">
      <div className="section-head">
        <h2>How we can work together</h2>
      </div>
      <div className="service-grid">
        {services.map((service, i) => {
          const Icon = i === 0 ? Workflow : MessageSquareText;
          return (
            <article key={service.title} className="service">
              <Icon size={25} aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="delivery">
                <strong>You get</strong> {service.deliverable}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
