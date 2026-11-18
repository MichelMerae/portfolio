import type { Experience as Role } from "@/lib/content";
export function Experience({ experience }: { experience: Role[] }) {
  return (
    <div aria-label="Career history" className="career">
      {experience.map((role) => (
        <article key={role.company}>
          <small>{role.period}</small>
          <h3>{role.company}</h3>
          <p>{role.role}</p>
          <p className="role-detail">{role.description}</p>
        </article>
      ))}
    </div>
  );
}
