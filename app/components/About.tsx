export function About() {
    return (
        <section id="about" className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
                <div className="max-w-3xl">
                    <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                        I&apos;m an AI Engineer and Automation Architect based in Hamburg, Germany. I specialize in building intelligent systems that bridge the gap between what AI can do and what businesses actually need.
                    </p>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        Most AI projects never make it to production. Mine do. From prototype to production — I build AI systems that scale.
                    </p>
                </div>
            </div>
        </section>
    );
}
