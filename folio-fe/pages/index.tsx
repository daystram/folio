import React from "react";
import Link from "next/link";
import TitleBar from "../components/TitleBar";
import FooterBar from "../components/FooterBar";
import Project from "../components/Project";

import styles from "./index.module.sass";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <TitleBar scrollable />
        <section className={styles.content}>
          <section className={`${styles.section} ${styles.sectionEven}`}>
            <div className={"container mx-auto lg:py-48 lg:flex"}>
              <div className={"div my-32"}>
                <div className={`lg:flex-none ${styles.hexagon}`}>
                  <div className={styles.hexTop} />
                  <div className={styles.hexBottom} />
                </div>
              </div>
              <div
                className={`lg:flex-grow lg:ml-16 pb-24 lg:pb-0 ${styles.bio}`}
              >
                <div className={styles.entryHeading1}>
                  <span className={styles.focus}>Hi!</span> I am{" "}
                  <span className={`${styles.focus} ${styles.highlight}`}>
                    Danny August Ramaputra
                  </span>
                  .
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
                  , majoring in{" "}
                  <span className={styles.focus}>data science</span>.
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
                Here are{" "}
                <span className={styles.highlight}>select projects</span> that I
                have been working on. These applications are running in a
                self-hosted multi-node{" "}
                <span className={styles.highlight}>Kubernetes cluster</span>.
              </div>
              <div
                className={"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"}
              >
                <Project
                  name={"🔒 Ratify"}
                  description={
                    "Central Authentication Service implementing OAuth 2.0 and OpenID Connect protocols."
                  }
                  background={styles.projectBackgroundRatify}
                  tags={["OAuth", "OpenID", "Go", "Vue", "Redis", "PostgreSQL"]}
                  link={"https://ratify.daystram.com"}
                  github={"https://github.com/daystram/ratify"}
                />
                <Project
                  name={"📋 Cut"}
                  description={"URL, snippet, and file sharing with ease."}
                  background={styles.projectBackgroundCut}
                  tags={["Ephemeral", "Rust", "Vue", "Redis"]}
                  link={"https://cut.daystram.com"}
                  github={"https://github.com/daystram/cut"}
                />
                <Project
                  name={"🛰️ Audit"}
                  description={"Service monitor and incident manager."}
                  background={styles.projectBackgroundAudit}
                  tags={[
                    "gRPC",
                    "Monitoring",
                    "Go",
                    "Vue",
                    "InfluxDB",
                    "PostgreSQL",
                  ]}
                  link={"https://audit.daystram.com"}
                  github={"https://github.com/daystram/audit"}
                />
                <Project
                  name={"📺 cast"}
                  description={
                    "DASH video-streaming and RTMP live-streaming platform."
                  }
                  background={styles.projectBackgroundCast}
                  tags={[
                    "DASH",
                    "RTMP",
                    "Go",
                    "React",
                    "MongoDB",
                    "AWS S3",
                    "FFmpeg",
                    "CUDA",
                  ]}
                  link={"https://cast.daystram.com"}
                  github={"https://github.com/daystram/cast"}
                />
                <Project
                  name={"🌀 Proton"}
                  description={
                    "Proton K8s cluster setup guide, assets, and configurations."
                  }
                  background={styles.projectBackgroundProton}
                  tags={["Kubernetes", "VPS", "Wireguard VPN", "Self-hosted"]}
                  github={"https://github.com/daystram/proton"}
                />
                <Project
                  name={"🚢 helm-charts"}
                  description={
                    "Helm chart repository for daystram applications."
                  }
                  background={styles.projectBackgroundChart}
                  tags={["Helm", "Kubernetes", "CI/CD"]}
                  link={"https://charts.daystram.com"}
                  github={"https://github.com/daystram/helm-charts"}
                />
              </div>
            </div>
          </section>
        </section>
        <FooterBar />
      </main>
    </div>
  );
}
