import { Bot, MessageSquare, Cpu, Workflow } from "lucide-react";

const services = [
    {
        title: "AI-Powered Automation",
        description: "Design and build intelligent workflows that process data, generate content, and make decisions at scale. I specialize in n8n, API integrations, and LLM orchestration.",
        icon: Workflow,
    },
    {
        title: "Conversational AI Systems",
        description: "Build chatbots and voice assistants that have real conversations — not just keyword matching. Multi-agent architectures, context management, and natural dialogue flows.",
        icon: MessageSquare,
    },
    {
        title: "LLM Integration & Prompt Engineering",
        description: "Integrate OpenAI, Claude, Gemini, or other LLMs into your products. Optimize prompts for accuracy, cost, and speed. Build reliable AI features that handle edge cases.",
        icon: Bot,
    },
    {
        title: "Process Automation Consulting",
        description: "Identify automation opportunities in your business. Design workflows that save hours of manual work every week. Implement with measurable ROI.",
        icon: Cpu,
    },
];

export function Services() {
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
