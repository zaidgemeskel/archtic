import { motion } from "framer-motion";
import { TbArrowDown, TbPointFilled } from "react-icons/tb";
import heroCover from "../../assets/images/hero-cover.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            Dawit
            <br />
            Mebrahtom
          </h1>

          <p className={styles.role}>
            Architect <TbPointFilled className={styles.dot} /> Landscape
            Architect &amp; Intermediate Architect
          </p>

          <p className={styles.lede}>
            Transforming ideas into spaces that inspire, perform, and endure
            through residential, educational, commercial, and mixed-use design.
          </p>

          <div className={styles.ctaRow}>
            <a href="#projects" className={styles.cta}>
              View Projects
            </a>
            <a href="#contact" className={styles.ctaGhost}>
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.frame}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* <div className={styles.frameTag}>
            DWG. 01 <TbPointFilled className={styles.dot} /> SITE VIEW
          </div> */}
          <img src={heroCover} alt="Architectural elevation render" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to About section"
      >
        <TbArrowDown />
      </motion.a>
    </section>
  );
}
