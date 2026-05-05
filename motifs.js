// Reusable SVG motif strings for Agora Hub.
// All use currentColor so they tint with text color.

window.AgoraMotifs = {
  // 8-pointed star (khatim) — classic Islamic geometry primitive
  star8: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="0.8">
      <path d="M50 5 L61 39 L95 39 L67 60 L78 95 L50 74 L22 95 L33 60 L5 39 L39 39 Z"/>
      <path d="M50 14 L58 41 L86 41 L64 58 L72 84 L50 68 L28 84 L36 58 L14 41 L42 41 Z"/>
    </svg>`,

  // 12-fold rosette — central element with petals
  rosette12: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="0.6">
      <g transform="translate(100 100)">
        <circle r="92"/>
        <circle r="74"/>
        <circle r="48"/>
        <circle r="22"/>
        ${Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30) * Math.PI / 180;
          const x1 = Math.cos(a) * 22, y1 = Math.sin(a) * 22;
          const x2 = Math.cos(a) * 92, y2 = Math.sin(a) * 92;
          return `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
        }).join('')}
        ${Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30 + 15) * Math.PI / 180;
          const x = Math.cos(a) * 60, y = Math.sin(a) * 60;
          return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="14"/>`;
        }).join('')}
        ${Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30) * Math.PI / 180;
          const x1 = Math.cos(a) * 48, y1 = Math.sin(a) * 48;
          const x2 = Math.cos(a) * 74, y2 = Math.sin(a) * 74;
          return `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke-width="1.1"/>`;
        }).join('')}
      </g>
    </svg>`,

  // 16-fold rosette — denser, used as background filigree
  rosette16: `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="0.5">
      <g transform="translate(100 100)">
        <circle r="96"/>
        <circle r="80"/>
        <circle r="62"/>
        <circle r="40"/>
        <circle r="20"/>
        ${Array.from({ length: 16 }, (_, i) => {
          const a = (i * 22.5) * Math.PI / 180;
          const x1 = Math.cos(a) * 20, y1 = Math.sin(a) * 20;
          const x2 = Math.cos(a) * 96, y2 = Math.sin(a) * 96;
          return `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
        }).join('')}
        ${Array.from({ length: 16 }, (_, i) => {
          const a = (i * 22.5 + 11.25) * Math.PI / 180;
          const x = Math.cos(a) * 70, y = Math.sin(a) * 70;
          return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="11"/>`;
        }).join('')}
        ${Array.from({ length: 8 }, (_, i) => {
          const a = (i * 45) * Math.PI / 180;
          const x = Math.cos(a) * 40, y = Math.sin(a) * 40;
          return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="8" stroke-width="0.8"/>`;
        }).join('')}
      </g>
    </svg>`,

  // Tessellated background pattern (subtle)
  tessellation: `
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="0.5">
      <defs>
        <pattern id="islTess" width="80" height="80" patternUnits="userSpaceOnUse">
          <g transform="translate(40 40)">
            <path d="M0 -36 L20 -20 L36 0 L20 20 L0 36 L-20 20 L-36 0 L-20 -20 Z"/>
            <path d="M0 -22 L12 -12 L22 0 L12 12 L0 22 L-12 12 L-22 0 L-12 -12 Z"/>
            <line x1="0" y1="-36" x2="0" y2="-22"/>
            <line x1="0" y1="36" x2="0" y2="22"/>
            <line x1="-36" y1="0" x2="-22" y2="0"/>
            <line x1="36" y1="0" x2="22" y2="0"/>
            <line x1="-25" y1="-25" x2="-15" y2="-15"/>
            <line x1="25" y1="-25" x2="15" y2="-15"/>
            <line x1="-25" y1="25" x2="-15" y2="15"/>
            <line x1="25" y1="25" x2="15" y2="15"/>
          </g>
        </pattern>
      </defs>
      <rect width="240" height="240" fill="url(#islTess)"/>
    </svg>`,

  // Decorative section divider — three diamonds
  divider: `
    <svg viewBox="0 0 240 12" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="0.8">
      <line x1="0" y1="6" x2="100" y2="6"/>
      <line x1="140" y1="6" x2="240" y2="6"/>
      <path d="M110 6 L120 1 L130 6 L120 11 Z" fill="currentColor" stroke="none"/>
      <circle cx="105" cy="6" r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="135" cy="6" r="1.5" fill="currentColor" stroke="none"/>
    </svg>`,

  // Logo mark — interlocking square (rub el hizb-inspired) + circle
  logoMark: `
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round">
      <rect x="6" y="6" width="20" height="20" transform="rotate(0 16 16)"/>
      <rect x="6" y="6" width="20" height="20" transform="rotate(45 16 16)"/>
      <circle cx="16" cy="16" r="3" fill="currentColor" stroke="none"/>
    </svg>`,
};
