import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#07080f",
  surface: "#0e0f1c",
  card: "#13142a",
  accent: "#a78bfa",
  accent2: "#34d399",
  accent3: "#60a5fa",
  text: "#e8e8f8",
  muted: "#8888aa",
  border: "#1e1f35",
};

const SkillIcons = {
  code: (c) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  brain: (c) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2a2.5 2.5 0 0 1 2.5 2.5v.5h1a3 3 0 0 1 3 3v.5a3 3 0 0 1 1 5.5v1a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-1A3 3 0 0 1 6 8.5V8a3 3 0 0 1 3-3V4.5A2.5 2.5 0 0 1 9.5 2z" />
      <line x1="12" y1="5" x2="12" y2="9" /><line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  ),
  chart: (c) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  cloud: (c) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  globe: (c) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  database: (c) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

const skills = [
  { icon: "code", name: "Python / R / SQL", tags: ["Pandas", "NumPy", "FastAPI", "scikit-learn"] },
  { icon: "brain", name: "AI / ML / NLP", tags: ["LangChain", "RAG", "ChromaDB", "OpenAI", "Claude API"] },
  { icon: "chart", name: "BI & Visualization", tags: ["Tableau", "Power BI", "Qlik Sense", "Streamlit"] },
  { icon: "cloud", name: "Cloud & DevOps", tags: ["AWS", "Docker", "MongoDB", "Railway"] },
  { icon: "globe", name: "GIS & Geospatial", tags: ["Mapping", "Spatial Analysis", "UNESCO data"] },
  { icon: "database", name: "Data Engineering", tags: ["Schema Design", "Pipelines", "ETL", "dbt"] },
];

const projects = [
  {
    type: "TABLEAU · NLP · PYTHON",
    title: "DOC Literacy Dashboard Ecosystem",
    org: "World Literacy Research Center",
    desc: "Architected a 15-table relational schema and generated a 4,563-row synthetic dataset simulating 100 inmates across 3 correctional facilities over 2 years. Built a 5-layer Tableau dashboard tracking literacy, GED readiness, and post-release outcomes. Demonstrated 32.8% recidivism rate vs. 65% national average.",
    tags: ["Python", "Tableau", "SQL", "Schema Design"],
    color: COLORS.accent,
    link: "#",
  },
  {
    type: "LLM · FASTAPI · RAG",
    title: "AI-Powered Learning Assistant",
    org: "Academic Project — Fall 2025",
    desc: "Intelligent tutoring system using Python, FastAPI, and LLM technologies with adaptive learning, secure authentication, content filtering, and progress analytics for diverse learners.",
    tags: ["FastAPI", "LangChain", "RAG", "OpenAI"],
    color: COLORS.accent2,
    link: "#",
  },
  {
    type: "STREAMLIT · GIS · AI",
    title: "Abraham Accords Literacy Dashboard",
    org: "Mapping Literacy for Humanity — Fall 2025",
    desc: "Multi-page Streamlit dashboard with gender equity analysis, GIS mapping, and AI forecasting. Integrated UNESCO, World Bank, and national datasets with validation frameworks for policy use.",
    tags: ["Streamlit", "GIS", "AI Forecasting", "UNESCO"],
    color: COLORS.accent3,
    link: "#",
  },
];

const experience = [
  {
    role: "Data Analytics Intern",
    company: "Peblink",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Architected 15-table relational schema for the WLRC DOC Dashboard Ecosystem",
      "Engineered 4,563-row synthetic dataset across 3 facilities using Python (pandas, numpy)",
      "Built 5-layer interactive Tableau Public dashboard published to production",
      "Led GIS visualizations & ML models for Abraham Accords Literacy Need Index (AALNI)",
    ],
  },
  {
    role: "Data Analytics Partner",
    company: "Safaricom PLC",
    period: "Sep 2023 – Feb 2024",
    bullets: [
      "Customer behavior analysis via SQL, Python & Qlik Sense → 25% retention increase, $5M cost savings",
      "Automated reporting pipelines, reducing analysis turnaround by 40%",
    ],
  },
  {
    role: "Regional Business Intelligence Lead",
    company: "Safaricom PLC",
    period: "Jan 2023 – Aug 2023",
    bullets: [
      "Drove 30% increase in mobile money transactions and 12% growth in active subscribers",
      "Designed & executed retention initiatives → 15% lift, 150K additional customers retained",
      "Built KPI dashboards and optimized SQL queries for financial & operational planning",
    ],
  },
  {
    role: "Customer Experience Executive",
    company: "Safaricom PLC",
    period: "Oct 2016 – Dec 2022",
    bullets: [
      "Analyzed workflows and customer data to identify service bottlenecks",
      "Maintained structured documentation of processes for operational consistency",
    ],
  },
];

const stats = [
  { num: "4,563", label: "Rows of synthetic data engineered" },
  { num: "$5M", label: "Cost savings delivered" },
  { num: "150K", label: "Customers retained" },
  { num: "32.8%", label: "Recidivism rate (vs 65% avg)" },
];

// ── AI Chat Component ──────────────────────────────────────────────
function AIChat() {
  const [msgs, setMsgs] = useState([
    { role: "assistant", text: "Hi! I'm Vanessa's AI assistant. Ask me anything about her experience, projects, or skills." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const SYSTEM = `You are a helpful portfolio assistant for Vanessa Ngeno, a Data Scientist & Analytics professional.
Here is her background:
- MS Data Analytics & Visualization, Yeshiva University (Dec 2025, GPA 3.4)
- BS Actuarial Science, Jomo Kenyatta University (2015, GPA 3.0)
- Skills: Python, R, SQL, JavaScript, Tableau, Power BI, Qlik Sense, AWS, Docker, MongoDB, Railway, LangChain, RAG, ChromaDB, OpenAI API, Claude API, GIS, NLP
- Recent: Data Analytics Intern at Peblink — built 15-table schema, 4,563-row synthetic dataset, 5-layer Tableau dashboard for DOC literacy ecosystem. Showed 32.8% recidivism vs 65% national average.
- Prior: Safaricom PLC — BI Lead (30% mobile money growth, 150K customers retained, $5M savings), Data Analytics Partner, Customer Experience Executive (6 years)
- Projects: DOC Literacy Dashboard, AI-Powered Learning Assistant (FastAPI+LLM+RAG), Abraham Accords Literacy Dashboard (Streamlit+GIS+AI)
- Leadership: Co-founder Math Tutoring & Literacy Initiative Kenya, Volunteer National Tree Planting Day
- Based in College Point, NY | Open to opportunities
Answer questions about Vanessa accurately and enthusiastically. Keep answers concise (2-4 sentences). If asked something not in her resume, say you don't have that info but suggest contacting her directly.`;

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", text: input };
    setMsgs(m => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const history = [...msgs, userMsg].map(m => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.text,
      }));
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM,
          messages: history,
        }),
      });
      const data = await res.json();
      const reply = data.content?.find(b => b.type === "text")?.text || "Sorry, I couldn't get a response.";
      setMsgs(m => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMsgs(m => [...m, { role: "assistant", text: "Something went wrong. Please try again." }]);
    }
    setLoading(false);
  }

  return (
    <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", height: 420 }}>
      <div style={{ padding: "1rem 1.25rem", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: COLORS.accent2, boxShadow: `0 0 8px ${COLORS.accent2}` }} />
        <span style={{ fontSize: ".85rem", fontWeight: 600, color: COLORS.text }}>AI Portfolio Assistant</span>
        <span style={{ marginLeft: "auto", fontSize: ".7rem", color: COLORS.muted, background: "rgba(167,139,250,.1)", border: `1px solid rgba(167,139,250,.2)`, padding: "2px 8px", borderRadius: 20 }}>Powered by Claude</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.25rem", display: "flex", flexDirection: "column", gap: 12 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "80%", padding: ".65rem 1rem", borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
              background: m.role === "user" ? COLORS.accent : COLORS.surface,
              border: m.role === "assistant" ? `1px solid ${COLORS.border}` : "none",
              fontSize: ".875rem", lineHeight: 1.6, color: COLORS.text,
            }}>{m.text}</div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex" }}>
            <div style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: "16px 16px 16px 4px", padding: ".65rem 1rem" }}>
              <span style={{ color: COLORS.muted, fontSize: ".85rem" }}>Thinking…</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <div style={{ padding: ".75rem 1.25rem", borderTop: `1px solid ${COLORS.border}`, display: "flex", gap: 8 }}>
        <input
          value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Ask about Vanessa's experience..."
          style={{ flex: 1, background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: ".6rem 1rem", color: COLORS.text, fontSize: ".875rem", outline: "none" }}
        />
        <button onClick={send} disabled={loading}
          style={{ background: COLORS.accent, border: "none", borderRadius: 8, padding: ".6rem 1.1rem", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: ".875rem" }}>
          ↑
        </button>
      </div>
    </div>
  );
}

// ── Animated counter ──────────────────────────────────────────────
function AnimatedStat({ num, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, background: `linear-gradient(135deg,${COLORS.accent},${COLORS.accent2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{num}</div>
      <div style={{ fontSize: ".75rem", color: COLORS.muted, marginTop: 4, maxWidth: 130, margin: "4px auto 0" }}>{label}</div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.id]: true }));
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-id]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const fadeIn = (id, extra = {}) => ({
    opacity: visible[id] ? 1 : 0,
    transform: visible[id] ? "translateY(0)" : "translateY(28px)",
    transition: "opacity .6s ease, transform .6s ease",
    ...extra,
  });

  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <div style={{ background: COLORS.bg, color: COLORS.text, minHeight: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif", overflowX: "hidden" }}>

      {/* BG orbs */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle,rgba(167,139,250,.08),transparent 70%)`, top: -150, right: -150 }} />
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,rgba(52,211,153,.06),transparent 70%)`, bottom: -100, left: -100 }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(167,139,250,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,.025) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
      </div>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 100, backdropFilter: scrolled ? "blur(16px)" : "none", background: scrolled ? "rgba(7,8,15,.85)" : "transparent", borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", transition: ".3s" }}>
        <div style={{ fontWeight: 800, fontSize: "1.1rem", background: `linear-gradient(135deg,${COLORS.accent},${COLORS.accent2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>VN.</div>
        <div style={{ display: "flex", gap: "1.75rem" }}>
          {navItems.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} style={{ color: COLORS.muted, textDecoration: "none", fontSize: ".875rem", transition: ".2s" }}
              onMouseEnter={e => e.target.style.color = COLORS.text}
              onMouseLeave={e => e.target.style.color = COLORS.muted}>{n}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "8rem 2rem 4rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 860, width: "100%" }}>
          <div style={{ display: "inline-block", background: "rgba(167,139,250,.12)", border: "1px solid rgba(167,139,250,.25)", color: COLORS.accent, padding: ".3rem 1rem", borderRadius: 20, fontSize: ".78rem", fontWeight: 600, letterSpacing: ".06em", marginBottom: "1.5rem" }}>✦ Open to Full-Time Opportunities · NYC</div>
          <h1 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "1.25rem" }}>
            Vanessa<br />
            <span style={{ background: `linear-gradient(135deg,${COLORS.accent},${COLORS.accent2},${COLORS.accent3})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ngeno</span>
          </h1>
          <p style={{ fontSize: "1.15rem", color: COLORS.muted, maxWidth: 580, lineHeight: 1.75, marginBottom: "1rem" }}>
            Data Scientist & Analytics Engineer who turns complex datasets into <strong style={{ color: COLORS.text }}>evidence-based decisions</strong> — from correctional literacy systems to AI-powered tutoring platforms.
          </p>
          <p style={{ fontSize: ".9rem", color: COLORS.muted, marginBottom: "2.5rem" }}>
            MS Data Analytics & Visualization · Yeshiva University &nbsp;|&nbsp; Ex-Safaricom BI Lead · Nairobi
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
            <a href="#projects" style={{ padding: ".75rem 1.75rem", background: COLORS.accent, color: "#fff", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: ".95rem" }}>View Projects</a>
            <a href="#contact" style={{ padding: ".75rem 1.75rem", background: "transparent", color: COLORS.text, border: `1px solid ${COLORS.border}`, borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: ".95rem" }}>Get In Touch</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem", borderTop: `1px solid ${COLORS.border}`, paddingTop: "2.5rem" }}>
            {stats.map((s, i) => <AnimatedStat key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* AI CHAT */}
      <section style={{ padding: "2rem 2rem 5rem", maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }} data-id="chat" >
        <div style={fadeIn("chat")}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ color: COLORS.accent, fontSize: ".78rem", fontWeight: 600, letterSpacing: ".1em", marginBottom: ".5rem" }}>POWERED BY CLAUDE API</div>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 800 }}>Ask My AI Assistant</h2>
            <p style={{ color: COLORS.muted, marginTop: ".5rem", fontSize: ".9rem" }}>Ask anything about my background, skills, or projects</p>
          </div>
          <AIChat />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "5rem 2rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div data-id="skills-header" style={fadeIn("skills-header")}>
          <div style={{ color: COLORS.accent, fontSize: ".78rem", fontWeight: 600, letterSpacing: ".1em", marginBottom: ".75rem" }}>TOOLKIT</div>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, marginBottom: ".75rem" }}>Skills & <span style={{ background: `linear-gradient(135deg,${COLORS.accent},${COLORS.accent2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Expertise</span></h2>
          <p style={{ color: COLORS.muted, marginBottom: "2.5rem", fontSize: ".95rem" }}>End-to-end capabilities from data engineering to AI deployment.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: "1.25rem" }}>
          {skills.map((s, i) => (
            <div key={i} data-id={`skill-${i}`} style={{ ...fadeIn(`skill-${i}`, { transitionDelay: `${i * .08}s` }), background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: "1.5rem", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ marginBottom: ".75rem" }}>{SkillIcons[s.icon](COLORS.accent)}</div>
              <h3 style={{ fontSize: "1rem", marginBottom: ".5rem" }}>{s.name}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem", marginTop: ".75rem" }}>
                {s.tags.map((t, j) => <span key={j} style={{ background: "rgba(167,139,250,.1)", border: "1px solid rgba(167,139,250,.18)", color: COLORS.accent, padding: ".18rem .55rem", borderRadius: 4, fontSize: ".72rem" }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "5rem 2rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div data-id="proj-header" style={fadeIn("proj-header")}>
          <div style={{ color: COLORS.accent2, fontSize: ".78rem", fontWeight: 600, letterSpacing: ".1em", marginBottom: ".75rem" }}>PORTFOLIO</div>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, marginBottom: ".75rem" }}>Featured <span style={{ background: `linear-gradient(135deg,${COLORS.accent},${COLORS.accent2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span></h2>
          <p style={{ color: COLORS.muted, marginBottom: "2.5rem", fontSize: ".95rem" }}>Real-world impact across literacy, AI, and business intelligence.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "1.5rem" }}>
          {projects.map((p, i) => (
            <div key={i} data-id={`proj-${i}`} style={{ ...fadeIn(`proj-${i}`, { transitionDelay: `${i * .1}s` }), background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: "1.75rem", position: "relative", overflow: "hidden", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.transform = "translateY(-5px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${p.color},transparent)` }} />
              <div style={{ fontSize: ".72rem", color: p.color, fontWeight: 700, letterSpacing: ".07em", marginBottom: ".5rem" }}>{p.type}</div>
              <h3 style={{ fontSize: "1.05rem", marginBottom: ".25rem" }}>{p.title}</h3>
              <div style={{ fontSize: ".78rem", color: COLORS.muted, marginBottom: ".85rem" }}>{p.org}</div>
              <p style={{ fontSize: ".875rem", color: COLORS.muted, lineHeight: 1.65, marginBottom: "1.25rem" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem", marginBottom: "1.25rem" }}>
                {p.tags.map((t, j) => <span key={j} style={{ background: `rgba(255,255,255,.05)`, border: `1px solid ${COLORS.border}`, color: COLORS.muted, padding: ".18rem .55rem", borderRadius: 4, fontSize: ".72rem" }}>{t}</span>)}
              </div>
              <a href={p.link} style={{ fontSize: ".8rem", color: p.color, fontWeight: 700, textDecoration: "none" }}>View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "5rem 2rem", maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div data-id="exp-header" style={fadeIn("exp-header")}>
          <div style={{ color: COLORS.accent3, fontSize: ".78rem", fontWeight: 600, letterSpacing: ".1em", marginBottom: ".75rem" }}>CAREER</div>
          <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, marginBottom: ".75rem" }}>Work <span style={{ background: `linear-gradient(135deg,${COLORS.accent},${COLORS.accent3})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experience</span></h2>
          <p style={{ color: COLORS.muted, marginBottom: "3rem", fontSize: ".95rem" }}>From Nairobi to New York — a decade of turning data into decisions.</p>
        </div>
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom,${COLORS.accent},${COLORS.accent2},${COLORS.accent3})` }} />
          {experience.map((e, i) => (
            <div key={i} data-id={`exp-${i}`} style={{ ...fadeIn(`exp-${i}`, { transitionDelay: `${i * .1}s` }), position: "relative", marginBottom: "2.5rem" }}>
              <div style={{ position: "absolute", left: "-2.45rem", top: ".35rem", width: "1rem", height: "1rem", borderRadius: "50%", background: COLORS.accent, border: `2px solid ${COLORS.bg}`, boxShadow: `0 0 10px ${COLORS.accent}` }} />
              <div style={{ fontSize: ".78rem", color: COLORS.accent, fontWeight: 600, marginBottom: ".3rem" }}>{e.period}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>{e.role}</h3>
              <div style={{ fontSize: ".9rem", color: COLORS.accent2, marginBottom: ".75rem" }}>{e.company}</div>
              <ul style={{ paddingLeft: "1.1rem" }}>
                {e.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: ".875rem", color: COLORS.muted, lineHeight: 1.7, marginBottom: ".3rem" }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "5rem 2rem", maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div data-id="contact" style={fadeIn("contact")}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ color: COLORS.accent, fontSize: ".78rem", fontWeight: 600, letterSpacing: ".1em", marginBottom: ".75rem" }}>LET'S TALK</div>
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 800, marginBottom: ".75rem" }}>Get In <span style={{ background: `linear-gradient(135deg,${COLORS.accent},${COLORS.accent2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Touch</span></h2>
            <p style={{ color: COLORS.muted, fontSize: ".95rem" }}>Open to full-time roles, freelance projects, and research collaborations.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
              {[
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, label: "vanessangeno@gmail.com", href: "mailto:vanessangeno@gmail.com" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>, label: "LinkedIn", href: "#" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>, label: "GitHub", href: "#" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>, label: "Tableau Public", href: "#" },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>, label: "Download Resume", href: "#" },
              ].map((l, i) => (
                <a key={i} href={l.href} style={{ display: "flex", alignItems: "center", gap: ".75rem", background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: ".85rem 1.1rem", color: COLORS.text, textDecoration: "none", fontSize: ".9rem", transition: ".2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; }}>
                  <span style={{ display: "flex", alignItems: "center" }}>{l.icon}</span><span>{l.label}</span>
                </a>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
              {["Your Name", "Your Email"].map((ph, i) => (
                <input key={i} placeholder={ph} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: ".75rem 1rem", color: COLORS.text, fontSize: ".9rem", outline: "none", fontFamily: "inherit" }} />
              ))}
              <textarea placeholder="Your Message" style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: ".75rem 1rem", color: COLORS.text, fontSize: ".9rem", outline: "none", fontFamily: "inherit", minHeight: 110, resize: "vertical" }} />
              <button style={{ background: `linear-gradient(135deg,${COLORS.accent},${COLORS.accent2})`, border: "none", borderRadius: 8, padding: ".8rem", color: "#fff", fontWeight: 700, fontSize: ".95rem", cursor: "pointer" }}>Send Message</button>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "2rem", color: COLORS.muted, fontSize: ".8rem", borderTop: `1px solid ${COLORS.border}`, position: "relative", zIndex: 1 }}>
        © 2026 Vanessa Ngeno · Built with React + Claude API · Hosted on GitHub Pages
      </footer>
    </div>
  );
}
