import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Loader.css";

const bootLines = [
  { text: "> Initializing Portfolio...", delay: 30 },
  { text: "> Loading Components...", delay: 25 },
];

const checklist = ["UI", "Animations", "Projects", "Experience", "Contact"];

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState("boot"); // boot -> checklist -> ready -> workspace -> zoom -> done
  const [typedLines, setTypedLines] = useState(["", ""]);
  const [progress, setProgress] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  // Typewriter for boot lines
  useEffect(() => {
    if (phase !== "boot") return;
    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    function typeNext() {
      if (cancelled || lineIndex >= bootLines.length) {
        setTimeout(() => setPhase("progress"), 200);
        return;
      }
      const current = bootLines[lineIndex];
      if (charIndex <= current.text.length) {
        setTypedLines((prev) => {
          const copy = [...prev];
          copy[lineIndex] = current.text.slice(0, charIndex);
          return copy;
        });
        charIndex++;
        setTimeout(typeNext, current.delay);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, 150);
      }
    }
    typeNext();
    return () => {
      cancelled = true;
    };
  }, [phase]);

  // Progress bar
  useEffect(() => {
    if (phase !== "progress") return;
    let val = 0;
    const interval = setInterval(() => {
      val += Math.random() * 18 + 6;
      if (val >= 100) {
        val = 100;
        clearInterval(interval);
        setTimeout(() => setPhase("checklist"), 250);
      }
      setProgress(Math.floor(val));
    }, 120);
    return () => clearInterval(interval);
  }, [phase]);

  // Checklist ticking off
  useEffect(() => {
    if (phase !== "checklist") return;
    let i = 0;
    const interval = setInterval(() => {
      setCheckedItems((prev) => [...prev, checklist[i]]);
      i++;
      if (i >= checklist.length) {
        clearInterval(interval);
        setTimeout(() => setPhase("ready"), 300);
      }
    }, 180);
    return () => clearInterval(interval);
  }, [phase]);

  // Ready -> pause -> workspace fade in
  useEffect(() => {
    if (phase !== "ready") return;
    const t = setTimeout(() => setPhase("workspace"), 700);
    return () => clearTimeout(t);
  }, [phase]);

  // Workspace visible -> zoom toward monitor -> done
  useEffect(() => {
    if (phase !== "workspace") return;
    const t = setTimeout(() => setPhase("zoom"), 1000);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "zoom") return;
    const t = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 900);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div className="loader-root">
      <AnimatePresence mode="wait">
        {(phase === "boot" || phase === "progress" || phase === "checklist" || phase === "ready") && (
          <motion.div
            key="terminal"
            className="loader-terminal"
            exit={{ opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader-line">
              {typedLines[0]}
              {phase === "boot" && typedLines[1] === "" && <span className="cursor" />}
            </div>
            {typedLines[1] && (
              <div className="loader-line">
                {typedLines[1]}
                {phase === "boot" && <span className="cursor" />}
              </div>
            )}

            {(phase === "progress" || phase === "checklist" || phase === "ready") && (
              <div className="loader-progress-wrap">
                <div className="loader-progress-bar">
                  <motion.div
                    className="loader-progress-fill"
                    animate={{ width: `${phase === "progress" ? progress : 100}%` }}
                    transition={{ duration: 0.15 }}
                  />
                </div>
                <span className="loader-progress-pct">
                  {phase === "progress" ? progress : 100}%
                </span>
              </div>
            )}

            {(phase === "checklist" || phase === "ready") && (
              <div className="loader-checklist">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className={`loader-check-item ${checkedItems.includes(item) ? "checked" : ""}`}
                  >
                    <span className="check-mark">{checkedItems.includes(item) ? "✔" : "○"}</span>
                    {item}
                  </div>
                ))}
              </div>
            )}

            {phase === "ready" && (
              <motion.div
                className="loader-line ready-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                &gt; System Ready.
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(phase === "workspace" || phase === "zoom") && (
          <motion.div
            className="loader-workspace"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: phase === "zoom" ? 6 : 1,
            }}
            transition={{
              opacity: { duration: 0.9 },
              scale: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
            }}
          >
            <div className="ws-monitor">
              <motion.div
                className="ws-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="ws-screen-glow" />
              </motion.div>
              <div className="ws-stand" />
              <div className="ws-base" />
            </div>
            <div className="ws-keyboard" />
            <div className="ws-mug" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
