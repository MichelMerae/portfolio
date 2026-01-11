'use client';

import { Project } from '@/lib/content';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

interface BentoCardProps {
    project: Project;
    index: number;
}

export default function BentoCard({ project, index }: BentoCardProps) {
    return (
        <div className='h-full w-full'>
            <motion.div
                whileHover={{ scale: 0.99 }}
                transition={{ duration: 0.3 }}
                className={clsx(
                    'group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 h-full shadow-2xl',
                )}
            >
                <Link href={project.href || '#'} className="flex h-full w-full flex-col justify-between p-8 md:p-12">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300" />

                    {/* Colorful Background Gradient (Placeholder for Image) */}
                    <div className={clsx(
                        "absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105 opacity-40",
                        index % 3 === 0 ? 'bg-blue-900' :
                            index % 3 === 1 ? 'bg-purple-900' :
                                'bg-emerald-900'
                    )} />

                    {/* Top: Header/Icon */}
                    <div className="relative z-10 flex w-full justify-between items-start">
                        <div className='flex gap-2 flex-wrap'>
                            {project.tech?.map(tag => (
                                <span key={tag} className="text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-neutral-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="p-3 rounded-full bg-white text-black opacity-0 -translate-y-2 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Bottom: Info */}
                    <div className="relative z-10 max-w-2xl">
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                            {project.description}
                        </p>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}
