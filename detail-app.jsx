// Project detail page
const { useEffect } = React;

function ProjectDetail() {
  const d = window.AgoraProjectDetail;
  const others = window.AgoraProjects.filter(p => p.slug !== d.slug).slice(0, 3);

  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-motif rosette"
             dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.rosette12 }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="crumbs">
            <a href="Agora Hub.html">أجورا</a>
            <span className="sep">/</span>
            <a href="Agora Hub.html#projets">المشاريع</a>
            <span className="sep">/</span>
            <span style={{ color: 'var(--ink-2)' }}>{d.name}</span>
          </div>
          <div className="detail-grid">
            <div>
              <div className="detail-arabic">{d.arabic}</div>
              <h1 className="detail-name">{d.name}</h1>
              <p className="detail-tagline">{d.tagline}</p>
              <p className="detail-hero-text">{d.hero}</p>
              <div className="detail-actions">
                <a href={d.url} className="btn btn-primary">
                  زيارة المشروع
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M3 11L11 3M5 3h6v6"/>
                  </svg>
                </a>
                <a href={d.github} className="btn btn-ghost">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.06c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <div className="detail-meta">
                <div className="detail-meta-row">
                  <span className="k">السنة</span>
                  <span className="v">{d.year}</span>
                </div>
                <div className="detail-meta-row">
                  <span className="k">الحالة</span>
                  <span className="v">{d.status}</span>
                </div>
                <div className="detail-meta-row">
                  <span className="k">الدور</span>
                  <span className="v" style={{ fontSize: 16, fontFamily: 'var(--sans)' }}>{d.role}</span>
                </div>
                <div className="detail-meta-row">
                  <span className="k">المجال</span>
                  <span className="v">فقه · تربية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section container reveal">
        <div className="detail-section-head">
          <span className="num">§ 01</span>
          <h2>لقطات</h2>
        </div>
        <div className="screens">
          <div className="screen">
            <span className="screen-label">الدليل · فصل</span>
            <div className="screen-fake">
              <div className="bar short"></div>
              <div className="bar long"></div>
              <div className="bar med"></div>
              <div className="bar long"></div>
              <div className="bar med"></div>
              <div className="arabic-mock">قَالَ النَّبِيُّ ﷺ ...</div>
              <div className="bar long" style={{ marginTop: 8 }}></div>
              <div className="bar med"></div>
            </div>
          </div>
          <div className="screen tall">
            <span className="screen-label">المفكرة · مساءً</span>
            <div className="screen-fake" style={{ height: '85%' }}>
              <div className="bar short"></div>
              <div className="bar med"></div>
              <div className="bar long"></div>
              <div className="bar long"></div>
              <div style={{ height: 1, background: 'var(--line)', margin: '8px 0' }}></div>
              <div className="bar short" style={{ background: 'var(--gold)', opacity: 0.6 }}></div>
              <div className="bar long"></div>
              <div className="bar med"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section container reveal">
        <div className="detail-section-head">
          <span className="num">§ 02</span>
          <h2>الميزات</h2>
        </div>
        <div className="feature-grid">
          {d.features.map((f, i) => (
            <div key={f.title} className="feature">
              <div className="feature-num">— {String(i + 1).padStart(2, '0')}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-section container reveal">
        <div className="detail-section-head">
          <span className="num">§ 03</span>
          <h2>المنظومة التقنية</h2>
        </div>
        <div className="stack-grid">
          {d.stack.map((s) => (
            <span key={s} className="tag gold">{s}</span>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="container reveal" style={{ marginTop: 0 }}>
        <div className="detail-section-head">
          <span className="num">§ 04</span>
          <h2>مشاريع أخرى</h2>
        </div>
        <div className="other-projects">
          {others.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  const [theme, setTheme] = useTheme();
  useReveal();
  return (
    <>
      <Header active="projets" theme={theme} setTheme={setTheme} />
      <main><ProjectDetail /></main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
