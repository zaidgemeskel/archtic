import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import styles from "./Projects.module.css";

export default function ProjectCard({ project, index, onView }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div className={styles.imageWrap}>
        <img src={project.images[0]} alt={project.title} loading="lazy" />
        <span className={styles.index}>{project.index}</span>
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.metaRow}>
          <span className={styles.area}>{project.area}</span>
        </div>
        <p className={styles.desc}>{project.description}</p>

        <button
          type="button"
          className={styles.viewBtn}
          onClick={() => onView(project)}
        >
          View Project <TbArrowUpRight />
        </button>
      </div>
    </motion.article>
  );
}
