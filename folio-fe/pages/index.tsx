import React from "react";
import Link from "next/link";
import TitleBar from "../components/TitleBar";
import FooterBar from "../components/FooterBar";

import styles from "./index.module.sass";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <TitleBar scrollable />
        <section className={`${styles.section} ${styles.sectionEven}`}>
          <div className={"container mx-auto lg:py-64 lg:flex"}>
            <div className={`mx-auto lg:m-0 lg:flex-none ${styles.hexagon}`}>
              <div className={styles.hexagon_in1}>
                <div className={styles.hexagon_in2} />
              </div>
            </div>
            <div
              className={`lg:flex-grow lg:ml-16 pb-32 lg:pb-0 ${styles.bio}`}
            >
              <div className={styles.entryHeading1}>
                <span className={styles.focus}>Hi!</span> I am{" "}
                <span className={`${styles.focus} ${styles.highlight}`}>
                  Danny August Ramaputra
                </span>
                , nicknamed <span className={styles.focus}>daystram</span>.
              </div>
              <div className={styles.entryHeading1}>
                I am a{" "}
                <span className={`${styles.focus} ${styles.highlight}`}>
                  computer science
                </span>{" "}
                student at{" "}
                <span className={`${styles.focus} ${styles.highlight}`}>
                  The University of Queensland
                </span>
                , majoring in <span className={styles.focus}>data science</span>
                .
              </div>
              <div className={styles.entryHeading1}>
                I <span className={styles.focus}>enjoy</span> working on{" "}
                <span className={styles.focus}>fun projects</span> to{" "}
                <span className={`${styles.focus} ${styles.highlight}`}>
                  explore new technologies
                </span>
                .
              </div>
              <Link href={"/resume"}>
                <a className={`mt-4 ${styles.btn} ${styles.btnResume}`}>
                  View my Resume
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.sectionEven}>
          <div className={styles.sectionSeparator} />
        </section>

        <section className={`${styles.section} ${styles.sectionEven}`}>
          <div className={"container mx-auto"}>
            <div className={styles.sectionHeading}>Project Highlights</div>
            <div className={styles.sectionDescription}>
              Here are <span className={styles.highlight}>select projects</span>{" "}
              that I have been working on. These applications are running in a
              self-hosted multi-node{" "}
              <span className={styles.highlight}>Kubernetes cluster</span>.
            </div>
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"}>
              <div
                className={`flex flex-grow flex-col ${styles.projectContainer} ${styles.projectBackgroundRatify}`}
              >
                <div className={"flex-grow"}>
                  <div className={styles.projectTitle}>🔒 Ratify</div>
                  <div className={styles.projectDescription}>
                    Central Authentication Service implementing OAuth 2.0 and
                    OpenID Connect protocols.
                  </div>
                </div>
                <div className={"flex-none grid grid-cols-2 gap-8"}>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://ratify.daystram.com"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      Visit Project
                    </div>
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://github.com/daystram/ratify"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      View on GitHub
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={`flex flex-grow flex-col ${styles.projectContainer} ${styles.projectBackgroundCut}`}
              >
                <div className={"flex-grow"}>
                  <div className={styles.projectTitle}>📋 Cut</div>
                  <div className={styles.projectDescription}>
                    URL, snippet, and file sharing with ease.
                  </div>
                </div>
                <div className={"flex-none grid grid-cols-2 gap-8"}>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://cut.daystram.com"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      Visit Project
                    </div>
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://github.com/daystram/cut"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      View on GitHub
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={`flex flex-grow flex-col ${styles.projectContainer} ${styles.projectBackgroundCast}`}
              >
                <div className={"flex-grow"}>
                  <div className={styles.projectTitle}>📺 cast</div>
                  <div className={styles.projectDescription}>
                    DASH video-streaming and RTMP live-streaming platform.
                  </div>
                </div>
                <div className={"flex-none grid grid-cols-2 gap-8"}>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://cast.daystram.com"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      Visit Project
                    </div>
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://github.com/daystram/cast"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      View on GitHub
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={`flex flex-grow flex-col ${styles.projectContainer} ${styles.projectBackgroundProton}`}
              >
                <div className={"flex-grow"}>
                  <div className={styles.projectTitle}>🌀 Proton</div>
                  <div className={styles.projectDescription}>
                    Proton K8s cluster setup guide, assets, and configurations.
                  </div>
                </div>
                <div className={"flex-none grid grid-cols-1 gap-8"}>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://github.com/daystram/proton"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      View on GitHub
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={`flex flex-grow flex-col ${styles.projectContainer} ${styles.projectBackgroundChart}`}
              >
                <div className={"flex-grow"}>
                  <div className={styles.projectTitle}>🚢 helm-charts</div>
                  <div className={styles.projectDescription}>
                    Helm chart repository for daystram applications.
                  </div>
                </div>
                <div className={"flex-none grid grid-cols-2 gap-8"}>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://charts.daystram.com"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      Visit Project
                    </div>
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://github.com/daystram/helm-charts"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      View on GitHub
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={`flex flex-grow flex-col ${styles.projectContainer} ${styles.projectBackgroundFolio}`}
              >
                <div className={"flex-grow"}>
                  <div className={styles.projectTitle}>📑 Folio</div>
                  <div className={styles.projectDescription}>
                    Personal website and portfolio.
                  </div>
                </div>
                <div className={"flex-none grid grid-cols-2 gap-8"}>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://daystram.com"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      Visit Project
                    </div>
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={"https://github.com/daystram/folio"}
                  >
                    <div className={`${styles.btn} ${styles.btnProjectVisit}`}>
                      View on GitHub
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterBar />
      </main>
    </div>
  );
}
