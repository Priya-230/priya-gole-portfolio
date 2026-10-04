import { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUp, Award, BarChart3, BrainCircuit, BriefcaseBusiness,
  CheckCircle2, Code2, Database, FileBadge, GitBranch, GraduationCap, Heart,
  Mail, Menu, MonitorCog, Network, Sparkles, TrendingUp, X
} from 'lucide-react';

const portrait = '/assets/priya-gole-cutout.png';
const navItems = [
  ['Home', 'home'], ['About', 'about'], ['Projects', 'projects'],
  ['Skills', 'skills'], ['Certifications', 'certifications'], ['Contact', 'contact']
];

const skills = [
  { title: 'Programming', icon: Code2, tone: 'blue', items: ['Python', 'SQL', 'C++', 'Java', 'JavaScript'] },
  { title: 'Data Science', icon: BrainCircuit, tone: 'blue', items: ['Pandas', 'NumPy', 'Scikit-learn', 'Statsmodels'] },
  { title: 'Analytics', icon: BarChart3, tone: 'gold', items: ['Power BI', 'Data Analysis', 'Visualization', 'Dashboards'] },
  { title: 'AI & Tools', icon: MonitorCog, tone: 'gold', items: ['TensorFlow', 'PyTorch', 'NLP', 'OpenCV', 'Git', 'VS Code'] },
];

const projects = [
  {
    title: 'Price Anomaly Detection', category: 'Data Science', tag: 'Data Science · ML',
    description: 'A machine learning application that analyzes e-commerce product prices, detects unusual patterns, and highlights potential anomalies for faster investigation.',
    featured: true,
  },
  {
    title: 'More Work Coming Soon', category: 'Analytics', tag: 'Reserved slot',
    description: "Additional projects will be added as Priya's portfolio grows.", placeholder: true,
  },
  {
    title: 'Future Research & Analytics', category: 'AI / ML', tag: 'Reserved slot',
    description: 'A space for future data science, analytics, and AI work.', placeholder: true,
  },
];

function SectionHeading({ icon: Icon, title, note }) {
  return <div className="section-head"><h3><span><Icon size={18} /></span>{title}<i /></h3><span>{note}</span></div>;
}

function ProjectVisual() {
  return <div className="project-visual" aria-label="Illustrative price analytics dashboard">
    <div className="dashboard-window">
      <div className="window-bar"><span /><span /><span /><b>Price Intelligence</b></div>
      <div className="window-body"><div className="kpi-row"><i /><i /><i /></div>
        <div className="chart">{[40,55,35,70,52,82,64].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}</div>
        <div className="alert-line"><em /> Anomaly detected</div>
      </div>
    </div><div className="sprig">❧</div>
  </div>;
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [filter, setFilter] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const filters = ['All', 'AI / ML', 'Data Science', 'Analytics'];
  const visibleProjects = projects.filter(project => filter === 'All' || project.category === filter || (filter === 'AI / ML' && project.category === 'AI / ML'));

  useEffect(() => {
    const nodes = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const closeMenu = () => setMenuOpen(false);

  return <div className="page-shell">
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Priya Gole home" onClick={closeMenu}><span className="brand-mark">P</span><span className="brand-leaf" aria-hidden="true">✦</span></a>
      <button className="mobile-menu-btn" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
        {navItems.map(([label, id]) => <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
      </nav>
      <div className="topbar-actions"><button className="icon-btn" onClick={scrollTop} title="Back to top" aria-label="Back to top"><ArrowUp size={16} /></button><a className="gold-btn" href="#contact">Let's Talk <ArrowRight size={14} /></a></div>
    </header>

    <main className="dashboard">
      <section className="panel hero-panel" id="home">
        <div className="hero-copy"><p className="eyebrow">◌ &nbsp; HELLO, I'M <span /></p>
          <h1>Priya <em>Gole</em></h1>
          <h2>Computer Science Engineering Student <span>•</span> AI &amp; Data Science</h2>
          <p className="lead">Passionate about turning data into meaningful insights and building intelligent, practical solutions at the intersection of analytics, machine learning, and technology.</p>
          <div className="hero-actions"><a className="blue-btn" href="#projects">View My Projects <ArrowRight size={14} /></a><a className="outline-btn" href="mailto:priyagole2005@gmail.com">Contact Me <Mail size={14} /></a></div>
        </div>
        <div className="hero-visual" aria-label="Portrait of Priya Gole"><div className="blue-orb" /><div className="hero-frame" />
          <div className="botanical botanical-left" aria-hidden="true"><span>⌁</span><span>╱</span><span>❧</span><span>╲</span></div>
          <div className="botanical botanical-right" aria-hidden="true"><span>❧</span><span>╱</span><span>❧</span><span>╲</span></div>
          <img src={portrait} alt="Priya Gole, smiling in a deep purple traditional outfit" /><div className="handwritten">Ideas<br />Create<br /><b>Impact</b> ♡</div>
        </div>
        <div className="stat-strip">
          <div className="stat"><span className="stat-icon"><BriefcaseBusiness size={19} /></span><div><strong>01</strong><small>Projects</small></div></div>
          <div className="stat"><span className="stat-icon"><FileBadge size={19} /></span><div><strong>02</strong><small>Certifications</small></div></div>
          <div className="stat"><span className="stat-icon"><Database size={19} /></span><div><strong>AI + Data</strong><small>Focus Area</small></div></div>
          <div className="stat"><span className="stat-icon"><Sparkles size={19} /></span><div><strong>Lifelong</strong><small>Learning</small></div></div>
        </div>
      </section>

      <section className="panel skills-panel" id="skills"><SectionHeading icon={Sparkles} title="Skills" note="Turning data into useful insight" />
        <div className="skill-grid">{skills.map(({ title, icon: Icon, tone, items }) => <article className="skill-card" key={title}><div className={`skill-icon ${tone}`}><Icon size={20} /></div><h4>{title}</h4><div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="panel about-panel" id="about"><SectionHeading icon={Heart} title="About Me" note="A little bit about who I am" />
        <div className="about-content"><div className="about-photo"><div className="mini-orb" /><img src={portrait} alt="Portrait of Priya Gole" /></div>
          <div className="about-copy"><p>I’m Priya Gole, a Computer Science Engineering student specializing in Artificial Intelligence and Data Science. I enjoy exploring data, finding patterns, and transforming technical ideas into practical solutions.</p>
            <div className="traits"><div><b><BrainCircuit size={17} /></b><strong>Analytical Thinker</strong><span>Breaking complex data into clear, useful insights.</span></div><div><b><Heart size={17} /></b><strong>Curious Learner</strong><span>Exploring new tools, methods, and technologies.</span></div><div><b><CheckCircle2 size={17} /></b><strong>Impact Focused</strong><span>Connecting technology with real outcomes.</span></div></div>
          </div>
        </div>
      </section>

      <section className="panel projects-panel" id="projects"><SectionHeading icon={BriefcaseBusiness} title="Projects" note="Some of my recent work" />
        <div className="filter-row" aria-label="Project filters">{filters.map(item => <button key={item} className={`filter ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div>
        <div className="project-grid">{visibleProjects.map(project => project.placeholder ? <article className="project-card placeholder-card" key={project.title}><div className={`placeholder-icon ${project.category === 'Analytics' ? '' : 'gold'}`}>＋</div><h4>{project.title}</h4><p>{project.description}</p><span className="tag muted">{project.tag}</span></article> : <article className="project-card featured" key={project.title}><ProjectVisual /><div className="project-body"><span className="tag">{project.tag}</span><h4>{project.title}</h4><p>{project.description}</p><div className="project-actions"><span className="blue-btn small">Project details <ArrowRight size={12} /></span><span className="status-note">Featured work</span></div></div></article>)}</div>
      </section>

      <section className="panel education-panel"><SectionHeading icon={GraduationCap} title="Education" note="My academic journey" />
        <div className="education-card"><div className="edu-icon"><GraduationCap size={25} /></div><div><strong>B.Tech in Computer Science Engineering — Artificial Intelligence &amp; Data Science</strong><span>Ramrao Adik Institute of Technology, Navi Mumbai</span><small>Undergraduate Program</small></div><b className="edu-badge">AI &amp; Data Science</b></div>
      </section>

      <section className="panel cert-panel" id="certifications"><SectionHeading icon={Award} title="Certifications & Achievements" note="Courses, certifications and more" />
        <div className="cert-grid"><article className="cert-card"><div className="cert-mark ibm">IBM</div><strong>Introduction to Generative AI for Executives and Business Leaders</strong><span>IBM via edX</span><small>2025</small></article><article className="cert-card"><div className="cert-mark redhat">RH</div><strong>Fundamentals of Red Hat Enterprise Linux</strong><span>Red Hat</span><small>2025</small></article></div>
      </section>

      <section className="panel contact-panel" id="contact"><SectionHeading icon={Mail} title="Contact Me" note="Let's connect" />
        <div className="contact-content"><div><h4>Let's Build Something Meaningful Together</h4><p>I’m open to conversations about technology, data, analytics, collaborative projects, and future opportunities.</p><a className="blue-btn" href="mailto:priyagole2005@gmail.com">Send a Message <ArrowRight size={14} /></a></div>
          <div className="contact-cards"><a href="mailto:priyagole2005@gmail.com" className="contact-card"><span><Mail size={16} /></span><div><small>Email</small><strong>priyagole2005@gmail.com</strong></div></a><a href="https://www.linkedin.com/in/gole-priya" target="_blank" rel="noreferrer" className="contact-card"><span>in</span><div><small>LinkedIn</small><strong>linkedin.com/in/gole-priya</strong></div></a></div>
          <div className="contact-art"><div className="gold-leaf" /><div className="blue-leaf" /><span>Good<br />Ideas<br /><b>Bright Futures</b> ♡</span></div>
        </div>
      </section>
    </main>

    <footer className="footer"><div><strong>Priya Gole</strong><span>AI &amp; Data Science</span></div><nav aria-label="Footer navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="socials"><a href="https://www.linkedin.com/in/gole-priya" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a><a href="mailto:priyagole2005@gmail.com" aria-label="Email"><Mail size={13} /></a><button onClick={scrollTop} aria-label="Back to top"><ArrowUp size={15} /></button></div></footer>
  </div>;
}
