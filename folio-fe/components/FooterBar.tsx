import React, { useLayoutEffect, useState } from "react";

import styles from "./FooterBar.module.sass";

export default function FooterBar() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        Self-Hosted at K8s Cluster
        <br />
        <br />
        Danny August Ramaputra {new Date().getFullYear()}
      </div>
    </footer>
  );
}
