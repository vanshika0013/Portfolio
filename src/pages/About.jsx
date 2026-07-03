import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import TimelineItem from "../components/TimelineItem";
import { timeline } from "../data/timeline";
import "../styles/About.css";

export default function About() {
  return (
    <PageWrapper>
      <section className="section about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">my journey</div>
            <h2 className="section-title">
              From <span className="gradient-text">first tag</span> to full stack.
            </h2>
            <p className="section-subtitle">
              Every skill on this page was earned by building something real,
              breaking it, and fixing it again. Here's the timeline.
            </p>
          </motion.div>

          <div className="timeline-wrap">
            {timeline.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} isLast={i === timeline.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
