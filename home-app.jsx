// Homepage — 3 variations toggleable via tweaks panel + URL hash.
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "variation": "C",
  "motifIntensity": 100,
  "showVariationSwitcher": false,
  "accentColor": "#0D6B4E",
  "goldAccent": "#C8A84E"
}/*EDITMODE-END*/;

function VariationSwitcher({ value, onChange }) {
  const opts = [
    { v: 'A', label: 'سكينة' },
    { v: 'B', label: 'مكتبة' },
    { v: 'C', label: 'محراب' },
  ];
  return (
    <div className="var-switch" data-noncommentable="">
      <span className="var-switch-label">التنويع</span>
      {opts.map((o) => (
        <button key={o.v} className={value === o.v ? 'on' : ''} onClick={() => onChange(o.v)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

// =============================================================
// Variation A — سكينة (classic editorial grid)
// =============================================================
function VariationA() {
  return (
    <div className="varA">
      <section className="hero">
        <div className="hero-motif rosette-counter"
             dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.rosette16 }} />
        <div className="container">
          <div className="hero-content">
            <div className="eyebrow">ورشة رقمية · منذ 2023</div>
            <h1>
              مركز لمشاريع بُنيت <em>بصبر</em>.
            </h1>
            <p className="hero-sub">
              أجورا يجمع أعمالي حول الفقه والتفسير والتربية الإسلامية —
              كل مشروع قائم بذاته، تربطها جميعاً نية واحدة.
            </p>
            <div className="hero-cta">
              <a href="#projets" className="btn btn-primary">استعرض المشاريع</a>
              <a href="a-propos.html" className="btn btn-ghost">عن المؤلف</a>
            </div>
            <div className="hero-meta">
              <div>
                <span className="k">المشاريع النشطة</span>
                <span className="v">{window.AgoraProjects.length}</span>
              </div>
              <div>
                <span className="k">المجالات</span>
                <span className="v">فقه · تفسير · سيرة</span>
              </div>
              <div>
                <span className="k">قيد الإعداد</span>
                <span className="v">3 جديدة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projets" className="container reveal" style={{ paddingTop: 80 }}>
        <div className="section-head">
          <div>
            <div className="section-counter">§ 01 — المشاريع</div>
            <h2 style={{ marginTop: 12 }}>
              كل أداة <em>تسد فراغاً</em>.
            </h2>
          </div>
          <p className="lede">
            أبني هذه المواقع لاستخدامي أولاً. إن نفعت غيري فذلك خير —
            لكن المنفعة تبدأ من الذات.
          </p>
        </div>
        <div className="pgrid">
          {window.AgoraProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="container reveal">
        <div className="section-head">
          <div>
            <div className="section-counter">§ 02 — المنهج</div>
            <h2 style={{ marginTop: 12 }}>ثلاثة مبادئ <em>بسيطة</em>.</h2>
          </div>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
        }} className="principles">
          {[
            { n: '01', t: 'البساطة أولاً', b: 'لا إشعارات، لا تتبع، لا واجهات زائدة. ما لا مبرر له لا يُسلَّم.' },
            { n: '02', t: 'العربية في مكانها', b: 'النص الأصلي يبقى مقروءاً — منسَّق بعناية، لا مُهمَّش في حاشية.' },
            { n: '03', t: 'البناء على المدى', b: 'كل مشروع مصمَّم ليعيش خمس سنوات لا ليُعرَض مرة. الصيانة جزء من العمل.' },
          ].map((p) => (
            <div key={p.n} style={{
              padding: '32px 0',
              borderTop: '1px solid var(--line)',
            }}>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.16em',
                textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16,
              }}>{p.n}</div>
              <h3 style={{ marginBottom: 12, fontSize: 26 }}>{p.t}</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`@media(max-width:900px){.varA .principles{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

// =============================================================
// Variation B — مكتبة (editorial index)
// =============================================================
function VariationB() {
  return (
    <div className="varB">
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <h1 className="hero-title">
              <span className="lo">مكتبة</span>
              <span className="hi"><span className="accent">حيّة</span> من المشاريع</span>
              <span className="lo">.</span>
            </h1>
            <div className="hero-side">
              <div className="stat">الفهرس — طبعة 2026</div>
              <p>
                أجورا هو فهرس ورشتي الرقمية. كل مدخل يشير إلى موقع
                أو أداة أو مخطوطة قيد الإنجاز.
              </p>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
                paddingTop: 24, borderTop: '1px solid var(--line)',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>الإجمالي</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 32 }}>{window.AgoraProjects.length}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>منشور</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 32 }}>
                    {window.AgoraProjects.filter((p) => p.status === 'منشور').length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projets" className="container" style={{ paddingTop: 64 }}>
        <div className="section-head">
          <div>
            <div className="section-counter">الفهرس — جميع المشاريع</div>
            <h2 style={{ marginTop: 12 }}>الكتالوج.</h2>
          </div>
          <p className="lede">
            مرتَّبة من الأحدث إلى الأقدم. كل سطر مشروع منشور أو قيد الكتابة.
          </p>
        </div>

        <div className="index-head">
          <span>№</span>
          <span>الحرف</span>
          <span>العنوان والغرض</span>
          <span>التقنية</span>
          <span style={{ textAlign: 'left' }}>السنة</span>
          <span></span>
        </div>
        <div className="index-list">
          {window.AgoraProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} variant="index" />
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-motif rosette"
             dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.tessellation }} />
        <div className="container" style={{ position: 'relative' }}>
          <blockquote>
            المعرفة أمانة. هذه المشاريع هي طريقتي في ردّها —
            لا بالإتمام، بل بعدم التوقف عن البدء.
          </blockquote>
          <cite>— ملاحظة النية، 2024</cite>
        </div>
      </section>
    </div>
  );
}

// =============================================================
// Variation C — محراب (rosace centrale animée)
// =============================================================
function VariationC() {
  return (
    <div className="varC">
      <section className="hero-mihrab">
        <div className="mihrab-rosette rosette"
             dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.rosette16 }} />
        <div className="mihrab-rosette--inner rosette-counter"
             dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.rosette12 }} />
        <div className="mihrab-content">
          <div className="mihrab-eyebrow">ورشة · مركز · منذ 2023</div>
          <h1>
            <em>أجورا</em> — محراب<br/>
            لمشاريع تدوم.
          </h1>
          <p className="mihrab-sub">
            مركز يجمع ما أنشره: فقه مكتوب بصبر،
            وتفسير يُقرأ بتأمل، وأدوات صُنعت للخدمة.
          </p>
          <div className="mihrab-cta">
            <a href="#projets" className="btn btn-primary">استكشف المشاريع</a>
            <a href="a-propos.html" className="btn btn-ghost">عن المؤلف</a>
          </div>
        </div>
        <div className="mihrab-scroll">
          <div>للأسفل</div>
          <div className="mihrab-scroll-line"></div>
        </div>
      </section>

      <section id="projets" className="container orbit-section reveal" style={{ paddingTop: 80 }}>
        <div className="section-head">
          <div>
            <div className="section-counter">— المشاريع التسعة</div>
            <h2 style={{ marginTop: 12 }}>حول الوردة.</h2>
          </div>
          <p className="lede">
            كل مشروع مستقل ويسير بإيقاعه الخاص. المركز يجمعها دون أن يُوحِّدها.
          </p>
        </div>
        <div className="orbit-grid">
          {window.AgoraProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} variant="orbit" />
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="container reveal" style={{ marginBottom: 40 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
          padding: '64px 0', alignItems: 'center',
        }} className="dual">
          <div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.16em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16,
            }}>ملاحظة الورشة</div>
            <h2 style={{ marginBottom: 24 }}>
              البناء <em style={{ color: 'var(--accent)' }}>ببطء</em> هو بناء أيضاً.
            </h2>
            <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.65, marginBottom: 16 }}>
              لا شيء من هذه المواقع مصمَّم للتوسع أو للبيع. صُممت للاستخدام —
              لي أولاً، ولغيري إن نفع.
            </p>
            <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.65 }}>
              لهذا تأخذ وقتها. ولهذا يوجد هذا المركز:
              لتقديمها معاً، دون تمييع.
            </p>
          </div>
          <div style={{ position: 'relative', aspectRatio: '1', maxWidth: 380, margin: '0 auto' }}>
            <div className="rosette" style={{ position: 'absolute', inset: 0, color: 'var(--emerald)', opacity: 0.5 }}
                 dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.rosette12 }} />
            <div className="rosette-counter" style={{ position: 'absolute', inset: '15%', color: 'var(--gold-deep)', opacity: 0.7 }}
                 dangerouslySetInnerHTML={{ __html: window.AgoraMotifs.star8 }} />
          </div>
        </div>
      </section>

      <style>{`@media(max-width:900px){.varC .dual{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

// =============================================================
// App shell
// =============================================================
function App() {
  const [theme, setTheme] = useTheme();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(() => {
    document.documentElement.style.setProperty('--motif-opacity-mult', t.motifIntensity / 100);
  }, [t.motifIntensity]);

  const variation = t.variation || 'A';

  return (
    <>
      <Header active="home" theme={theme} setTheme={setTheme} />
      {t.showVariationSwitcher && (
        <VariationSwitcher value={variation} onChange={(v) => setTweak('variation', v)} />
      )}
      <main style={{ '--motif-mult': t.motifIntensity / 100 }}>
        {variation === 'A' && <VariationA />}
        {variation === 'B' && <VariationB />}
        {variation === 'C' && <VariationC />}
      </main>
      <Footer />
      <TweaksPanel title="Tweaks">
        <TweakSection label="التنويع" />
        <TweakRadio
          label="الاتجاه"
          value={variation}
          options={[
            { value: 'A', label: 'A' },
            { value: 'B', label: 'B' },
            { value: 'C', label: 'C' },
          ]}
          onChange={(v) => setTweak('variation', v)}
        />
        <TweakToggle
          label="إظهار المحدِّد"
          value={t.showVariationSwitcher}
          onChange={(v) => setTweak('showVariationSwitcher', v)}
        />
        <TweakSection label="المظهر" />
        <TweakToggle
          label="الوضع الداكن"
          value={theme === 'dark'}
          onChange={(v) => setTheme(v ? 'dark' : 'light')}
        />
        <TweakSlider
          label="كثافة الزخارف"
          value={t.motifIntensity}
          min={0} max={200} step={10} unit="%"
          onChange={(v) => setTweak('motifIntensity', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
