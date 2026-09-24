import projects from "../data/projects";
import styles from "../page.module.css";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("ProjectsPage");
  return (
    <div className={styles.page}>
      <h1>{t("title")}</h1>
      <main className={styles.main}>
        <p>Here are some of my projects:</p>
        <div className={styles.intro}>
          <ul>
            {projects.map((project) => (
              <li key={project.title}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <p>Tecnologias: {project.technologies.join(", ")}</p>

                <a href={project.link}>Repository Link</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
