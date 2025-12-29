import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-zinc-500 text-sm">
                    © {new Date().getFullYear()} Michel Merae. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <Link href="https://linkedin.com/in/michel-merae" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="mailto:michel.merae@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                        <Mail size={20} />
                    </Link>
                    <Link href="https://github.com/michelmerae" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
