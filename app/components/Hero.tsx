"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function Hero() {
    const container = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        })
            .from(subtitleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=0.5")
            .from(ctaRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
            }, "-=0.5");

    }, { scope: container });

    return (
        <section ref={container} className="h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950 text-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,20,200,0.15),rgba(0,0,0,0))]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 to-transparent" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <div className="overflow-hidden">
                    <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
                        Michel Merae
                    </h1>
                </div>

                <div ref={subtitleRef}>
                    <p className="text-xl md:text-3xl text-zinc-400 mb-8 max-w-3xl mx-auto font-light">
                        AI Engineer & Automation Architect
                    </p>
                    <p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
                        Turning AI capabilities into business results.
                    </p>
                </div>

                <div ref={ctaRef} className="flex gap-4 justify-center">
                    <a href="#work" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors">
                        View My Work
                    </a>
                    <a href="#contact" className="border border-zinc-700 text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-900 transition-colors">
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
