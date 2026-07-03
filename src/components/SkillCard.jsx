import { motion } from "framer-motion";
import "../styles/SkillCard.css";

export default function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="skill-card-glow" style={{ background: skill.color }} />
      <Icon className="skill-icon" style={{ color: skill.color }} />
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
}
