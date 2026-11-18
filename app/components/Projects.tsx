import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { FeaturedProject } from "@/lib/content";
import { StudyVisual } from "./StudyVisual";

export function Projects({ projects }: { projects: FeaturedProject[] }) {
  return (
    <section className="section wrap" id="work">
      <div className="section-head">
        <h2>Selected work</h2>
        <Link className="text-link" href="/work">
          All projects <ArrowRight size={16} />
        </Link>
      </div>
      <div className="project-grid">
        {projects.map(({ title, description, study }) => (
          <Link
            key={study.slug}
            className="work-card"
            href={"/work/" + study.slug}
          >
            <StudyVisual kind={study.visual} />
            <div className="card-body">
              <p className="eyebrow">{study.organization}</p>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="case-link">
                Read case study <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
