import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import portrait from "@/assets/personal_photos/pictoart_1764535413241.png";

export function Hero() {
  return (
    <section className="wrap hero">
      <div className="intro">
        <p className="eyebrow location">
          <MapPin size={14} /> Hamburg, Germany
        </p>
        <h1>
          AI automation for <em>support &amp; operations.</em>
        </h1>
        <p className="lede">
          I’m Michel, an AI engineer. I build n8n workflows that draft support
          replies, personalize emails and flag cases that need a person. I also
          fix workflows that fail in ways your team can’t explain.
        </p>
        <div className="actions">
          <Link className="button" href="/work/zendesk-draft-review">
            See the Zendesk case study <ArrowUpRight size={17} />
          </Link>
          <a className="text-link" href="#contact">
            Discuss a workflow
          </a>
        </div>
      </div>
      <figure className="portrait">
        <Image
          src={portrait}
          alt="Michel Merae"
          sizes="(min-width: 800px) 370px, 84vw"
          priority
        />
        <figcaption>
          <strong>Michel Merae</strong>
          <span>AI Applications Designer</span>
        </figcaption>
      </figure>
    </section>
  );
}
