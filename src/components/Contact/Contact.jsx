import { useState } from "react";
import { motion } from "framer-motion";
import {
  TbPhone,
  TbMail,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandBehance,
  TbSend,
  TbBrandFacebook,
} from "react-icons/tb";
import styles from "./Contact.module.css";

const SOCIALS = [
  { id: "linkedin", label: "LinkedIn", icon: TbBrandLinkedin, href: "#" },
  { id: "instagram", label: "Instagram", icon: TbBrandInstagram, href: "#" },
  { id: "facebook", label: "Facebook", icon: TbBrandFacebook, href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">Contact</span>
            <h2 className={styles.heading}>Let's Design Together</h2>
            <p className={styles.lede}>
              Open to internships, collaborations, and new architectural
              opportunities. Reach out directly, or use the form.
            </p>

            <ul className={styles.contactList}>
              <li>
                <TbPhone />
                <a href="tel:+251943654907">0943654907</a>
              </li>
              <li>
                <TbMail />
                <a href="mailto:davemebrahtom21@gmail.com">
                  davemebrahtom21@gmail.com
                </a>
              </li>
            </ul>

            <div className={styles.socials}>
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.label}
                    className={styles.socialBtn}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            {/* <div className={styles.mapPlaceholder}>
              <iframe
                title="Location map"
                src="https://maps.google.com/maps?q=Adigrat,Ethiopia&z=10&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div> */}
            <div className={styles.mapPlaceholder}>
              <iframe
                title="Location map"
                src="https://maps.google.com/maps?q=Mekelle,Ethiopia&z=12&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <label className={styles.field}>
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </label>

            <label className={styles.field}>
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
              />
            </label>

            <label className={styles.field}>
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              />
            </label>

            <motion.button
              type="submit"
              className={styles.submit}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {sent ? "Message Sent" : "Send Message"} <TbSend />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
