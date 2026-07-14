import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbX, TbChevronLeft, TbChevronRight } from "react-icons/tb";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  const [active, setActive] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const openProject = (project) => {
    setActive(project);
    setImgIndex(0);
  };

  const close = () => setActive(null);

  const next = () =>
    setImgIndex((i) => (active ? (i + 1) % active.images.length : 0));
  const prev = () =>
    setImgIndex((i) =>
      active ? (i - 1 + active.images.length) % active.images.length : 0
    );

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Selected Work</span>
          <h2 className={styles.heading}>Projects</h2>
          <p className={styles.subheading}>
            A collection of intern, concept, and heritage-research projects,
            each documented from the original portfolio.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onView={openProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={close}
                aria-label="Close project"
              >
                <TbX />
              </button>

              <div className={styles.modalImageWrap}>
                <img
                  src={active.images[imgIndex]}
                  alt={`${active.title}: view ${imgIndex + 1}`}
                />
                {active.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className={`${styles.navBtn} ${styles.navPrev}`}
                      onClick={prev}
                      aria-label="Previous image"
                    >
                      <TbChevronLeft />
                    </button>
                    <button
                      type="button"
                      className={`${styles.navBtn} ${styles.navNext}`}
                      onClick={next}
                      aria-label="Next image"
                    >
                      <TbChevronRight />
                    </button>
                  </>
                )}
              </div>

              <div className={styles.modalBody}>
                <span className={styles.category}>{active.category}</span>
                <h3 className={styles.modalTitle}>{active.title}</h3>
                <span className={styles.area}>{active.area}</span>
                <p className={styles.desc}>{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
