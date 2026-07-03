import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-image-wrap">
        <img src={project.image} alt={project.name} className="project-image" onError={(e) => { e.target.style.display = "none"; }} />
        <div className="project-image-placeholder">
          <span>{project.name} — Screenshot</span>
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>

        <div className="project-tech-row">
          {project.techStack.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>

        <div className="project-section">
          <h4>Overview</h4>
          <p>{project.overview}</p>
        </div>

        <div className="project-grid">
          <div className="project-section">
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div className="project-section">
            <h4>Solution</h4>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="project-section">
          <h4>Features</h4>
          <ul className="project-list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="project-grid">
          <div className="project-section">
            <h4>Challenges</h4>
            <p>{project.challenges}</p>
          </div>
          <div className="project-section">
            <h4>What I Learned</h4>
            <p>{project.learned}</p>
          </div>
        </div>

        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <FaGithub /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
