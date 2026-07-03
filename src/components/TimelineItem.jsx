import { motion } from "framer-motion";
import "../styles/TimelineItem.css";

export default function TimelineItem({ item, index, isLast }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`timeline-item ${isLeft ? "left" : "right"}`}>
      <motion.div
        className="timeline-content"
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="timeline-year">{item.year}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-desc">{item.desc}</p>
      </motion.div>

      <div className="timeline-marker-wrap">
        <motion.div
          className="timeline-marker"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        />
        {!isLast && <div className="timeline-connector" />}
      </div>

      <div className="timeline-spacer" />
    </div>
  );
}
