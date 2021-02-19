import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
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
import { Chevron, Logo } from "./icon";

import styles from "./TitleBar.module.sass";

export default function TitleBar({ scrollable }: { scrollable?: boolean }) {
  const [scrolling, setScrolling] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [, setPageLoaded] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useViewportScroll();
  const titleHeight = scrollable
    ? useTransform(scrollY, [0, windowHeight - 48], [windowHeight, 48])
    : 48;
  const nameScale = scrollable
    ? useTransform(scrollY, [0, windowHeight - 48], [1, 0.4])
    : 0.4;
  const logoScale = scrollable
    ? useTransform(scrollY, [0, windowHeight - 48], [112, 32])
    : 32;
  scrollable &&
    useLayoutEffect(() => {
      setWindowHeight(window.innerHeight);
      setScrolling(window.scrollY > window.innerHeight - 48);
      const scrollCallback = () => {
        setPageLoaded((loaded) => {
          // skip initial "scroll" event fired by browser
          if (!loaded) {
            return true;
          }
          setHasScrolled(true);
          setScrolling(window.scrollY > window.innerHeight - 48);
          return loaded;
        });
      };
      window.addEventListener("scroll", scrollCallback);
      return () => {
        window.removeEventListener("scroll", scrollCallback);
      };
    }, []);
  return (
    <section
      className={`${styles.head}`}
      style={{ height: scrollable ? "100vh" : 48 }}
    >
      <motion.div
        layout
        className={styles.title}
        data-isscrolling={scrolling}
        transition={{ duration: 0 }}
        style={{
          height: scrollable
            ? process.browser && window.scrollY && titleHeight
              ? titleHeight
              : "100%"
            : 48,
        }}
      >
        <motion.div
          layout
          transition={{
            duration: hasScrolled ? 0.25 : 0,
            ease: "easeInOut",
          }}
          style={{ width: logoScale, height: logoScale }}
        >
          <Logo />
        </motion.div>
        <motion.div
          layout
          transition={{
            duration: hasScrolled ? 0.25 : 0,
            ease: "easeInOut",
          }}
        >
          <motion.h1
            className={styles.name}
            style={{ scale: nameScale, transformOrigin: "left center" }}
            initial={{ color: "#ededed00" }}
            animate={{ color: "#edededff" }}
            transition={{
              duration: hasScrolled ? 0.25 : 0,
              ease: "easeInOut",
            }}
          >
            <Link href="/">Danny August Ramaputra</Link>
          </motion.h1>
        </motion.div>
        <motion.div
          layout
          className={styles.mediaGroup}
          data-isscrolling={scrolling}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: hasScrolled ? 0.25 : 0,
            ease: "easeInOut",
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/daystram"
            className={styles.mediaGlyph}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/daystram"
            className={styles.mediaGlyph}
          >
            <FontAwesomeIcon icon={faGitlab} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/daystram/"
            className={styles.mediaGlyph}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/daystram"
            className={styles.mediaGlyph}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/daystram_/"
            className={styles.mediaGlyph}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@daystram"
            className={styles.mediaGlyph}
          >
            <FontAwesomeIcon icon={faMediumM} />
          </a>
          <a href="mailto:daystram@gmail.com" className={styles.mediaGlyph}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </motion.div>
      </motion.div>
      {scrollable && (
        <div className={styles.chevronContainer} style={{ zIndex: 5000 }}>
          <Chevron shown={process.browser && !window.scrollY} />
        </div>
      )}
    </section>
  );
}
