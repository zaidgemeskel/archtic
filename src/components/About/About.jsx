import { motion } from "framer-motion";
import { TbPointFilled } from "react-icons/tb";
import aboutSketch from "../../assets/images/about-sketch.jpg";
import profileImage from "../../assets/images/profile.jpg";
import styles from "./About.module.css";

const FACTS = [
  { label: "Based in", value: ["Adigrat", "Mekelle, Ethiopia"] },
  { label: "Focus", value: ["Residential", "Educational", "Commercial", "Mixed-Use"] },
  { label: "Phone", value: ["0943654907"] },
  { label: "Email", value: ["davemebrahtom21@gmail.com"] },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.portraitCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.portraitFrame}>
              <img src={profileImage} alt="Portrait of Dawit Mebrahtom" />
            </div>
            <div className={styles.sketchFrame}>
              <img src={aboutSketch} alt="Sketch to render architectural study" />
            </div>
          </motion.div>

          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <span className="eyebrow">About</span>
            <h2 className={styles.heading}>The Architect</h2>

            <p className={styles.paragraph}>
              <em>Dawit Mebrahtom</em> is an emerging architect with a passion
              for transforming ideas into spaces that inspire, perform, and
              endure. My design approach integrates functionality,
              innovation, and sustainability while respecting the cultural
              and environmental context of each project. I believe that
              successful architecture is achieved through a balance of
              creativity, technical excellence, and human-centered design.
            </p>

            <p className={styles.paragraph}>
              With experience and knowledge in residential, educational,
              commercial, and mixed-use developments, every project is an
              opportunity to solve real-world challenges through thoughtful
              planning, efficient spatial organization, and expressive
              architectural form. My goal is to create environments that not
              only meet today's needs but also contribute positively to
              future communities.
            </p>

            <dl className={styles.facts}>
              {FACTS.map((fact) => (
                <div className={styles.fact} key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>
                    {fact.value.map((part, i) => (
                      <span key={part} className={styles.factPart}>
                        {i > 0 && (
                          <TbPointFilled className={styles.factDot} aria-hidden="true" />
                        )}
                        {part}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
