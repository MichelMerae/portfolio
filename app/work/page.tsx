import Link from "next/link";
import { getProjects } from "@/lib/content";

export const metadata = {
    title: "Projects | Michel Merae",
    description: "Explore Michel Merae’s work in AI engineering, automation, robotics and analytics.",
    alternates: { canonical: "https://michel-merae.com/work" },
};

export default function ProjectIndex() {
    return (
        <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
            <div className="mx-auto max-w-5xl">
                <Link href="/" className="text-purple-300 hover:underline">← Michel Merae</Link>
                <h1 className="mt-12 mb-8 text-5xl font-bold tracking-tight">My Projects</h1>
                <div className="grid gap-5 md:grid-cols-2">
                    {getProjects().map(project => (
                        <Link key={project.slug} href={'/work/' + project.slug} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-purple-400">
                            <p className="mb-2 font-mono text-sm text-purple-400">{project.category}</p>
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <p className="mt-4 leading-relaxed text-zinc-300">{project.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
