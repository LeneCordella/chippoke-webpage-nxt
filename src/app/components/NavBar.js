import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Meu Site
        </Link>

        <div className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/projects">Projetos</Link>
          {/* <Link href="/translations">Traduções</Link> */}
        </div>

        <LanguageSelector />
      </div>
    </nav>
  );
}
