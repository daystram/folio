import React, { useEffect, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Chevron, Logo } from "../components/icon";

import styles from "./index.module.sass";

export default function Home() {
  const [scrolling, setScrolling] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const { scrollY } = useViewportScroll();
  const window_height = process.browser ? window.innerHeight : 0;
  const title_height = useTransform(
    scrollY,
    [0, window_height - 48],
    [window_height, 48]
  );
  const name_scale = useTransform(scrollY, [0, window_height - 48], [1, 0.4]);
  const logo_dimension = useTransform(
    scrollY,
    [0, window_height - 48],
    [112, 32]
  );
  useEffect(() => {
    setAtStart(scrollY.get() === 0);
    window.addEventListener("scroll", () => {
      setScrolling(scrollY.get() > window_height - 48);
      setAtStart(scrollY.get() === 0);
    });
  });
  return (
    <div className={styles.container}>
      <main>
        <section className={`${styles.head}`}>
          <motion.div
            layout
            className={styles.title}
            data-isscrolling={scrolling}
            style={{ height: title_height }}
          >
            <motion.div
              layout
              style={{ width: logo_dimension, height: logo_dimension }}
            >
              <Logo />
            </motion.div>
            <motion.div layout>
              <motion.h1
                className={styles.name}
                style={{ scale: name_scale, transformOrigin: "left center" }}
                animate={{ opacity: [0, 1], color: ["#ededed00", "#edededff"] }}
                transition={{ opacity: { duration: 2, ease: "easeInOut" } }}
              >
                Danny August Ramaputra
              </motion.h1>
            </motion.div>
            <motion.div
              layout
              className={styles.mediaGroup}
              data-isscrolling={scrolling}
            >
              <a target="_blank" href="https://gitlab.com/daystram">
                <FontAwesomeIcon
                  icon={faGitlab}
                  className={styles.mediaGlyph}
                />
              </a>
              <a target="_blank" href="https://github.com/daystram">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.mediaGlyph}
                />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/daystram/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className={styles.mediaGlyph}
                />
              </a>
              <a target="_blank" href="https://twitter.com/daystram">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.mediaGlyph}
                />
              </a>
              <a target="_blank" href="https://www.instagram.com/daystram_/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.mediaGlyph}
                />
              </a>
              <a target="_blank" href="https://medium.com/@daystram">
                <FontAwesomeIcon
                  icon={faMediumM}
                  className={styles.mediaGlyph}
                />
              </a>
              <a target="_blank" href="mailto:daystram@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={styles.mediaGlyph}
                />
              </a>
            </motion.div>
          </motion.div>
          <div className={styles.chevronContainer}>
            <Chevron shown={atStart} />
          </div>
        </section>
        <section className={`${styles.section} ${styles.sectionEven}`}>
          <div className={"container mx-auto"}>
            <h2 className={styles.sectionHeading}>Education</h2>
            <div className={styles.entry}>
              <img src={"logo-uq.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>
                    The University of Queensland
                  </h3>
                  <h4 className={styles.entryHeading2}>
                    Bachelor of Computer Science, GPA: 7.00/7.00
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>Feb 2020 – present</p>
                  <p className={styles.entryHeadingSub1}>
                    Brisbane, QLD, Australia
                  </p>
                  <ul className={"list-disc"} style={{ paddingLeft: 20 }}>
                    <li>Majoring in data science</li>
                    <li>
                      Scholarship recipient for outstanding academic
                      achievements
                    </li>
                    <li>UQ Computing Society member</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.entry}>
              <img src={"logo-ui.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>
                    Universitas Indonesia
                  </h3>
                  <h4 className={styles.entryHeading2}>
                    Bachelor of Computer Science, GPA: 3.99/4.00
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>Jul 2017 – present</p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                  <ul className={"list-disc"} style={{ paddingLeft: 20 }}>
                    <li>
                      Double degree also in Computer Science with The University
                      of Queensland
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.sectionOdd}`}>
          <div className={"container mx-auto"}>
            <h2 className={styles.sectionHeading}>Experience</h2>
            <div className={styles.entry}>
              <img src={"logo-hf.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>Software Developer</h3>
                  <h4 className={styles.entryHeading2}>
                    HappyFresh, Part-time
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>
                    Sep 2019 – Dec 2019, 4 months
                  </p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                  <ul className={"list-disc"} style={{ paddingLeft: 20 }}>
                    <li>A part of a course in Universitas Indonesia</li>
                    <li>
                      Developed Fleet Tracker service to track customer orders
                      in real-time
                    </li>
                    <li>
                      Advanced coordinate interpolation with Kalman filters are
                      utilized to help reduce GPS usage load on the courier's
                      mobile devices
                    </li>
                    <li>
                      Location stream retrieved from ActiveMQ managed by
                      HappyFresh
                    </li>
                    <li>
                      Golang back-end and JS/React front-end with WebSocket
                      communication
                    </li>
                    <li>
                      Automated deployment using Docker containers to AWS EC2
                      via GitLab CI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.entry}>
              <img src={"logo-sp.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>Back-end Developer</h3>
                  <h4 className={styles.entryHeading2}>
                    Shopee, Full-time Intern
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>
                    May 2019 – Aug 2019, 4 months
                  </p>
                  <p className={styles.entryHeadingSub1}>Singapore</p>
                  <ul className={"list-disc"} style={{ paddingLeft: 20 }}>
                    <li>
                      Developed an adaptive versioning deployment system for
                      Shopee's website across 7 countries, integrating with the
                      on-premise GitLab
                    </li>
                    <li>
                      Developed an automatic remote profiling system for the
                      Golang-based services
                    </li>
                    <li>
                      Developed a voting system for use within the mobile
                      application to support tenants' requirements
                    </li>
                    <li>
                      Mostly developed using Golang back-end, automatically
                      deployed into Kubernetes cluster
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
                    Pusat Ilmu Komputer Universitas Indonesia, Part-time
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>Mar 2019 – Aug 2019</p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                  <ul className={"list-disc"} style={{ paddingLeft: 20 }}>
                    <li>
                      Developed a mobile application for "Quality in Research
                      International Conference"
                    </li>
                    <li>
                      Developed a mobile application for "International Tropical
                      Renewable Energy Conference"
                    </li>
                    <li>
                      Mobile application is powered with Google Firestore
                      real-time database for data storage and live chat
                    </li>
                    <li>
                      NodeJS back-end and React Native-based cross-platform
                      front-end
                    </li>
                    <li>
                      Back-end uses WebSocket communication acting as a buffer
                      between user mobile chat clients, the customer service
                      client, and Google Firestore to offload client load and
                      optimize read/write operations on Firestore
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <p className={styles.entryHeadingSub1}>
                    Sep 2018 – Jun 2019, 10 months
                  </p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                  <ul className={"list-disc"} style={{ paddingLeft: 20 }}>
                    <li>
                      (Jan 2019 - Jun 2019, 6 months) Teaching assistant for
                      "Programming Foundations 2" course
                    </li>
                    <li>
                      (Jan 2019 - Jun 2019, 6 months) Teaching assistant
                      coordinator for "Introduction to Computer Organization"
                      course
                    </li>
                    <li>
                      (Sep 2018 - Jan 2019, 5 months) Teaching assistant
                      coordinator for "Introduction to Digital Systems" course
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.entry}>
              <img src={"logo-trui.png"} className={styles.entryLogo} />
              <div className={styles.entryContainer}>
                <div className={styles.entryHeadContainer}>
                  <h3 className={styles.entryHeading1}>
                    Autonomous Rocket Research System Programmer
                  </h3>
                  <h4 className={styles.entryHeading2}>
                    Tim Robotika Universitas Indonesia
                  </h4>
                </div>
                <div className={styles.entryBodyContainer}>
                  <p className={styles.entryHeadingSub1}>
                    Mar 2018 – Jun 2019, 1 year 4 months
                  </p>
                  <p className={styles.entryHeadingSub1}>Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.copy}>
            Danny August Ramaputra {new Date().getFullYear()}
          </div>
        </footer>
      </main>
    </div>
  );
}
