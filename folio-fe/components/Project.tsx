import React from "react";

import styles from "./Project.module.sass";

export default function Project({
  name,
  description,
  background,
  tags,
  link,
  github,
}: {
  name: string;
  description: string;
  background: string;
  tags: string[];
  link?: string;
  github: string;
}) {
  return (
    <div
      className={`flex flex-grow flex-col ${styles.projectContainer} ${background}`}
    >
      <div className={"flex-grow"}>
        <div className={styles.projectTitle}>{name}</div>
        <div className={styles.projectDescription}>{description}</div>
        <div className={styles.projectTags}>
          {tags.map((tag) => (
            <div className={styles.tag} key={tag}>{tag}</div>
          ))}
        </div>
      </div>
      <div
        className={`flex-none grid gap-6 grid-cols-1 ${
          link && "sm:grid-cols-2"
        }`}
      >
        {link && (
          <a target={"_blank"} rel={"noopener noreferrer"} href={link}>
            <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
              Visit Project
            </div>
          </a>
        )}
        <a target={"_blank"} rel={"noopener noreferrer"} href={github}>
          <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
            View on GitHub
          </div>
        </a>
      </div>
    </div>
  );
}
