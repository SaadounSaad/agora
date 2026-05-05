// Shared components for Agora Hub.
// Loaded after React, motifs.js, and projects-data.js.

const { useState, useEffect, useRef } = React;

// ---------- Theme ----------
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('agora-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('agora-theme', theme);
  }, [theme]);
  return [theme, setTheme];
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      aria-label="تغيير المظهر"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
      </svg>
      <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
      </svg>
    </button>
  );
}

// ---------- Header ----------
function Header({ active, theme, setTheme }) {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="Agora Hub.html" className="brand" aria-label="أجورا — الرئيسية">
          <span className="mark" dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.logoMark }} />
          <span>Agora</span>
          <small>hub</small>
        </a>
        <nav className="nav-links" aria-label="التنقل الرئيسي">
          <a href="Agora Hub.html" className={active === 'home' ? 'active' : ''}>الرئيسية</a>
          <a href="Agora Hub.html#projets" className={active === 'projets' ? 'active' : ''}>المشاريع</a>
          <a href="a-propos.html" className={active === 'about' ? 'active' : ''}>حول</a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="motif-bg"
        style={{ opacity: 0.04 }}
        dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.tessellation }}
      />
      <div className="container" style={{ position: 'relative' }}>
        <div className="footer-grid">
          <div>
            <p className="colophon">
              ورشة رقمية حول الفقه والتفسير والتربية.
              فُكِّر فيها وكُتبت وبُرمجت بصبر.
            </p>
            <p className="footer-bismillah" style={{ marginTop: 24 }}>﷽</p>
          </div>
          <div>
            <h4>Hub</h4>
            <ul>
              <li><a href="Agora Hub.html">الرئيسية</a></li>
              <li><a href="Agora Hub.html#projets">المشاريع</a></li>
              <li><a href="a-propos.html">حول</a></li>
              <li><a href="#">المجلة</a></li>
            </ul>
          </div>
          <div>
            <h4>أبرز المشاريع</h4>
            <ul>
              <li><a href="projet.html">FiqhNafs</a></li>
              <li><a href="#">Tafsīr</a></li>
              <li><a href="#">Mawāqīt</a></li>
              <li><a href="#">Sīrah</a></li>
            </ul>
          </div>
          <div>
            <h4>التواصل</h4>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Email</a></li>
              <li><a href="#">RSS</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024–2026 Agora Hub. صُمِّم في باريس.</span>
          <span>بُني بـ Next.js، نُشر على Vercel.</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- Project Card ----------
function ProjectCard({ project, index, variant = 'default' }) {
  if (variant === 'index') {
    // Magazine-style index row
    return (
      <a
        href={project.slug === 'fiqhnafs' ? 'projet.html' : '#'}
        className={`idx-row idx-row--${project.accent}`}
      >
        <span className="idx-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="idx-glyph">{project.glyph}</span>
        <span className="idx-body">
          <span className="idx-name">{project.name}</span>
          <span className="idx-tag">{project.tagline}</span>
        </span>
        <span className="idx-tags">
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </span>
        <span className="idx-year">{project.year}</span>
        <span className="idx-arrow" aria-hidden="true">→</span>
      </a>
    );
  }

  if (variant === 'orbit') {
    return (
      <a
        href={project.slug === 'fiqhnafs' ? 'projet.html' : '#'}
        className={`orb-card orb-card--${project.accent}`}
      >
        <span className="orb-glyph">{project.glyph}</span>
        <span className="orb-name">{project.name}</span>
        <span className="orb-tag">{project.tagline}</span>
      </a>
    );
  }

  // default card
  return (
    <a
      href={project.slug === 'fiqhnafs' ? 'projet.html' : '#'}
      className={`pcard pcard--${project.accent}`}
    >
      <div className="pcard-head">
        <span className="pcard-glyph" aria-hidden="true">{project.glyph}</span>
        <span className="pcard-status">
          <span className="pcard-dot" />
          {project.status}
        </span>
      </div>
      <div className="pcard-body">
        <h3 className="pcard-name">{project.name}</h3>
        <p className="pcard-tag">{project.tagline}</p>
      </div>
      <div className="pcard-foot">
        <div className="pcard-tags">
          {project.tags.slice(0, 2).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <span className="pcard-cta">
          اكتشف
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={{transform:'scaleX(-1)'}}>
            <path d="M3 7h8M7 3l4 4-4 4"/>
          </svg>
        </span>
      </div>
      <div className="pcard-corner" aria-hidden="true">
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M0 0 L60 0 L60 60 Z" fill="currentColor" opacity="0.04" stroke="none"/>
          <path d="M30 0 L60 30 M40 0 L60 20 M50 0 L60 10"/>
        </svg>
      </div>
    </a>
  );
}

// ---------- Reveal on scroll ----------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ---------- Section divider ----------
function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true"
         dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.divider }} />
  );
}

Object.assign(window, {
  useTheme, ThemeToggle, Header, Footer, ProjectCard, useReveal, SectionDivider,
});
