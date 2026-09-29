"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./MenuBar.module.css";

export default function MenuBar() {
  const t = useTranslations("MenuBar");

  return (
    <nav className={styles.menubar}>
      <div className={styles.menubarLinks}>
        <h1>{t("title")}</h1>
        <ul>
          <li>
            <Link href="">"Item 01"</Link>
          </li>
          <li>
            <Link href="">"Item 2"</Link>
          </li>
          <li>
            <Link href="">"Item 3"</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
