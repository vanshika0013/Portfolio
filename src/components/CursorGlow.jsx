import { useMousePosition } from "../hooks/useMousePosition";
import "../styles/CursorGlow.css";

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="cursor-glow"
      style={{
        transform: `translate3d(${x - 200}px, ${y - 200}px, 0)`,
      }}
    />
  );
}
