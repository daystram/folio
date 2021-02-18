import { motion } from "framer-motion";

import styles from "./Chevron.module.sass";

const icon = {
  hidden: {
    y: -8,
    opacity: 0,
    strokeWidth: 1,
    fill: "rgba(237, 237, 237, 0)",
  },
  visible: {
    y: 0,
    opacity: 0.5,
    strokeWidth: [0, 1, 0],
    fill: [
      "rgba(237, 237, 237, 0)",
      "rgba(237, 237, 237, 1)",
      "rgba(237, 237, 237, 0.8)",
    ],
  },
};

export default function Chevron({ shown }: { shown: boolean }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={styles.chevron}
    >
      <motion.path
        d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"
        variants={icon}
        initial={"hidden"}
        animate={shown ? "visible" : "hidden"}
        transition={{
          default: { dduration: 1, ease: "easeInOut" },
          fill: { duration: 1.2, ease: [1, 0, 0.8, 1] },
          strokeWidth: {
            repeat: Infinity,
            duration: 2,
            repeatDelay: 1,
            ease: "easeInOut",
          },
        }}
      />
    </motion.svg>
  );
}
