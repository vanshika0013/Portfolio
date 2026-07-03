import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <PageWrapper>
      <section className="section projects-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">selected work</div>
            <h2 className="section-title">
              Projects I've <span className="gradient-text">shipped.</span>
            </h2>
            <p className="section-subtitle">
              Not just what I built — the problems, the decisions, and what
              broke along the way.
            </p>
          </motion.div>

          <div className="projects-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
