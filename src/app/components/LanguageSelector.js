"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = [
  { code: "pt-br", label: "PT-BR" },
  { code: "en", label: "EN" },
];

export default function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (locale) => {
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.refresh();
    router.push(pathname || "/");
  };

  return (
    <div className="language-selector" aria-label="Seleção de idioma">
      {locales.map((locale) => (
        <button
          key={locale.code}
          type="button"
          className="language-option"
          onClick={() => handleChange(locale.code)}>
          {locale.label}
        </button>
      ))}
    </div>
  );
}
