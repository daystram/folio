import React from "react";

import styles from "./FooterBar.module.sass";

export default function FooterBar() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        Hosted at Cloudflare Pages
        <br />
        <br />
        Danny August Ramaputra {new Date().getFullYear()}
      </div>
    </footer>
  );
}
