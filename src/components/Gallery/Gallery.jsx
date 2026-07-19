// import { motion } from "framer-motion";
// import gallery from "../../data/gallery";
// import styles from "./Gallery.module.css";

// export default function Gallery() {
//   return (
//     <section id="gallery" className={styles.gallery}>
//       <div className="container">
//         <div className={styles.header}>
//           <span className="eyebrow">Gallery</span>
//           <h2 className={styles.heading}>Renders &amp; Studies</h2>
//         </div>

//         <div className={styles.masonry}>
//           {gallery.map((item, i) => (
//             <motion.figure
//               key={item.id}
//               className={styles.item}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
//             >
//               <img src={item.src} alt={item.caption} loading="lazy" />
//               <figcaption className={styles.caption}>
//                 {item.caption}
//               </figcaption>
//             </motion.figure>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbX, TbChevronLeft, TbChevronRight, TbZoomIn } from "react-icons/tb";
import gallery from "../../data/gallery";
import styles from "./Gallery.module.css";

const ALL = "All";

export default function Gallery() {
  const categories = useMemo(() => {
    const set = new Set(gallery.map((item) => item.category));
    return [ALL, ...Array.from(set)];
  }, []);

  const [activeCategory, setActiveCategory] = useState(ALL);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === ALL) return gallery;
    return gallery.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (item) => {
    const idx = filtered.findIndex((g) => g.id === item.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );

  const activeItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Gallery</span>
          <h2 className={styles.heading}>Renders &amp; Studies</h2>

          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterBtn} ${
                  activeCategory === cat ? styles.filterActive : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className={styles.masonry}>
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.figure
                layout
                key={item.id}
                className={styles.item}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
                onClick={() => openLightbox(item)}
              >
                <img src={item.src} alt={item.caption} loading="lazy" />
                <span className={styles.zoomIcon}>
                  <TbZoomIn />
                </span>
                <figcaption className={styles.caption}>
                  <span className={styles.captionCategory}>
                    {item.category}
                  </span>
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightbox}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeLightbox}
                aria-label="Close image"
              >
                <TbX />
              </button>

              <div className={styles.lightboxImageWrap}>
                <img src={activeItem.src} alt={activeItem.caption} />

                {filtered.length > 1 && (
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

              <div className={styles.lightboxBody}>
                <span className={styles.captionCategory}>
                  {activeItem.category}
                </span>
                <h3 className={styles.lightboxTitle}>{activeItem.caption}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
