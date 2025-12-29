export function Contact() {
    return (
        <section id="contact" className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s Talk</h2>
                <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
                    Have a project in mind? I&apos;m available for consulting on AI automation, LLM integration, and intelligent workflow design.
                </p>
                <a
                    href="mailto:michel.merae@gmail.com"
                    className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors"
                >
                    Send Me a Message
                </a>
            </div>
        </section>
    );
}
