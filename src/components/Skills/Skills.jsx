import { motion } from "framer-motion";
import { softwareSkills, coreSkills, languages } from "../../data/skills";
import styles from "./Skills.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Skills &amp; Tools</span>
          <h2 className={styles.heading}>Instruments of the Craft</h2>
        </motion.div>

        <div className={styles.softwareGrid}>
          {softwareSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                className={styles.softwareCard}
                key={skill.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -6 }}
              >
                <Icon className={styles.softwareIcon} aria-hidden="true" />
                <span className={styles.softwareName}>{skill.name}</span>
                <span className={styles.softwareGroup}>{skill.group}</span>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.lowerGrid}>
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className={styles.panelTitle}>Core Skills</h3>
            <ul className={styles.coreList}>
              {coreSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li key={skill.id} className={styles.coreItem}>
                    <Icon aria-hidden="true" />
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className={styles.panelTitle}>Languages</h3>
            <ul className={styles.langList}>
              {languages.map((lang) => (
                <li key={lang.id} className={styles.langItem}>
                  {lang.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
