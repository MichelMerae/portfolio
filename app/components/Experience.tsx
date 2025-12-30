"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Experience as ExperienceType } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function Experience({ experience }: { experience: ExperienceType[] }) {
    const container = useRef(null);
    const pathRef = useRef<SVGPathElement>(null);

    useGSAP(() => {
        // Animate SVG Path Drawing
        const path = pathRef.current;
        if (path) {
            const length = path.getTotalLength();

            // Set up initial state (hidden)
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            // Draw animation
            gsap.to(path, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 60%",
                    end: "bottom 90%",
                    scrub: 1,
                }
            });
        }

        // Card Animations
        const items = gsap.utils.toArray(".timeline-item");
        items.forEach((item: any, i) => {
            gsap.fromTo(item,
                { opacity: 0, x: i % 2 === 0 ? 50 : -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, { scope: container });

    return (
        <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,40,200,0.1),rgba(0,0,0,0))]" />
                <div className="absolute top-1/2 left-0 w-full h-[500px] bg-purple-900/5 -skew-y-12 blur-3xl pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-600">Career Journey</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        My professional path has been a winding road of continuous learning — starting in engineering, moving through data analytics, and arriving at the forefront of AI architecture.
                    </p>
                </div>

                <div ref={container} className="relative max-w-5xl mx-auto h-full">

                    {/* SVG Curvy Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-2 md:w-24 transform md:-translate-x-1/2 h-full z-0 hidden md:block">
                        <svg
                            className="w-full h-full overflow-visible"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 1200"
                        >
                            <path
                                ref={pathRef}
                                d="M 50 0 C 50 0, 50 100, 90 150 C 130 200, 130 300, 50 350 C -30 400, -30 500, 50 550 C 130 600, 130 700, 50 750 C -30 800, -30 900, 50 1000 C 130 1050, 130 1150, 50 1200"
                                fill="none"
                                stroke="#a855f7"
                                strokeWidth="3"
                                vectorEffect="non-scaling-stroke"
                                className="opacity-80 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                                style={{ filter: "drop-shadow(0 0 8px rgba(168,85,247,0.6))" }}
                            />
                        </svg>
                    </div>

                    {/* Mobile Straight Line fallback */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800 md:hidden z-0" />

                    {/* Timeline Items */}
                    <div className="relative z-10 flex flex-col gap-32">
                        {experience.map((job, index) => (
                            <div key={index} className={`timeline-item flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}>

                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-[45%] p-8 bg-zinc-900/60 border border-zinc-800/50 rounded-2xl hover:border-purple-500/30 hover:bg-zinc-900/80 transition-all duration-300 backdrop-blur-sm group shadow-lg">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">{job.role}</h3>
                                            <div className="text-purple-400 font-medium text-sm">{job.company}</div>
                                        </div>
                                        <span className="text-zinc-500 text-sm font-mono border border-zinc-800 px-2 py-1 rounded bg-zinc-950">{job.period}</span>
                                    </div>

                                    <p className="text-zinc-400 mb-6 leading-relaxed text-sm md:text-base">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.tech.map((t) => (
                                            <span key={t} className="text-xs bg-zinc-950/50 text-zinc-400 px-3 py-1 rounded-full border border-zinc-800 group-hover:border-purple-500/20 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Spacer for center alignment */}
                                <div className="hidden md:block w-[10%]" />

                                {/* Empty side */}
                                <div className="hidden md:block w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
