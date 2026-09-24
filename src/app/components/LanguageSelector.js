"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const locales = [
  { code: "pt-br", label: "PT-BR" },
  { code: "en", label: "EN" },
];

export default function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeLocale, setActiveLocale] = useState("pt-br");

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((item) => item.startsWith("locale="));

    if (cookieLocale) {
      const locale = cookieLocale.split("=")[1];
      setActiveLocale(locale || "pt-br");
      return;
    }

    setActiveLocale("pt-br");
  }, []);

  const handleChange = (locale) => {
    setActiveLocale(locale);
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.refresh();
  };

  return (
    <div className="language-selector" aria-label="Seleção de idioma">
      {locales.map((locale) => (
        <button
          key={locale.code}
          type="button"
          className={`language-option ${activeLocale === locale.code ? `active ${locale.code}` : ""}`}
          onClick={() => handleChange(locale.code)}>
          {locale.label}
        </button>
      ))}
    </div>
  );
}
