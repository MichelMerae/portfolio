"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Customer Support Automation System",
        category: "AI Automation",
        description: "LLM-powered support system that generates response suggestions for customer service agents. 700+ tickets processed daily with 60% reduction in response time.",
        tech: ["n8n", "Claude API", "Zendesk API"],
        href: "#",
    },
    {
        title: "Employee Survey Chatbot",
        category: "Multi-Agent AI",
        description: "Conversational AI that replaces rigid questionnaires with natural dialogue to gather deep employee feedback. Powered by CrewAI multi-agent framework.",
        tech: ["CrewAI", "OpenAI GPT", "Python"],
        href: "#",
    },
    {
        title: "Email Coaching Automation",
        category: "AI Content Generation",
        description: "Automated system that generates thousands of personalized career coaching emails with A/B testing, utilizing OpenAI o3/o4 models and Microsoft Graph API.",
        tech: ["OpenAI", "n8n", "MS Graph API"],
        href: "#",
    },
    {
        title: "Voice AI Integration",
        category: "Voice Technology",
        description: "End-to-end voice recording and transcription system integrated with chatbot infrastructure using OpenAI Whisper and Web Audio API.",
        tech: ["Whisper API", "Web Audio API", "n8n"],
        href: "#",
    },
    {
        title: "KPI Automation Dashboard",
        category: "Data Automation",
        description: "Automated KPI reporting system for Starship Technologies that reduced weekly processing from 4 hours to 30 minutes using SQL and Google Apps Script.",
        tech: ["SQL", "Google Apps Script", "Databricks"],
        href: "#",
    },
    {
        title: "Industrial Mapping App",
        category: "Operations Tool",
        description: "AppSheet-based mapping application that accelerated industrial client onboarding and saved 20-40 hours per deployment for Starship Technologies.",
        tech: ["Google AppSheet", "Google Sheets", "GPS"],
        href: "#",
    },
    {
        title: "Pipeline Inspection Data Analysis",
        category: "Data Engineering",
        description: "End-to-end data pipeline for electromagnetic inspection projects that cut validation time from hours to minutes using Python and SQL.",
        tech: ["Python", "SQL", "Data Pipeline"],
        href: "#",
    },
    {
        title: "Risk Classification System",
        category: "AI Classification",
        description: "LLM-powered ticket classification system with 95%+ accuracy in identifying escalation risk, enabling proactive customer retention.",
        tech: ["LLM Prompts", "Classification", "Risk Analysis"],
        href: "#",
    },
];

function ProjectCard({ project, index, registerCard }: { project: any; index: number; registerCard: (el: HTMLDivElement | null) => void }) {
    return (
        <div
            ref={registerCard}
            className="w-[80vw] md:w-[60vw] h-[70vh] flex flex-col justify-between bg-zinc-900/50 border border-zinc-800 p-8 md:p-16 rounded-[2rem] relative group hover:border-zinc-500/50 transition-colors backdrop-blur-sm overflow-hidden flex-shrink-0"
        >
            {/* Dynamic Spotlight Background */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(2500px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.15), transparent 50%)`,
                }}
            />

            <div className="z-10 pointer-events-none">
                {/* Content above background */}
                <div className="flex justify-between items-start mb-8">
                    <span className="px-4 py-1 rounded-full border border-zinc-700 bg-zinc-950 text-sm text-zinc-300">
                        {project.category}
                    </span>
                    <span className="text-zinc-600 font-mono">0{index + 1}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white group-hover:text-purple-100 transition-colors">
                    {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string) => (
                        <span
                            key={t}
                            className="text-xs text-zinc-400 bg-zinc-950/50 px-3 py-1 rounded-md border border-zinc-800"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="z-10 border-t border-zinc-800 pt-8 mt-auto pointer-events-auto">
                <p className="text-lg text-zinc-400 mb-8 line-clamp-3 pointer-events-none">
                    {project.description}
                </p>
                <Link
                    href={project.href}
                    className="inline-flex items-center gap-3 text-white font-bold hover:gap-4 transition-all group/link"
                >
                    View Case Study{" "}
                    <ArrowUpRight className="text-purple-400 group-hover/link:text-white transition-colors" />
                </Link>
            </div>
        </div>
    );
}

export function Projects() {
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
        <section className="bg-zinc-950 overflow-hidden" onMouseMove={handleMouseMove}>
            {/* Trigger div that gets pinned */}
            <div ref={triggerRef}>
                <div ref={sectionRef} className="h-screen w-max flex flex-row flex-nowrap relative">
                    {/* Intro Slide */}
                    <div className="h-screen w-[40vw] flex-shrink-0 flex flex-col justify-center px-12 md:px-16 relative border-r border-zinc-900">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(100,20,200,0.1),rgba(0,0,0,0))]" />
                        <span className="text-purple-400 font-mono mb-6 block">01 / WORK</span>
                        <h2 className="text-5xl md:text-8xl font-bold mb-8">
                            Selected
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
