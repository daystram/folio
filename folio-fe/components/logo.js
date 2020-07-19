import {motion} from "framer-motion";
import styles from './logo.module.sass'

const icon = {
  hidden: {
    pathLength: 0,
    strokeWidth: 1,
    fill: "rgba(237, 237, 237, 0)"
  },
  visible: {
    pathLength: [0, 1],
    strokeWidth: [0, 4, 0],
    fill: ["rgba(237, 237, 237, 0)", "rgba(237, 237, 237, 1)", "rgba(237, 237, 237, 0.8)"]
  }
};

export default function Logo({ className }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-14 -8 108 108"
      className={`${className} ${styles.logo}`}>
      <g transform="rotate(0 40 46.2) translate(0 -4)">
        <motion.path
          d="M 0,23.1 40,0 80,23.1 40,46.2 Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {duration: 2, ease: "easeInOut"},
            fill: {duration: 2.2, ease: [1, 0, 0.8, 1]},
            pathLength: {loop: Infinity, duration: 2, repeatDelay: 1, ease: "easeInOut"},
            strokeWidth: {loop: Infinity, duration: 2, repeatDelay: 1, ease: "easeInOut"}
          }}
        />
      </g>
      <g transform="rotate(120 40 46.2) translate(0 -4)">
        <motion.path
          d="M 0,23.1 40,0 80,23.1 40,46.2 Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {duration: 2, ease: "easeInOut"},
            fill: {duration: 2.2, ease: [1, 0, 0.8, 1]},
            pathLength: {loop: Infinity, duration: 2, repeatDelay: 1, ease: "easeInOut"},
            strokeWidth: {loop: Infinity, duration: 2, repeatDelay: 1, ease: "easeInOut"}
          }}
        />
      </g>
      <g transform="rotate(240 40 46.2) translate(0 -4)">
        <motion.path
          d="M 0,23.1 40,0 80,23.1 40,46.2 Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: {duration: 2, ease: "easeInOut"},
            fill: {duration: 2.2, ease: [1, 0, 0.8, 1]},
            pathLength: {loop: Infinity, duration: 2, repeatDelay: 1, ease: "easeInOut"},
            strokeWidth: {loop: Infinity, duration: 2, repeatDelay: 1, ease: "easeInOut"}
          }}
        />
      </g>
    </motion.svg>
  )
}
