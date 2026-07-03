import { motion } from "framer-motion";
import { FaCheckCircle, FaCertificate } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";
import { experience } from "../data/experience";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <PageWrapper>
      <section className="section experience-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">experience</div>
            <h2 className="section-title">
              Where I've <span className="gradient-text">applied it.</span>
            </h2>
            <p className="section-subtitle">
              Real teams, real deadlines, real code review comments.
            </p>
          </motion.div>

          <div className="exp-list">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                className="exp-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="exp-marker" />
                <div className="exp-content">
                  <div className="exp-header">
                    <div>
                      <h3>{exp.role}</h3>
                      <span className="exp-company">{exp.company}</span>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>

                  <div className="exp-columns">
                    <div>
                      <h4>Responsibilities</h4>
                      <ul>
                        {exp.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Achievements</h4>
                      <ul className="achievements">
                        {exp.achievements.map((a) => (
                          <li key={a}>
                            <FaCheckCircle className="check-icon" /> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="exp-certs">
                    {exp.certificates.map((c) => (
                      <span key={c} className="cert-pill">
                        <FaCertificate /> {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
