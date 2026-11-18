import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description:
    "Case studies and projects in AI engineering, automation, robotics and data analytics.",
  alternates: { canonical: "/work" },
};

export default function Work() {
  return (
    <main className="wrap detail">
      <Link className="back" href="/#work">
        <ArrowLeft size={16} /> Selected work
      </Link>
      <h1>All projects</h1>
      <div className="index-list">
        {getProjects().map((p) => (
          <article key={p.title}>
            <div>
              <p className="eyebrow">{p.category}</p>
              <h2>
                {p.study ? (
                  <Link href={"/work/" + p.study.slug}>{p.title}</Link>
                ) : (
                  p.title
                )}
              </h2>
            </div>
            <div>
              <p>{p.description}</p>
              <ul className="tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.study && (
                <Link className="text-link" href={"/work/" + p.study.slug}>
                  Read case study <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
