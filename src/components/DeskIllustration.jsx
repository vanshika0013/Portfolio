import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";
import "../styles/DeskIllustration.css";

export default function DeskIllustration() {
  const { x, y } = useMousePosition();

  const parallax = (strength) => {
    if (typeof window === "undefined") return {};
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    return {
      transform: `translate(${dx * strength}px, ${dy * strength}px)`,
    };
  };

  return (
    <div className="desk-scene">
      <div className="desk-window" style={parallax(4)}>
        <div className="window-frame">
          <div className="window-pane" />
          <div className="window-pane" />
          <div className="window-pane" />
          <div className="window-pane" />
        </div>
        <div className="window-glow" />
      </div>

      <motion.div
        className="desk-plant"
        style={parallax(10)}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="plant-pot" />
        <div className="plant-leaf leaf-1" />
        <div className="plant-leaf leaf-2" />
        <div className="plant-leaf leaf-3" />
      </motion.div>

      <motion.div
        className="desk-lamp"
        style={parallax(6)}
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="lamp-arm" />
        <div className="lamp-head">
          <div className="lamp-light" />
        </div>
        <div className="lamp-base" />
      </motion.div>

      <div className="desk-surface" style={parallax(3)}>
        <motion.div
          className="desk-monitor"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="monitor-screen">
            <div className="screen-topbar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="screen-code">
              <div className="code-line" style={{ width: "70%" }} />
              <div className="code-line accent" style={{ width: "45%" }} />
              <div className="code-line" style={{ width: "85%" }} />
              <div className="code-line" style={{ width: "55%" }} />
              <div className="code-line accent2" style={{ width: "35%" }} />
              <div className="code-line" style={{ width: "65%" }} />
            </div>
            <div className="screen-glow" />
          </div>
          <div className="monitor-stand" />
          <div className="monitor-base" />
        </motion.div>

        <motion.div
          className="desk-mug"
          style={parallax(8)}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="mug-steam s1" />
          <div className="mug-steam s2" />
          <div className="mug-body" />
          <div className="mug-handle" />
        </motion.div>

        <motion.div className="desk-notebook" style={parallax(5)}>
          <div className="notebook-cover" />
          <div className="notebook-line" />
          <div className="notebook-line" />
        </motion.div>

        <div className="desk-keyboard" style={parallax(6)}>
          <div className="keyboard-body">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="key" />
            ))}
          </div>
        </div>

        <motion.div
          className="desk-mouse"
          style={parallax(7)}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="desk-shadow" />
    </div>
  );
}
