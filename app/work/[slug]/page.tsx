import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getCaseStudies } from "@/lib/content";
import { StudyVisual } from "@/app/components/StudyVisual";

type Props = { params: Promise<{ slug: string }> };

async function projectFor({ params }: Props) {
  const { slug } = await params;
  return (
    getCaseStudies().find(({ study }) => study.slug === slug) ?? notFound()
  );
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { title, description, study } = await projectFor(props);
  const url = "/work/" + study.slug;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: "article", url },
  };
}

export default async function CaseStudy(props: Props) {
  const { title, description, study, tech } = await projectFor(props);
  return (
    <main className="wrap detail">
      <Link className="back" href="/work">
        <ArrowLeft size={16} /> All projects
      </Link>
      <article>
        <div className="case-intro">
          <div>
            <p className="eyebrow">
              {study.organization} · {study.year}
            </p>
            <h1>{title}</h1>
            <p className="lede">{description}</p>
            <ul className="tech">
              {tech.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <StudyVisual kind={study.visual} />
        </div>
        <div className="story">
          {study.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.text}</p>
            </section>
          ))}
        </div>
      </article>
      <div className="case-end">
        <Link className="text-link" href="/#contact">
          Discuss a similar workflow <ArrowUpRight size={17} />
        </Link>
      </div>
    </main>
  );
}
