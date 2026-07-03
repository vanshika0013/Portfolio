import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import SkillCard from "../components/SkillCard";
import { skills, learning } from "../data/skills";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <PageWrapper>
      <section className="section skills-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">toolkit</div>
            <h2 className="section-title">
              Things I <span className="gradient-text">build with.</span>
            </h2>
            <p className="section-subtitle">
              A snapshot of the languages, tools, and frameworks I reach for —
              and what I'm actively picking up next.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          <div className="learning-header">
            <span className="learning-dot" />
            Currently Learning
          </div>

          <div className="skills-grid learning-grid">
            {learning.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
