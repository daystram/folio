import { motion } from "framer-motion";

import styles from "./logo.module.sass";

const variants = {
  start: {
    pathLength: 0,
    strokeWidth: 0,
    stroke: "#ededed00",
    fill: "rgba(237, 237, 237, 0.75)",
  },
  end: {
    pathLength: [0, 1],
    strokeWidth: [3, 4, 0],
    stroke: "#edededff",
    fill: [
      "rgba(237, 237, 237, 0.75)",
      "rgba(237, 237, 237, 0.95)",
      "rgba(237, 237, 237, 0.75)",
    ],
  },
};

export default function Logo({ className }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-14 -8 108 108"
      className={`${className} ${styles.logo}`}
    >
      <g transform="rotate(0 40 46.2) translate(0 -4)">
        <motion.path
          d="M 0,23.1 40,0 80,23.1 40,46.2 Z"
          variants={variants}
          initial="start"
          animate="end"
          transition={{
            fill: {
              repeat: Infinity,
              delay: 0,
              duration: 2,
              repeatDelay: 1,
              ease: "easeInOut",
            },
            pathLength: {
              repeat: Infinity,
              delay: 0,
              duration: 2,
              repeatDelay: 1,
              ease: "linear",
            },
            strokeWidth: {
              repeat: Infinity,
              delay: 0,
              duration: 2,
              repeatDelay: 1,
              ease: "easeInOut",
            },
          }}
        />
      </g>
      <g transform="rotate(120 40 46.2) translate(0 -4)">
        <motion.path
          d="M 0,23.1 40,0 80,23.1 40,46.2 Z"
          variants={variants}
          initial="start"
          animate="end"
          transition={{
            fill: {
              repeat: Infinity,
              delay: 1,
              duration: 2,
              repeatDelay: 1,
              ease: "easeInOut",
            },
            pathLength: {
              repeat: Infinity,
              delay: 1,
              duration: 2,
              repeatDelay: 1,
              ease: "linear",
            },
            strokeWidth: {
              repeat: Infinity,
              delay: 1,
              duration: 2,
              repeatDelay: 1,
              ease: "easeInOut",
            },
          }}
        />
      </g>
      <g transform="rotate(240 40 46.2) translate(0 -4)">
        <motion.path
          d="M 0,23.1 40,0 80,23.1 40,46.2 Z"
          variants={variants}
          initial="start"
          animate="end"
          transition={{
            fill: {
              repeat: Infinity,
              delay: 2,
              duration: 2,
              repeatDelay: 1,
              ease: "easeInOut",
            },
            pathLength: {
              repeat: Infinity,
              delay: 2,
              duration: 2,
              repeatDelay: 1,
              ease: "linear",
            },
            strokeWidth: {
              repeat: Infinity,
              delay: 2,
              duration: 2,
              repeatDelay: 1,
              ease: "easeInOut",
            },
          }}
        />
      </g>
    </motion.svg>
  );
}
