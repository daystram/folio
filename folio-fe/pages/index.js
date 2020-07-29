import Head from 'next/head'
import React, {useEffect, useState} from "react";
import {motion, useTransform, useViewportScroll} from "framer-motion";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faGitlab, faInstagram, faLinkedinIn, faMediumM, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.sass'
import Logo from "../components/logo";
import Chevron from '../components/chevron';

export default function Home() {
  const [scrolling, setScrolling] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const {scrollY} = useViewportScroll();
  const window_height = process.browser ? window.innerHeight : 0;
  const title_height = useTransform(scrollY, [0, window_height - 48], [window_height, 48]);
  const name_scale = useTransform(scrollY, [0, window_height - 48], [1, 0.4]);
  const logo_dimension = useTransform(scrollY, [0, window_height - 48], [112, 32]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolling(scrollY.current > window_height - 48);
      setAtStart(scrollY.current === 0);
    })
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Danny August Ramaputra</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <main>
        <section className={`${styles.head}`}>
          <motion.div layout className={styles.title} data-isscrolling={scrolling} style={{height: title_height}}>
            <motion.div layout style={{width: logo_dimension, height: logo_dimension,}}><Logo/></motion.div>
            <motion.div layout>
              <motion.h1
                className={styles.name}
                style={{scale: name_scale, transformOrigin: "left center"}}
                animate={{opacity: [0, 1]}}
                transition={{opacity: {duration: 2, ease: "easeInOut"}}}>
                Danny August Ramaputra
              </motion.h1>
            </motion.div>
            <motion.div layout className={styles.mediaGroup} data-isscrolling={scrolling}>
              <a target="_blank" href="https://gitlab.com/daystram">
                <FontAwesomeIcon icon={faGitlab} className={styles.mediaGlyph}/></a>
              <a target="_blank" href="https://github.com/daystram">
                <FontAwesomeIcon icon={faGithub} className={styles.mediaGlyph}/></a>
              <a target="_blank" href="https://www.linkedin.com/in/daystram/">
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.mediaGlyph}/></a>
              <a target="_blank" href="https://twitter.com/daystram">
                <FontAwesomeIcon icon={faTwitter} className={styles.mediaGlyph}/></a>
              <a target="_blank" href="https://www.instagram.com/daystram_/">
                <FontAwesomeIcon icon={faInstagram} className={styles.mediaGlyph}/></a>
              <a target="_blank" href="https://medium.com/@daystram">
                <FontAwesomeIcon icon={faMediumM} className={styles.mediaGlyph}/></a>
              <a target="_blank" href="mailto:daystram@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className={styles.mediaGlyph}/></a>
            </motion.div>
          </motion.div>
          <div className={styles.chevronContainer}><Chevron shown={atStart}/></div>
        </section>
        <section className={`${styles.section} ${styles.sectionEven}`}>
          <div className={"container mx-auto"}>
            <h2 className={styles.sectionHeading}>Education</h2>
            <div className={styles.entry}>
              <img src={"android-chrome-192x192.png"} width={64}/>
              <div className={styles.entryContainer}>
                <h3 className={styles.entryHeading}>University of Queensland</h3>
                <p>2020 - present</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt eum laboriosam, odit
                  quibusdam quidem quisquam sapiente voluptas voluptate voluptates. Distinctio exercitationem fugit
                  itaque nam non repellat sapiente vel voluptate.</p>
              </div>
            </div>
            <div>
              <h3>Universitas Indonesia</h3>
              <p>2017 - present</p>
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.sectionOdd}`}>
          <h2 className={styles.heading}>Experience</h2>
        </section>
        <section className={`${styles.section} ${styles.sectionEven}`}>
          <h2 className={styles.heading}>Skills</h2>
        </section>
        <section className={`${styles.section} ${styles.sectionOdd}`}>
          <h2 className={styles.heading}>Projects</h2>
        </section>
        <footer className={styles.footer}>
          <div className={styles.copy}>Danny August Ramaputra {new Date().getFullYear()}</div>
        </footer>
      </main>
    </div>
  )
}
