import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
    return getProjects().map(({ slug }) => ({ slug }));
}

async function projectFor({ params }: Props) {
    const { slug } = await params;
    return getProjects().find(project => project.slug === slug) ?? notFound();
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const project = await projectFor(props);
    const title = project.title + " | Michel Merae";
    const url = "https://michel-merae.com/work/" + project.slug;
    return { title, description: project.description, alternates: { canonical: url },
        openGraph: { title, url, type: "article", description: project.description } };
}

export default async function ProjectPage(props: Props) {
    const project = await projectFor(props);
    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white md:py-20">
            <article className="mx-auto max-w-3xl">
                <Link className="text-purple-300 hover:underline" href="/work">← All projects</Link>
                <p className="mt-16 mb-4 font-mono text-sm text-purple-400">{project.context} · {project.category}</p>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{project.title}</h1>
                <p className="mt-6 text-xl leading-relaxed text-zinc-300">{project.description}</p>
                <ul aria-label="Tools and methods" className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map(tool => <li key={tool} className="rounded border border-zinc-700 px-3 py-1 text-sm">{tool}</li>)}
                </ul>
                <section className="mt-12 border-t border-zinc-800 pt-8">
                    <h2 className="mb-3 text-2xl font-bold">What I built</h2>
                    <p className="text-lg leading-relaxed text-zinc-300">{project.approach}</p>
                </section>
                <section className="my-9">
                    <h2 className="mb-3 text-2xl font-bold">What I learned</h2>
                    <p className="text-lg leading-relaxed text-zinc-300">{project.outcome}</p>
                </section>
                <Link href="/#contact" className="inline-block rounded-full bg-white px-6 py-3 font-medium text-black hover:bg-zinc-200">Discuss a similar project</Link>
            </article>
        </main>
    );
}
