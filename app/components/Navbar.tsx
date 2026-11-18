"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const german = usePathname() === "/de";
  const items = german
    ? [
        ["Projekte", "/work"],
        ["Leistungen", "/de#leistungen"],
        ["Kontakt", "/de#kontakt"],
        ["English", "/"],
      ]
    : [
        ["Work", "/#work"],
        ["Services", "/#services"],
        ["About", "/#about"],
        ["Contact", "/#contact"],
        ["Deutsch", "/de"],
      ];
  return (
    <header className="site-header">
      <div className="wrap nav-inner">
        <Link
          className="wordmark"
          href={german ? "/de" : "/"}
          onClick={() => setOpen(false)}
        >
          <span className="monogram" aria-hidden="true">
            mm
          </span>{" "}
          Michel Merae
        </Link>
        <button
          className="menu-switch"
          aria-label={german ? "Menü" : "Menu"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          className={open ? "links open" : "links"}
          aria-label={german ? "Hauptnavigation" : "Main navigation"}
        >
          {items.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
