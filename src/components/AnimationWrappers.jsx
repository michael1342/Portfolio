import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/** Fades and slides up. Use `custom` prop for delay in seconds. */
export function FadeUp({ children, delay = 0, className = "", ...props }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Staggers children with FadeUp */
export function StaggerList({ children, className = "", ...props }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Child item inside StaggerList */
export function StaggerItem({ children, className = "", ...props }) {
  return (
    <motion.div variants={fadeUp} className={className} {...props}>
      {children}
    </motion.div>
  );
}
