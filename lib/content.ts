import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
};

export type Study = {
  slug: string;
  organization: string;
  year: string;
  visual: "ticket" | "email" | "report";
  sections: { heading: string; text: string }[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  study?: Study;
};

export type Service = {
  title: string;
  description: string;
  deliverable: string;
};

function readCollection<T>(folder: string): T[] {
  const directory = path.join(process.cwd(), "content", folder);
  return fs
    .readdirSync(directory)
    .filter((name) => name.endsWith(".yaml"))
    .sort()
    .map(
      (name) =>
        yaml.load(fs.readFileSync(path.join(directory, name), "utf8")) as T,
    );
}

export const getExperiences = () => readCollection<Experience>("experiences");
export const getProjects = () => readCollection<Project>("projects");
export const getServices = () => readCollection<Service>("services");

export type FeaturedProject = Project & { study: Study };

export function getCaseStudies(): FeaturedProject[] {
  return getProjects().filter((project): project is FeaturedProject =>
    Boolean(project.study),
  );
}
