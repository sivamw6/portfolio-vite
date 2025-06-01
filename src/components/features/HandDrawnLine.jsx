import { handDrawnLineSvg } from './HandDrawnLine.css';

/**
 * HandDrawnLine renders a hand-drawn style SVG line for decorative purposes.
 */
function HandDrawnLine() {
  return (
    <svg width="250" height="20" viewBox="0 0 200 20" className={handDrawnLineSvg}>
      <path
        d="M5 15 Q 50 5, 100 15 T 195 15"
        stroke="var(--primary-color, defaultColor)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
export default HandDrawnLine;
