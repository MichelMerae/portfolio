import Link from "next/link";
export function Footer() {
  return (
    <footer className="wrap footer">
      <span>© {new Date().getFullYear()} Michel Merae</span>
      <div>
        <Link href="https://linkedin.com/in/michel-merae">LinkedIn</Link>
        <Link href="https://github.com/michelmerae">GitHub</Link>
        <Link href="/de" lang="de">
          Deutsch
        </Link>
      </div>
    </footer>
  );
}
