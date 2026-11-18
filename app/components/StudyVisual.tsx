import { ChartNoAxesColumn, Mail, MessagesSquare } from "lucide-react";
import type { Study } from "@/lib/content";

export function StudyVisual({ kind }: { kind: Study["visual"] }) {
  if (kind === "ticket")
    return (
      <figure className="sample ticket-sample">
        <figcaption>
          <MessagesSquare size={16} /> Illustrative support ticket
        </figcaption>
        <div className="sheet">
          <small>Customer question</small>
          <p>Where can I find my saved jobs?</p>
          <div className="draft">
            <small>Draft for review</small>
            <p>
              Open your saved jobs list to revisit the roles you bookmarked.
            </p>
          </div>
        </div>
      </figure>
    );
  if (kind === "email")
    return (
      <figure className="sample email-sample">
        <figcaption>
          <Mail size={16} /> Illustrative coaching email
        </figcaption>
        <div className="sheet">
          <small>Subject</small>
          <p>A role that uses your SQL experience</p>
          <div className="draft">
            <small>Why this role</small>
            <p>
              Your reporting work aligns with the analytics team’s focus on
              operations.
            </p>
          </div>
        </div>
      </figure>
    );
  return (
    <figure className="sample report-sample">
      <figcaption>
        <ChartNoAxesColumn size={16} /> Weekly report preparation
      </figcaption>
      <div className="sheet chart">
        <div>
          <small>Before</small>
          <strong>4 hours</strong>
        </div>
        <span className="bar old" />
        <div>
          <small>After</small>
          <strong>30 min</strong>
        </div>
        <span className="bar new" />
      </div>
    </figure>
  );
}
