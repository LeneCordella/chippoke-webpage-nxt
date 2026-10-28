"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import styles from "./NavBar.module.css";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-links"]}>
          <Link href="/">{t("home")}</Link>
          <Link href="/about">{t("about")}</Link>
          <Link href="/projects">{t("projects")}</Link>
          <Link href="/login">{t("login")}</Link>
        </div>

        <LanguageSelector />
      </div>
    </nav>
  );
}
