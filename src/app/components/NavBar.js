"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          {t("brand")}
        </Link>

        <div className="navbar-links">
          <Link href="/">{t("home")}</Link>
          <Link href="/about">{t("about")}</Link>
          <Link href="/projects">{t("projects")}</Link>
        </div>

        <LanguageSelector />
      </div>
    </nav>
  );
}
