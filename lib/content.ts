import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Bot, MessageSquare, Cpu, Workflow, type LucideIcon } from 'lucide-react';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type Experience = {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    tech: string[];
};

export type Project = {
    title: string;
    category: string;
    description: string;
    tech: string[];
    image?: string;
    slug: string;
    context: string;
    approach: string;
    outcome: string;
};

export type Service = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export function getExperiences(): Experience[] {
    const dir = path.join(CONTENT_DIR, 'experiences');
    const files = fs.readdirSync(dir);
    return files
        .filter((file) => file.endsWith('.yaml'))
        .sort() // Ensure chronological order by filename
        .map((file) => {
            const content = fs.readFileSync(path.join(dir, file), 'utf8');
            return yaml.load(content) as Experience;
        });
}

export function getProjects(): Project[] {
    const dir = path.join(CONTENT_DIR, 'projects');
    const files = fs.readdirSync(dir);
    return files
        .filter((file) => file.endsWith('.yaml'))
        .sort()
        .map((file) => {
            const content = fs.readFileSync(path.join(dir, file), 'utf8');
            const project = yaml.load(content) as Project & { tags?: string[] };
            return { ...project, tech: project.tech ?? project.tags ?? [] };
        });
}

export function getServices(): Service[] {
    const dir = path.join(CONTENT_DIR, 'services');
    const files = fs.readdirSync(dir);

    const iconMap: Record<string, LucideIcon> = {
        'Workflow': Workflow,
        'MessageSquare': MessageSquare,
        'Bot': Bot,
        'Cpu': Cpu,
    };

    return files
        .filter((file) => file.endsWith('.yaml'))
        .sort()
        .map((file) => {
            const content = fs.readFileSync(path.join(dir, file), 'utf8');
            const data = yaml.load(content) as Omit<Service, 'icon'> & { icon: string };

            // Transform icon string name to actual React component
            return {
                ...data,
                icon: iconMap[data.icon] || Workflow,
            };
        });
}
