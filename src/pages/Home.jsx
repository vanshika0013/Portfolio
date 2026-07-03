import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import DeskIllustration from "../components/DeskIllustration";
import PageWrapper from "../components/PageWrapper";
import { createRipple } from "../utils/ripple";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <PageWrapper>
      <section className="hero section">
        <div className="container hero-grid">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag">available for opportunities</div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Vanshika.</span>
            </h1>
            <h2 className="hero-role">Frontend Developer</h2>
            <p className="hero-desc">
              Creating interfaces people genuinely enjoy using — with clean code,
              thoughtful motion, and an obsession for the small details.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary" onMouseDown={createRipple}>
                View Projects <FaArrowRight />
              </Link>
              <a href="/Resume.pdf" className="btn btn-ghost" onMouseDown={createRipple} download>
                Download Resume <FaDownload />
              </a>
            </div>

            <div className="hero-meta">
              <div className="meta-item">
                <span className="meta-num">2+</span>
                <span className="meta-label">Years Learning</span>
              </div>
              <div className="meta-item">
                <span className="meta-num">1</span>
                <span className="meta-label">Flagship Project</span>
              </div>
              <div className="meta-item">
                <span className="meta-num">10+</span>
                <span className="meta-label">Tools &amp; Tech</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <DeskIllustration />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
