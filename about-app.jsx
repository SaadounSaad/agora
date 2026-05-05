// About page
function About() {
  const stack = [
    { name: 'Next.js 16', role: 'إطار العمل' },
    { name: 'Tailwind CSS v4', role: 'التنسيق' },
    { name: 'shadcn/ui', role: 'المكوّنات' },
    { name: 'TypeScript', role: 'اللغة' },
    { name: 'Postgres + Drizzle', role: 'قاعدة البيانات' },
    { name: 'tRPC', role: 'واجهة برمجية' },
    { name: 'Vercel', role: 'الاستضافة' },
    { name: 'Lucide Icons', role: 'الأيقونات' },
    { name: 'MDX', role: 'المحتوى' },
    { name: 'Plus Jakarta Sans', role: 'الخط غير المزخرف' },
    { name: 'Amiri', role: 'الخط المزخرف' },
    { name: 'Figma', role: 'التصميم' },
  ];

  const contacts = [
    {
      name: 'GitHub',
      handle: '@agora-hub',
      cta: 'استعرض الكود',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.06c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      handle: 'salam@agora.app',
      cta: 'راسلنا',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="M3 7l9 6 9-6"/>
        </svg>
      ),
    },
    {
      name: 'المجلة',
      handle: 'agora.app/journal',
      cta: 'اقرأ الملاحظات',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4z"/>
          <path d="M8 8h8M8 12h8M8 16h5"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="about-hero">
        <div className="about-hero-motif rosette"
             dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.rosette12 }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="about-hero-grid">
            <div>
              <div className="about-eyebrow">حول · المؤلف</div>
              <h1 className="about-h1">
                بناء بـ<em>صبر</em>، نشر بتقشف.
              </h1>
              <p className="about-lede">
                أنا مطور ومتعلم في العلوم الإسلامية.
                أجورا يجمع الأدوات التي أبنيها لدراستي —
                ولمن تهمه هذه الموضوعات.
              </p>
            </div>
            <div className="portrait">
              <div className="portrait-motif rosette"
                   dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.rosette16 }} />
              <span className="portrait-glyph">ا</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container about-section reveal">
        <div className="bio-grid">
          <h3>§ 01 — السيرة</h3>
          <div className="bio-prose">
            <div className="bio-row">
              <p>
                عملي يقع عند تقاطع ثلاثة مجالات:
                البرمجة، والبحث في الفقه، والكتابة عن الحياة الداخلية.
                لا يقوم أحدها دون الآخرين.
              </p>
              <p>
                أؤمن أن الأدوات التي نستخدمها تُشكّل انتباهنا.
                لهذا أبني أدواتي — بسيطة، محترمة للوقت،
                خالية من الإعلانات والتتبع.
              </p>
            </div>
            <div className="bio-row">
              <p style={{ color: 'var(--ink-2)' }}>
                قبل أجورا، عملت في وكالة ثم في شركة ناشئة.
                اليوم أكرّس معظم وقتي لمشاريعي الشخصية
                والتعليم، بالعربية والفرنسية.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container about-section reveal">
        <div className="bio-grid">
          <h3>§ 02 — التقنية</h3>
          <div>
            <p style={{ marginBottom: 32, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              منظومة تقنية ضيقة عن قصد: نفس الأدوات
              في كل المشاريع، للتعمق بدل التعلم المستمر.
            </p>
            <div className="stack-list">
              {stack.map((s) => (
                <div key={s.name} className="stack-item">
                  <span className="stack-name">{s.name}</span>
                  <span className="stack-role">{s.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container about-section reveal">
        <div className="bio-grid">
          <h3>§ 03 — التواصل</h3>
          <div>
            <p style={{ marginBottom: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              لطرح سؤال، أو الإشارة إلى خطأ، أو اقتراح
              تعاون — أو ببساطة للتعارف.
            </p>
            <div className="contact-grid">
              {contacts.map((c) => (
                <a key={c.name} href="#" className="contact-card">
                  <div className="contact-icon">{c.icon}</div>
                  <div className="contact-card-name">{c.name}</div>
                  <div className="contact-card-handle">{c.handle}</div>
                  <span className="contact-card-cta">
                    {c.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={{transform:'scaleX(-1)'}}>
                      <path d="M3 7h8M7 3l4 4-4 4"/>
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
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
      <Header active="about" theme={theme} setTheme={setTheme} />
      <main><About /></main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
