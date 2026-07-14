import { motion } from "framer-motion";
import { TbSun, TbMoon } from "react-icons/tb";
import { useTheme } from "./ThemeContext";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <motion.span
        className={styles.thumb}
        animate={{ x: isDark ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {isDark ? <TbMoon /> : <TbSun />}
      </motion.span>
    </button>
  );
}
