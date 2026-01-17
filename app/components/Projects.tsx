"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import type { Project as ProjectType } from "@/lib/content";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project, index, registerCard }: { project: ProjectType; index: number; registerCard: (el: HTMLDivElement | null) => void }) {
    return (
        <div
            ref={registerCard}
            className="w-[80vw] md:w-[60vw] h-[70vh] flex flex-col justify-between bg-zinc-900 border border-zinc-800 p-8 md:p-16 rounded-[2rem] relative group hover:border-zinc-500/50 transition-colors overflow-hidden flex-shrink-0"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
            </div>

            {/* Dynamic Spotlight Background - Merged with Image Overlay */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 mix-blend-overlay"
                style={{
                    background: `radial-gradient(2500px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.3), transparent 50%)`,
                }}
            />

            <div className="z-20 pointer-events-none">
                {/* Content above background */}
                <div className="flex justify-between items-start mb-8">
                    <span className="px-4 py-1 rounded-full border border-zinc-700/50 bg-zinc-950/50 text-sm text-zinc-300 backdrop-blur-md">
                        {project.category}
                    </span>
                    <span className="text-zinc-600 font-mono">0{index + 1}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white group-hover:text-purple-100 transition-colors drop-shadow-lg">
                    {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.tech?.map((t: string) => (
                        <span
                            key={t}
                            className="text-xs text-zinc-300 bg-zinc-900/80 px-3 py-1 rounded-md border border-zinc-700/50 backdrop-blur-sm"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="z-20 border-t border-zinc-800/50 pt-8 mt-auto pointer-events-auto">
                <p className="text-lg text-zinc-300 mb-8 line-clamp-3 pointer-events-none drop-shadow-md">
                    {project.description}
                </p>
                <Link
                    href={project.href || '#'}
                    className="inline-flex items-center gap-3 text-white font-bold hover:gap-4 transition-all group/link"
                >
                    View Case Study{" "}
                    <ArrowUpRight className="text-purple-400 group-hover/link:text-white transition-colors" />
                </Link>
            </div>
        </div>
    );
}

export function Projects({ projects }: { projects: ProjectType[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(
        () => {
            const el = sectionRef.current;
            if (!el) return;

            // Calculate scroll amount: total width of content - viewport width
            const getScrollAmount = () => -(el.scrollWidth - window.innerWidth);

            const scrollTween = gsap.to(el, {
                translateX: getScrollAmount, // Dynamic function for resize support
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "3000 top", // Duration of scroll
                    scrub: 0.6,
                    pin: true,
                    invalidateOnRefresh: true, // Recalculate values on resize
                },
            });

            return () => {
                scrollTween.kill();
            };
        },
        { scope: triggerRef }
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        cardsRef.current.forEach((card) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    };

    return (
        <section id="work" className="bg-zinc-950 overflow-hidden" onMouseMove={handleMouseMove}>
            {/* Trigger div that gets pinned */}
            <div ref={triggerRef}>
                <div ref={sectionRef} className="h-screen w-max flex flex-row flex-nowrap relative">
                    {/* Intro Slide */}
                    <div className="h-screen w-[40vw] flex-shrink-0 flex flex-col justify-center px-12 md:px-16 relative border-r border-zinc-900">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(100,20,200,0.1),rgba(0,0,0,0))]" />
                        <span className="text-purple-400 font-mono mb-6 block">01 / WORK</span>
                        <h2 className="text-5xl md:text-8xl font-bold mb-8">
                            My
                            <br /> Projects
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-xl">
                            A collection of AI systems, automation workflows, and production-ready applications. <br />
                            <br />
                            <span className="text-sm text-zinc-500">SCROLL TO EXPLORE →</span>
                        </p>
                    </div>

                    {/* Project Cards Container */}
                    <div className="flex flex-row items-center h-screen gap-24 px-24 flex-shrink-0">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                                registerCard={(el) => (cardsRef.current[index] = el)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
