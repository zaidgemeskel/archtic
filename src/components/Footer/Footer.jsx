import { TbBrandLinkedin, TbBrandInstagram, TbBrandBehance, TbCopyright } from "react-icons/tb";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Dawit Mebrahtom</span>
          <span className={styles.brandRole}>Architect</span>
        </div>

        <nav className={styles.links}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.socials}>
          <a href="#" aria-label="LinkedIn"><TbBrandLinkedin /></a>
          <a href="#" aria-label="Instagram"><TbBrandInstagram /></a>
          <a href="#" aria-label="Behance"><TbBrandBehance /></a>
        </div>
      </div>

      <div className={`${styles.bottom} container`}>
        <span className={styles.copyLine}>
          <TbCopyright aria-hidden="true" /> {year} Dawit Mebrahtom. All rights reserved.
        </span>
        <span>Architecture Portfolio 2026-2027</span>
      </div>
    </footer>
  );
}
