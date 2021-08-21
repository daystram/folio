import React from "react";
import FooterBar from "../components/FooterBar";
import TitleBar from "../components/TitleBar";

import styles from "./index.module.sass";

export default function Resume() {
  return (
    <div className={styles.container}>
      <main>
        <TitleBar />
        <section className={`${styles.section} ${styles.sectionEven}`}>
          <div className={"container mx-auto"}>
            <h2 className={styles.sectionHeading}>Education</h2>
            <div className={styles.entry}>
              <img src={"logo-uq.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>
                    University of Queensland
                  </h3>
                  <h4 className={styles.entryHeading2}>
                    Computer Science, GPA: 7.00/7.00
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>
                    Feb 2020 – present (expected Dec 2021)
                  </p>
                  <p className={styles.entryHeadingSub1}>Brisbane, Australia</p>
                  <ul className={styles.entryDescriptionList}>
                    <li>
                      Bachelor of Computer Science, majoring in Data Science.
                    </li>
                    <li>
                      Received three Dean’s commendations for academic
                      excellence across three semesters.
                    </li>
                    <li>
                      Scholarship recipient for outstanding academic
                      achievements.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={styles.entry}
              style={{
                marginBottom: 0,
              }}
            >
              <img src={"logo-ui.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>
                    Universitas Indonesia
                  </h3>
                  <h4 className={styles.entryHeading2}>
                    Computer Science, GPA: 3.99/4.00
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>
                    Jul 2017 – present (expected Dec 2021)
                  </p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                  <ul className={styles.entryDescriptionList}>
                    <li>Bachelor of Computer Science.</li>
                    <li>
                      Double degree in Computer Science with University of
                      Queensland.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionEven}>
          <div className={styles.sectionSeparator} />
        </section>

        <section className={`${styles.section} ${styles.sectionEven}`}>
          <div className={"container mx-auto"}>
            <h2 className={styles.sectionHeading}>Working Experience</h2>
            <div className={styles.entry}>
              <img src={"logo-hf.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>
                    Software Developer Intern
                  </h3>
                  <h4 className={styles.entryHeading2}>HappyFresh</h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>Sep 2019 – Dec 2019</p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                  <ul className={styles.entryDescriptionList}>
                    <li>
                      Implemented a live delivery tracker system for more than 5
                      000 concurrent active deliveries.
                    </li>
                    <li>
                      Retrieved live GPS feed from couriers via ActiveMQ,
                      processed in Go backend, served in React frontend + Google
                      Maps with WebSocket protocol for live delivery feed.
                    </li>
                    <li>
                      Doubled battery life of couriers’ tracking devices by
                      implementing Kalman filters and location interpolation to
                      reduce GPS polling rate by more than 50%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.entry}>
              <img src={"logo-sp.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>
                    Backend Developer Intern
                  </h3>
                  <h4 className={styles.entryHeading2}>Shopee</h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>May 2019 – Aug 2019</p>
                  <p className={styles.entryHeadingSub1}>Indonesia</p>
                  <ul className={styles.entryDescriptionList}>
                    <li>
                      Designed and implemented an adaptive deployment versioning
                      system for all Shopee applications across 7 Southeast
                      Asian countries, using Go backend with Redis, GitLab API
                      integration, and Google Cloud Platform APIs.
                    </li>
                    <li>
                      Enhanced scalability and reliability of a live voting app
                      by migrating to RabbitMQ with Go backend, serving 5 000
                      peak concurrent voters.
                    </li>
                    <li>
                      Developed a remote profiling system for Go-based backends.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.entry}>
              <img src={"logo-pk.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>Software Engineer</h3>
                  <h4 className={styles.entryHeading2}>
                    Universitas Indonesia Centre of Computer Science
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>Mar 2019 – Aug 2019</p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                  <ul className={styles.entryDescriptionList}>
                    <li>
                      Developed a mobile guide and support app for two
                      international conferences using React Native.
                    </li>
                    <li>
                      Designed and created a live chat feature for help and
                      support using WebSocket protocol with Node.js + Google
                      Firebase backend, serving more than 1 000 concurrent
                      users.
                    </li>
                    <li>
                      Back-end uses WebSocket protocol as a buffer between user
                      mobile chat clients, the customer service client, and
                      Google Firestore to offload client load and optimize
                      read/write operations on Firestore
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionEven}>
          <div className={styles.sectionSeparator} />
        </section>

        <section className={`${styles.section} ${styles.sectionEven}`}>
          <div className={"container mx-auto"}>
            <h2 className={styles.sectionHeading}>Other Activities</h2>
            <div className={styles.entry}>
              <img src={"logo-ui.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>
                    Teaching Assistant Coordinator
                  </h3>
                  <h4 className={styles.entryHeading2}>
                    Universitas Indonesia
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>Sep 2018 – Jun 2019</p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                  <ul className={styles.entryDescriptionList}>
                    <li>
                      Managed and coordinated a team of teaching assistants for
                      multiple courses.
                    </li>
                    <li>
                      Assisted with teaching for “Programming Foundations 2”,
                      “Introduction to Computer Organization” and “Introduction
                      to Digital Systems” courses across two semesters.
                    </li>
                    <li>
                      Created and marked practicals, tutorials, and assignments
                      for these courses.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={styles.entry}
              style={{
                marginBottom: 0,
              }}
            >
              <img src={"logo-trui.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>System Programmer</h3>
                  <h4 className={styles.entryHeading2}>
                    Universitas Indonesia Robotics Team
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>Mar 2018 – Jun 2019</p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                  <ul className={styles.entryDescriptionList}>
                    <li>
                      Developed rocket control system for the Autonomous Rocket
                      Research Division (AURORA) using Python and C++.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionEven}>
          <div className={styles.sectionSeparator} />
        </section>

        <section className={`${styles.section} ${styles.sectionEven}`}>
          <div className={"container mx-auto"}>
            <h2 className={styles.sectionHeading}>Community</h2>
            <div className={styles.entry}>
              <img src={"logo-uqcs.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>UQ Computing Society</h3>
                  <h4 className={styles.entryHeading2}>
                    Associated with University of Queensland
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>Feb 2020 – present</p>
                  <p className={styles.entryHeadingSub1}>Brisbane, Australia</p>
                </div>
              </div>
            </div>
            <div
              className={styles.entry}
              style={{
                marginBottom: 0,
              }}
            >
              <img src={"logo-trui.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>
                    Universitas Indonesia Robotics Team
                  </h3>
                  <h4 className={styles.entryHeading2}>
                    Associated with Universitas Indonesia
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>Mar 2018 – Jun 2019</p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
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
