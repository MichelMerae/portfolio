'use client';

import { Project } from '@/lib/content';
import BentoCard from './BentoCard';
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface BentoGridProps {
    projects: Project[];
}

export default function BentoGrid({ projects }: BentoGridProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="bg-neutral-950">

            {/* Header - Stays at the top initially, then scrolls away or could be sticky too */}
            <div className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500 mb-4">
                        Selected Works
                    </h2>
                    <p className="text-neutral-400 max-w-xl text-lg">
                        A curated stack of digital experiences. Scroll to explore.
                    </p>
                </motion.div>
            </div>

            {/* Stack Container */}
            <div className="relative">
                {projects.map((project, i) => {
                    // Create a variable top offset so cards stack slightly offset (optional), 
                    // or just sticky top-0 to fully allow overlap. 
                    // Let's use sticky top-0 for full cover, or top-[i * 20px] for a visible stack.

                    return (
                        <div
                            key={project.title}
                            className="sticky top-0 h-screen flex items-center justify-center p-4 md:p-8"
                            style={{ top: 0 }} // We want them to stick specifically at top:0 so they fully overlap
                        >
                            <CardWrapper i={i} total={projects.length}>
                                <BentoCard project={project} index={i} />
                            </CardWrapper>
                        </div>
                    )
                })}
            </div>
            {/* Spacer at bottom to allow last card to be viewed clearly */}
            <div className="h-[20vh]" />
        </section>
    );
}

// Wrapper to handle the "Coming from corner" animation
function CardWrapper({ children, i, total }: { children: React.ReactNode, i: number, total: number }) {
    // Define distinct entrance points/styles
    const directions = [
        { x: -100, y: 0, rotate: -3, scale: 1 },      // 1. Left Side
        { x: 0, y: 0, rotate: 0, scale: 2.5 },        // 2. CENTER ZOOM (Heavy Impact)
        { x: 100, y: 0, rotate: 3, scale: 1 },        // 3. Right Side
        { x: -50, y: -100, rotate: -5, scale: 0.8 },  // 4. Top-Left (From above)
        { x: 0, y: 0, rotate: 0, scale: 2.5 },        // 5. CENTER ZOOM (Heavy Impact)
        { x: 50, y: 100, rotate: 5, scale: 0.9 },     // 6. Bottom-Right
        { x: 0, y: -100, rotate: 0, scale: 0.8 },     // 7. Top-Center (Drop down)
    ];

    // Cycle through directions based on index
    const direction = directions[i % directions.length];

    return (
        <motion.div
            initial={{
                x: direction.x,
                y: direction.y,
                rotate: direction.rotate,
                scale: direction.scale,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1
            }}
            viewport={{
                once: false,
                margin: "-20%" // Trigger a bit before fully in view
            }}
            transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1], // Custom bounce/smooth ease
                delay: 0.1
            }}
            className="w-full max-w-4xl h-[60vh] md:h-[70vh] relative"
            style={{
                zIndex: i + 1
            }}
        >
            {children}
        </motion.div>
    )
}
