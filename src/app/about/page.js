import React from "react";
import { useTranslations } from "next-intl";
//import styles from "../globals.css";

export default function About() {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <main>
        <p>{t("content")}</p>
      </main>
    </div>
  );
}
