import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";
import { createRipple } from "../utils/ripple";
import "../styles/Contact.css";

const bootLines = [
  "> connect vanshika",
  "Email located.",
  "GitHub found.",
  "LinkedIn found.",
  "Waiting for your message...",
];

export default function Contact() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (visibleLines >= bootLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 450);
    return () => clearTimeout(t);
  }, [visibleLines]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageWrapper>
      <section className="section contact-section">
        <div className="container contact-grid">
          <motion.div
            className="terminal-window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-topbar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="terminal-title">vanshika@portfolio: ~/contact</span>
            </div>
            <div className="terminal-body">
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  className="terminal-out-line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {line}
                </motion.div>
              ))}
              {visibleLines >= bootLines.length && (
                <div className="terminal-links">
                  <a href="mailto:vanshikasingla013@gmail.com">→ vanshikasingla013@gmail.com</a>
                  <a href="https://github.com/vanshika0013/" target="_blank" rel="noreferrer">
                    → github.com/vanshika
                  </a>
                  <a href="https://www.linkedin.com/in/vanshika-singla-b95191322" target="_blank" rel="noreferrer">
                    → linkedin.com/in/vanshika
                  </a>
                </div>
              )}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {!sent ? (
              <>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button type="submit" className="btn btn-primary" onMouseDown={createRipple}>
                  Send Message <FaPaperPlane />
                </button>
              </>
            ) : (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-check">✔</div>
                <h3>Message sent.</h3>
                <p>Thanks for reaching out — I'll get back to you soon.</p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>
    </PageWrapper>
  );
}
