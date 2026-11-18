import type { Service as ServiceType } from "@/lib/content";

export function Services({ services }: { services: ServiceType[] }) {
    return (
        <section id="services" className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Can Help</h2>
                <p className="text-zinc-400 text-xl mb-16 max-w-3xl">
                    I help companies build AI systems that actually work. Whether you need to automate customer support, build conversational AI, or integrate LLMs into your existing workflows.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-colors bg-zinc-900/50">
                            {/* Assuming icon is passed as a React component. In lib/content it maps string to component */}
                            <service.icon className="w-12 h-12 text-white mb-6" />
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
