import { motion } from "framer-motion";
import gallery from "../../data/gallery";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Gallery</span>
          <h2 className={styles.heading}>Renders &amp; Studies</h2>
        </div>

        <div className={styles.masonry}>
          {gallery.map((item, i) => (
            <motion.figure
              key={item.id}
              className={styles.item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
            >
              <img src={item.src} alt={item.caption} loading="lazy" />
              <figcaption className={styles.caption}>
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
