import { type FormEvent, type ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight, ChevronDown, Globe2, X } from 'lucide-react';
import { Link, Route, Router as WouterRouter, Switch, useLocation, useParams } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { categories, getProject, getProjectDetailLayout, projects, type Project, type ProjectDetailLayout } from '@/data/projects';
import { languageLabels, type Language } from '@/data/locales';
import { useLocale } from '@/hooks/use-locale';
import { LocaleProvider } from '@/lib/locale-provider';

const queryClient = new QueryClient();
const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

async function submitPortfolioForm(payload: Record<string, string>) {
  if (!formEndpoint) {
    throw new Error('VITE_FORMSPREE_ENDPOINT is not configured');
  }
  const response = await fetch(formEndpoint, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
}

type PublicAssetStatus = 'checking' | 'ready' | 'missing';

const publicAssetChecks = new Map<string, Promise<boolean>>();

function checkPublicAsset(src: string) {
  const existingCheck = publicAssetChecks.get(src);
  if (existingCheck) return existingCheck;
  const check = fetch(src, { method: 'HEAD', cache: 'no-store' })
    .then((response) => response.ok)
    .catch(() => false);
  publicAssetChecks.set(src, check);
  return check;
}

function usePublicAsset(src?: string) {
  const [status, setStatus] = useState<PublicAssetStatus>(src ? 'checking' : 'missing');

  useEffect(() => {
    let active = true;
    if (!src) {
      setStatus('missing');
      return () => {
        active = false;
      };
    }
    setStatus('checking');
    checkPublicAsset(src).then((available) => {
      if (active) setStatus(available ? 'ready' : 'missing');
    });
    return () => {
      active = false;
    };
  }, [src]);

  return status === 'ready';
}

function IntroPreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setVisible(false), reducedMotion ? 350 : 3600);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return (
    <div className="mil-preloader" aria-hidden="true">
      <div className="mil-preloader-animation">
        <div className="mil-animation-1">
          <span className="preloader-word">A</span>
          <span className="preloader-word preloader-word-thin">visual</span>
          <span className="preloader-word">designer</span>
        </div>
        <div className="mil-animation-2">
          <div className="mil-reveal-frame">
            <div className="mil-reveal-box" />
            <strong>Ines Mlaouhi</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

const socials = [
  ['LinkedIn', 'https://www.linkedin.com/in/ines-mlaouhi-5035621aa/'],
  ['Behance', 'https://www.behance.net/inesmlaouhi'],
  ['Pinterest', 'https://www.pinterest.com/Ines0Mlaouhi/?invite_code=f1752080e49c4f18a430e9ad6c132621&sender=962574257764810831'],
  ['GitHub', 'https://github.com/InesMlh'],
];

const navItems = [
  ['/', 'home'],
  ['/about', 'about'],
  ['/services', 'services'],
  ['/work', 'work'],
  ['/trainings', 'trainings'],
  ['/contact', 'contact'],
] as const;

const sitePath = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

function Markup({ children }: { children: string }) {
  return <span dangerouslySetInnerHTML={{ __html: children }} />;
}

function localizedProject(project: Project, language: Language, copy: ReturnType<typeof useLocale>['copy']): Project {
  const translation = language !== 'en' ? project.translations?.[language] : undefined;
  return {
    ...project,
    ...translation,
    category: copy.categoryLabels[project.category] ?? project.category,
    tags: project.tags.map((tag) => copy.categoryLabels[tag] ?? tag),
    role: project.role ? (copy.roleLabels[project.role] ?? project.role) : project.role,
  };
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function CursorBall() {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!media.matches) return;
    setEnabled(true);
    document.body.classList.add('has-custom-cursor');
    let targetX = -100;
    let targetY = -100;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;
    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };
    const render = () => {
      currentX += (targetX - currentX) * .2;
      currentY += (targetY - currentY) * .2;
      if (ref.current) ref.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = window.requestAnimationFrame(render);
    };
    window.addEventListener('pointermove', move);
    frame = window.requestAnimationFrame(render);
    return () => {
      window.removeEventListener('pointermove', move);
      window.cancelAnimationFrame(frame);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);
  return enabled ? <div ref={ref} className="template-cursor" aria-hidden="true"><ArrowUpRight size={18} /></div> : null;
}

function ProgressRail() {
  const { copy } = useLocale();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return <div className="progress-rail" role="progressbar" aria-label={copy.scrollProgress} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}><span style={{ height: `${progress}%` }} /></div>;
}

function BackToTop() {
  const { copy } = useLocale();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.45);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <button
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={copy.backToTop}
      data-testid="button-back-to-top"
    >
       <span className="back-to-top-icon"><ArrowUp size={17} /></span><span className="back-to-top-label">{copy.backToTop}</span>
    </button>
  );
}

function LanguageControl({ placement = 'header' }: { placement?: 'header' | 'footer' }) {
  const { language, setLanguage, copy } = useLocale();
  const [open, setOpen] = useState(false);
  const controlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (controlRef.current && !controlRef.current.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={controlRef} className={`language-picker language-picker-${placement}`}>
      <button
        type="button"
        className="language-picker-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={copy.language}
        onClick={() => setOpen((value) => !value)}
      >
        <Globe2 size={15} aria-hidden="true" />
        <span>{languageLabels[language]}</span>
        <ChevronDown size={13} aria-hidden="true" />
      </button>
      {open && (
        <div className="language-picker-menu" role="listbox" aria-label={copy.language}>
          {(Object.keys(languageLabels) as Language[]).map((code) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={language === code}
              className={language === code ? 'is-active' : ''}
              onClick={() => { setLanguage(code); setOpen(false); }}
            >
              {languageLabels[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header() {
  const [location] = useLocation();
  const { language, copy } = useLocale();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location]);
  const current = navItems.find(([href]) => href === location)?.[1] ?? ((location.startsWith('/project/') || location.startsWith('/work/')) ? 'work' : 'home');

  return (
    <>
      <header className="template-frame-top">
        <Link href="/" className="text-mark" data-testid="link-wordmark">INES <span>MLAOUHI</span></Link>
        <div className="frame-actions">
          <LanguageControl />
          <button className={`template-menu-btn ${open ? 'is-active' : ''}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? copy.closeMenu : copy.openMenu} data-testid="button-menu">
            <span /><span />
          </button>
        </div>
      </header>

      <div className={`template-menu-frame ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="menu-backdrop" onClick={() => setOpen(false)} />
        <div className="menu-panel">
          <div className="menu-panel-top">
            <span className="menu-kicker">{copy.menuPages}</span>
          </div>
          <div className="menu-layout">
            <nav className="template-main-menu" aria-label={copy.primaryNavigation}>
              {navItems.map(([href, key], index) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className={current === key ? 'is-active' : ''} data-testid={`link-menu-${key}`}>
                  <span>0{index + 1}</span>{copy[key]}
                </Link>
              ))}
            </nav>
            <div className="menu-aside">
              <div>
                <span className="menu-kicker">{copy.menuProjects}</span>
                <ul className="menu-projects">
                   {projects.slice(0, 5).map((project) => <li key={project.slug}><Link href={`/work/${project.slug}`} onClick={() => setOpen(false)}>{localizedProject(project, language, copy).title}</Link></li>)}
                </ul>
              </div>
              <div className="menu-connect">
                <span className="menu-kicker">{copy.menuConnect}</span>
                <a href="mailto:ines.mlaouhi.pro@gmail.com">ines.mlaouhi.pro@gmail.com</a>
                <div className="menu-socials">{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  const { copy } = useLocale();
  return (
    <footer className="template-footer">
      <div className="footer-inner">
        <div className="footer-rule" />
        <div className="footer-cta">
          <span className="section-kicker">{copy.contactKicker}</span>
          <h2><Markup>{copy.contactTitle}</Markup></h2>
          <a href={sitePath('/contact')} target="_blank" rel="noopener noreferrer" className="template-button"><span>{copy.startConversation}</span><ArrowRight size={17} /></a>
        </div>
        <div className="footer-bottom">
          <div className="footer-identity"><strong>Ines Mlaouhi</strong><a href="mailto:ines.mlaouhi.pro@gmail.com">ines.mlaouhi.pro@gmail.com</a></div>
          <nav className="footer-nav" aria-label={copy.primaryNavigation}>
            {navItems.map(([href, key]) => <Link key={href} href={href}>{copy[key]}</Link>)}
          </nav>
          <div className="footer-socials">{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}</div>
          <span>© Ines Mlaouhi · {new Date().getFullYear()} · {copy.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

function AmbientVisual({ variant = 'orbit' }: { variant?: 'home' | 'orbit' | 'contact' | 'motion' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [atmosphere, setAtmosphere] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setAtmosphere(document.getElementById('site-atmosphere'));
    const updateScale = () => {
      const scale = 1 - Math.min(.16, window.scrollY / 2200);
      ref.current?.style.setProperty('--scroll-scale', scale.toFixed(3));
    };
    updateScale();
    window.addEventListener('scroll', updateScale, { passive: true });
    return () => window.removeEventListener('scroll', updateScale);
  }, []);

  if (!atmosphere) return null;
  return createPortal(
    <div ref={ref} className={`hero-ambient hero-ambient-${variant}`} aria-hidden="true">
      <span className="hero-ambient-ring hero-ambient-ring-one" />
      <span className="hero-ambient-ring hero-ambient-ring-two" />
      <span className="hero-ambient-glow" />
    </div>,
    atmosphere,
  );
}

function SiteAtmosphere() {
  return <div id="site-atmosphere" className="site-atmosphere" aria-hidden="true" />;
}

function PlaceholderVisual({ project, variant = 'cover' }: { project: Project; variant?: 'cover' | 'detail' | 'gallery' }) {
  const { copy } = useLocale();
  const image = variant === 'cover' ? project.coverImage : project.gallery?.[0];
  const imageAvailable = usePublicAsset(image);
  const [imageFailed, setImageFailed] = useState(false);
  useEffect(() => setImageFailed(false), [image]);
  const showImage = imageAvailable && !imageFailed;
  return (
    <div className={`placeholder-visual tone-${project.placeholderTone} placeholder-${variant} ${showImage ? 'has-image image-ready' : ''}`} role="img" aria-label={`${project.title} — ${showImage ? copy.placeholder : copy.placeholder}`}>
      {showImage ? <img src={image} alt={`${project.title} project visual`} onError={() => setImageFailed(true)} /> : <><div className="placeholder-lines" /><div className="placeholder-symbol"><span>{project.title.slice(0, 2).toUpperCase()}</span></div><div className="placeholder-label"><span>{project.title}</span><small>{copy.placeholder} · {variant === 'cover' ? '1600 × 1000' : '1920 × 1200'}</small></div></>}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { language, copy } = useLocale();
  const displayProject = localizedProject(project, language, copy);
  return (
    <a href={sitePath(`/work/${project.slug}`)} target="_blank" rel="noopener noreferrer" className={`project-card project-${project.layoutType}`} data-testid={`card-project-${project.slug}`}>
      <div className="project-card-media"><PlaceholderVisual project={displayProject} /></div>
      <div className="project-card-meta">
        <div><h3>{displayProject.title}</h3><span>{displayProject.category}</span></div>
        <span className="project-number">0{index + 1}</span>
      </div>
    </a>
  );
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="project-grid">{items.map((project, index) => <Reveal key={project.slug} delay={index * 60}><ProjectCard project={project} index={index} /></Reveal>)}</div>
  );
}

function Home() {
  const { copy } = useLocale();
  const [heroWord, setHeroWord] = useState(0);
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  useEffect(() => {
    const timer = window.setInterval(() => setHeroWord((value) => (value + 1) % copy.heroWords.length), 4200);
    return () => window.clearInterval(timer);
  }, [copy.heroWords.length]);
  return (
    <main className="template-page ambient-page">
      <section className="template-banner page-container">
         <AmbientVisual variant="home" />
        <div className="banner-content">
          <h1>{copy.heroPrefix} <span className="thin">{copy.heroArticle}</span><br /><span key={heroWord} className="hero-word" aria-live="polite">{copy.heroWords[heroWord]}</span> <span className="thin">{copy.heroWorld}</span><br /><span className="thin">{copy.heroEnding}</span></h1>
          <div className="banner-lower">
            <p>{copy.heroBody}</p>
             <a href={sitePath('/work')} target="_blank" rel="noopener noreferrer" className="template-button"><span>{copy.exploreWork}</span><ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="discover-section ambient-section page-container section-space">
        <div className="two-column">
          <h2><Markup>{copy.discoverTitle}</Markup></h2>
          <div className="section-copy"><p>{copy.discoverBody}</p><a href={sitePath('/about')} target="_blank" rel="noopener noreferrer" className="template-button"><span>{copy.discover}</span><ArrowRight size={17} /></a></div>
        </div>
      </section>

      <div className="template-marquee" aria-label={copy.marquee}><div className="template-marquee-track">{[0, 1, 2, 3].map((index) => <span className="template-marquee-item" key={index} aria-hidden={index > 0}>{copy.marquee}</span>)}</div></div>

      <section className="work-section ambient-section page-container section-space">
        <div className="section-heading"><div className="section-heading-copy"><h2>{copy.selectedWork}</h2><span>{copy.selectedWorkNote.split('<br />').map((line) => <span key={line}>{line}<br /></span>)}</span></div><a href={sitePath('/work')} target="_blank" rel="noopener noreferrer" className="template-button template-button-small"><span>{copy.seeAll}</span><ArrowRight size={16} /></a></div>
        <ProjectGrid items={featured} />
      </section>

      <section className="services-section ambient-section page-container section-space">
        <div className="section-heading"><div><h2><Markup>{copy.servicesTitle}</Markup></h2></div><span>{copy.servicesKicker}<br />{copy.servicesNote}</span></div>
        <ServiceCards />
      </section>

      <section className="homepage-training ambient-section page-container section-space two-column">
        <PlaceholderVisual project={projects.find((project) => project.slug === 'graphic-design-training') ?? projects[0]} variant="gallery" />
         <div className="section-copy"><h2>{copy.trainingLabel}</h2><p>{copy.trainingBody}</p><a href={sitePath('/trainings')} target="_blank" rel="noopener noreferrer" className="template-button"><span>{copy.discover}</span><ArrowRight size={17} /></a></div>
      </section>

      <section className="blog-section ambient-section page-container section-space">
          <div className="section-heading"><div><h2>{copy.blog}</h2></div><span><Markup>{copy.blogNote}</Markup></span></div>
        <a className="article-feature" href="https://attentioninsight.com/from-clarity-to-experience-a-conversation-with-ux-ui-designer-ines-mlaouhi/" target="_blank" rel="noopener noreferrer" data-testid="link-featured-article">
          <ArticleFeatureVisual />
            <div className="article-copy"><span className="section-kicker">{copy.articleKicker}</span><h3>{copy.articleTitle}</h3><span className="template-button template-button-small"><span>{copy.readArticle}</span><ArrowRight size={16} /></span></div>
        </a>
      </section>
      <Footer />
    </main>
  );
}

function ArticleFeatureVisual() {
  const { copy } = useLocale();
  const imageAvailable = usePublicAsset('/portfolio/assets/attention-insight.jpg');
  return imageAvailable ? (
    <div className="article-feature-media">
      <img src="/portfolio/assets/attention-insight.jpg" alt="Attention Insight feature" />
    </div>
  ) : (
    <PlaceholderVisual project={{ ...projects[0], title: 'Attention Insight' }} variant="gallery" />
  );
}

function ServiceCards() {
  const { copy } = useLocale();
  return (
    <div className="service-card-grid">
      {copy.serviceItems.map((service, index) => {
        const card = (
          <div className="service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <span className="service-card-skills">{service.skills}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        );
        return card;
      })}
    </div>
  );
}

function Work() {
  const { copy } = useLocale();
  const [active, setActive] = useState('All');
  const [page, setPage] = useState(1);
  const filtered = active === 'All' ? projects : projects.filter((project) => project.category === active || project.tags.includes(active));
  const pageSize = 6;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visibleProjects = filtered.slice((page - 1) * pageSize, page * pageSize);
  const selectCategory = (category: string) => {
    setActive(category);
    setPage(1);
  };
  return (
    <main className="template-page ambient-page page-container">
       <section className="inner-banner"><AmbientVisual variant="orbit" /><span className="section-kicker">{copy.archiveKicker}</span><h1><Markup>{copy.archiveTitle}</Markup></h1><p>{copy.archiveBody}</p></section>
       <section className="archive-section section-space">
         <div className="filter-bar" aria-label={copy.filterProjects}>{categories.map((category) => <button key={category} type="button" aria-pressed={active === category} className={active === category ? 'is-active' : ''} onClick={() => selectCategory(category)}>{copy.categoryLabels[category] ?? category}</button>)}</div>
         {filtered.length ? <div key={`${active}-${page}`} className="pagination-grid"><ProjectGrid items={visibleProjects} /></div> : <p className="empty-state">{copy.noProjects}</p>}
         {filtered.length > pageSize && <nav className="pagination" aria-label={copy.filterProjects}>
            {page > 1 ? <button className="pagination-button pagination-previous" type="button" onClick={() => setPage((value) => Math.max(1, value - 1))}>{copy.previousPage}</button> : <span className="pagination-spacer" aria-hidden="true" />}
            <span className="pagination-status" aria-live="polite">{page} / {pageCount}</span>
            <button className="pagination-button pagination-next" type="button" onClick={() => setPage((value) => Math.min(pageCount, value + 1))} disabled={page === pageCount}>{copy.nextPage}</button>
         </nav>}
      </section>
      <Footer />
    </main>
  );
}

function Services() {
  const { copy } = useLocale();
  return (
    <main className="template-page ambient-page page-container">
      <section className="inner-banner"><AmbientVisual /><span className="section-kicker">{copy.servicesKicker}</span><h1><Markup>{copy.servicesTitle}</Markup></h1><p>{copy.servicesBody}</p></section>
      <section className="section-space service-overview"><ServiceCards /></section>
      <section className="service-process ambient-section section-space two-column"><h2><Markup>{copy.processTitle}</Markup></h2><div className="section-copy"><p>{copy.processNote}</p><ol>{copy.processSteps.map((step) => <li key={step}>{step}</li>)}</ol></div></section>
      <ServiceContactForm />
      <Footer />
    </main>
  );
}

function ServiceContactForm() {
  const { copy } = useLocale();
  const [values, setValues] = useState({ name: '', email: '', subject: '', service: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({});
  const [submitState, setSubmitState] = useState<'idle' | 'error' | 'ready' | 'submitting'>('idle');
  const [submissionFailed, setSubmissionFailed] = useState(false);

  const updateValue = (field: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitState('idle');
    setSubmissionFailed(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof typeof values, string>> = {};
    if (!values.name.trim()) nextErrors.name = copy.requiredField;
    if (!values.email.trim()) nextErrors.email = copy.requiredField;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = copy.invalidEmail;
    if (!values.subject.trim()) nextErrors.subject = copy.requiredField;
    if (!values.service) nextErrors.service = copy.chooseServiceError;
    if (!values.message.trim()) nextErrors.message = copy.requiredField;
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitState('error');
      setSubmissionFailed(false);
      return;
    }
    setSubmitState('submitting');
    setSubmissionFailed(false);
    try {
      await submitPortfolioForm({
        _subject: values.subject,
        name: values.name,
        email: values.email,
        subject: values.subject,
        service: values.service,
        message: values.message,
      });
      setSubmitState('ready');
    } catch {
      setSubmitState('error');
      setSubmissionFailed(true);
    }
  };

  const fieldError = (field: keyof typeof values) => errors[field];
  return (
    <section className="service-contact ambient-section section-space two-column">
      <div className="section-copy"><span className="section-kicker">{copy.serviceFormKicker}</span><h2><Markup>{copy.serviceFormTitle}</Markup></h2><p>{copy.serviceFormBody}</p></div>
      <form className="contact-form compact-contact-form" noValidate onSubmit={handleSubmit} aria-describedby={submitState === 'error' ? 'service-form-error' : undefined}>
         <label><span className="field-label">{copy.name}<span className="required-mark" aria-hidden="true">*</span></span><input name="name" value={values.name} onChange={(event) => updateValue('name', event.target.value)} placeholder={copy.yourName} aria-invalid={Boolean(fieldError('name'))} aria-describedby={fieldError('name') ? 'service-error-name' : undefined} />{fieldError('name') && <span className="field-error" id="service-error-name">{fieldError('name')}</span>}</label>
         <label><span className="field-label">{copy.email}<span className="required-mark" aria-hidden="true">*</span></span><input type="email" name="email" value={values.email} onChange={(event) => updateValue('email', event.target.value)} placeholder={copy.yourEmail} aria-invalid={Boolean(fieldError('email'))} aria-describedby={fieldError('email') ? 'service-error-email' : undefined} />{fieldError('email') && <span className="field-error" id="service-error-email">{fieldError('email')}</span>}</label>
         <label><span className="field-label">{copy.subject}<span className="required-mark" aria-hidden="true">*</span></span><input name="subject" value={values.subject} onChange={(event) => updateValue('subject', event.target.value)} placeholder={copy.subjectPlaceholder} aria-invalid={Boolean(fieldError('subject'))} aria-describedby={fieldError('subject') ? 'service-error-subject' : undefined} />{fieldError('subject') && <span className="field-error" id="service-error-subject">{fieldError('subject')}</span>}</label>
         <label><span className="field-label">{copy.serviceNeeded}<span className="required-mark" aria-hidden="true">*</span></span><select name="service" value={values.service} onChange={(event) => updateValue('service', event.target.value)} aria-invalid={Boolean(fieldError('service'))} aria-describedby={fieldError('service') ? 'service-error-service' : undefined}><option value="">{copy.chooseService}</option>{copy.serviceOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select>{fieldError('service') && <span className="field-error" id="service-error-service">{fieldError('service')}</span>}</label>
         <label className="contact-form-message"><span className="field-label">{copy.message}<span className="required-mark" aria-hidden="true">*</span></span><textarea name="message" rows={5} value={values.message} onChange={(event) => updateValue('message', event.target.value)} placeholder={copy.projectDescriptionPlaceholder} aria-invalid={Boolean(fieldError('message'))} aria-describedby={fieldError('message') ? 'service-error-message' : undefined} />{fieldError('message') && <span className="field-error" id="service-error-message">{fieldError('message')}</span>}</label>
         <button className="template-button" type="submit" disabled={submitState === 'submitting'}><span>{copy.sendMessage}</span><ArrowRight size={17} /></button>
         {submitState === 'error' && <p className="form-error" id="service-form-error" role="alert">{submissionFailed ? (formEndpoint ? copy.formSubmitError : copy.emailFallback) : copy.formError}</p>}
         {submitState === 'ready' && <p className="form-success" role="status">{copy.emailReady}</p>}
      </form>
    </section>
  );
}

function About() {
  const { copy } = useLocale();
  const portraitAvailable = usePublicAsset('/portfolio/assets/ines-portrait.jpg');
  return (
    <main className="template-page ambient-page page-container">
      <section className="inner-banner about-hero two-column"><AmbientVisual variant="orbit" /><div><span className="section-kicker">{copy.aboutKicker}</span><h1><Markup>{copy.aboutTitle}</Markup></h1><p>{copy.aboutBody}</p></div><div className={`portrait-placeholder ${portraitAvailable ? 'has-image' : ''}`}>{portraitAvailable ? <img src="/portfolio/assets/ines-portrait.jpg" alt="Portrait of Ines Mlaouhi" /> : <><span>{copy.portraitPlaceholder}</span><small>1200 × 1500 · 4:5</small></>}</div></section>
       <section className="about-intro ambient-section section-space two-column"><h2><Markup>{copy.aboutIntroTitle}</Markup></h2><div className="section-copy"><p>{copy.aboutIntroBody}</p><p>{copy.aboutSecondBody}</p></div></section>
      <section className="tools-section ambient-section section-space two-column"><h2><Markup>{copy.toolsTitle}</Markup></h2><div className="tool-list">{copy.tools.map((tool, index) => <div key={tool}><span>0{index + 1}</span><strong>{tool}</strong></div>)}</div></section>
       <section className="approach-section ambient-section section-space two-column"><h2><Markup>{copy.approachTitle}</Markup></h2><div className="section-copy"><p>{copy.approachBody}</p><p>{copy.aboutSecondBody}</p></div></section>
      <Footer />
    </main>
  );
}

const trainingInquiryCopy: Record<Language, {
  kicker: string;
  title: string;
  body: string;
  interest: string;
  interestPlaceholder: string;
}> = {
  en: { kicker: 'A focused conversation', title: 'Talk about training.', body: 'Tell me what you would like to learn or facilitate. A few honest lines are enough to start shaping the right format.', interest: 'What are you interested in?', interestPlaceholder: 'Workshop for my team, 1:1 mentoring, or something else' },
  fr: { kicker: 'Une conversation ciblée', title: 'Parlons de formation.', body: 'Dites-moi ce que vous souhaitez apprendre ou transmettre. Quelques lignes sincères suffisent pour imaginer le bon format.', interest: 'Quel est votre besoin ?', interestPlaceholder: 'Atelier pour mon équipe, mentorat individuel ou autre' },
  de: { kicker: 'Ein fokussiertes Gespräch', title: 'Über Training sprechen.', body: 'Erzähl mir, was du lernen oder vermitteln möchtest. Ein paar ehrliche Zeilen reichen für den nächsten Schritt.', interest: 'Worum geht es?', interestPlaceholder: 'Workshop für mein Team, 1:1 Mentoring oder etwas anderes' },
  es: { kicker: 'Una conversación concreta', title: 'Hablemos de formación.', body: 'Cuéntame qué te gustaría aprender o facilitar. Unas líneas sinceras bastan para definir el formato adecuado.', interest: '¿Qué te interesa?', interestPlaceholder: 'Taller para mi equipo, mentoría 1:1 u otra idea' },
};

function TrainingInquiryForm() {
  const { language, copy } = useLocale();
  const inquiry = trainingInquiryCopy[language];
  const [values, setValues] = useState({ name: '', email: '', interest: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({});
  const [submitState, setSubmitState] = useState<'idle' | 'error' | 'ready'>('idle');
  const [submissionFailed, setSubmissionFailed] = useState(false);

  const updateValue = (field: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitState('idle');
    setSubmissionFailed(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof typeof values, string>> = {};
    if (!values.name.trim()) nextErrors.name = copy.requiredField;
    if (!values.email.trim()) nextErrors.email = copy.requiredField;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = copy.invalidEmail;
    if (!values.interest.trim()) nextErrors.interest = copy.requiredField;
    if (!values.message.trim()) nextErrors.message = copy.requiredField;
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState('error');
      setSubmissionFailed(false);
      return;
    }
    setSubmissionFailed(false);
    try {
      await submitPortfolioForm({
        _subject: inquiry.title,
        name: values.name,
        email: values.email,
        interest: values.interest,
        message: values.message,
      });
      setSubmitState('ready');
    } catch {
      setSubmitState('error');
      setSubmissionFailed(true);
    }
  };

  const fieldError = (field: keyof typeof values) => errors[field];
  return (
    <section className="training-contact section-space">
      <div className="section-heading">
        <div><span className="section-kicker">{inquiry.kicker}</span><h2>{inquiry.title}</h2></div>
        <p>{inquiry.body}</p>
      </div>
      <form className="contact-form" noValidate onSubmit={handleSubmit} aria-describedby={submitState === 'error' ? 'training-form-error' : undefined}>
         <label><span className="field-label">{copy.name}<span className="required-mark" aria-hidden="true">*</span></span><input name="name" value={values.name} onChange={(event) => updateValue('name', event.target.value)} placeholder={copy.yourName} aria-invalid={Boolean(fieldError('name'))} aria-describedby={fieldError('name') ? 'training-error-name' : undefined} />{fieldError('name') && <span className="field-error" id="training-error-name">{fieldError('name')}</span>}</label>
         <label><span className="field-label">{copy.email}<span className="required-mark" aria-hidden="true">*</span></span><input type="email" name="email" value={values.email} onChange={(event) => updateValue('email', event.target.value)} placeholder={copy.yourEmail} aria-invalid={Boolean(fieldError('email'))} aria-describedby={fieldError('email') ? 'training-error-email' : undefined} />{fieldError('email') && <span className="field-error" id="training-error-email">{fieldError('email')}</span>}</label>
         <label className="contact-form-message"><span className="field-label">{inquiry.interest}<span className="required-mark" aria-hidden="true">*</span></span><input name="interest" value={values.interest} onChange={(event) => updateValue('interest', event.target.value)} placeholder={inquiry.interestPlaceholder} aria-invalid={Boolean(fieldError('interest'))} aria-describedby={fieldError('interest') ? 'training-error-interest' : undefined} />{fieldError('interest') && <span className="field-error" id="training-error-interest">{fieldError('interest')}</span>}</label>
         <label className="contact-form-message"><span className="field-label">{copy.message}<span className="required-mark" aria-hidden="true">*</span></span><textarea name="message" rows={6} value={values.message} onChange={(event) => updateValue('message', event.target.value)} placeholder={copy.projectDescriptionPlaceholder} aria-invalid={Boolean(fieldError('message'))} aria-describedby={fieldError('message') ? 'training-error-message' : undefined} />{fieldError('message') && <span className="field-error" id="training-error-message">{fieldError('message')}</span>}</label>
         <button className="template-button" type="submit"><span>{copy.sendMessage}</span><ArrowRight size={17} /></button>
         {submitState === 'error' && <p className="form-error" id="training-form-error" role="alert">{submissionFailed ? (formEndpoint ? copy.formSubmitError : copy.emailFallback) : copy.formError}</p>}
         {submitState === 'ready' && <p className="form-success" role="status">{copy.emailReady}</p>}
      </form>
    </section>
  );
}

function Trainings() {
  const { copy, language } = useLocale();
  const training = projects.find((project) => project.slug === 'graphic-design-training');
  const displayTraining = training ? localizedProject(training, language, copy) : undefined;
  const trainingVideoAvailable = usePublicAsset('/portfolio/assets/training/training-reel.mp4');
  const trainingGallery = [1, 2, 3].map((index) => `/portfolio/assets/training/training-0${index}.jpg`);
  return (
    <main className="template-page ambient-page page-container">
       <section className="inner-banner"><AmbientVisual variant="motion" /><span className="section-kicker">{copy.trainingKicker}</span><h1><Markup>{copy.trainingTitle}</Markup></h1><p>{copy.trainingBody}</p></section>
       <section className="training-feature section-space two-column">
          <div><span className="section-kicker">{copy.trainingLabel}</span><h2>{copy.trainingLabel}</h2><p>{copy.trainingProjectBody}</p></div>
          {trainingVideoAvailable ? <div className="video-placeholder-screen training-video-screen training-video-real"><video src="/portfolio/assets/training/training-reel.mp4" controls playsInline muted loop aria-label={copy.trainingLabel} /></div> : <div className="video-placeholder-screen training-video-screen"><span className="video-placeholder-play" aria-hidden="true">▶</span><span>{copy.placeholder} · 1080 × 1920</span></div>}
       </section>
       <section className="training-approach ambient-section section-space two-column">
         <h2><Markup>{copy.trainingApproachTitle}</Markup></h2>
         <div className="section-copy"><p>{copy.trainingApproachBody}</p><p>{displayTraining?.approach ?? copy.trainingProjectBody}</p></div>
      </section>
      <section className="training-gallery section-space" aria-label={copy.trainingLabel}>
          {[0, 1, 2].map((index) => <div className={`training-gallery-item training-gallery-item-${index + 1}`} key={index}><PlaceholderVisual project={{ ...(displayTraining ?? training ?? projects[0]), title: `${displayTraining?.title ?? copy.trainingLabel} ${index + 1}`, gallery: [trainingGallery[index]] }} variant="gallery" /></div>)}
      </section>
      <TrainingInquiryForm />
      <Footer />
    </main>
  );
}

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  service: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

function Contact() {
  const { copy } = useLocale();
  const [values, setValues] = useState<ContactFormValues>({ name: '', email: '', subject: '', service: '', message: '' });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitState, setSubmitState] = useState<'idle' | 'error' | 'ready'>('idle');
  const [submissionFailed, setSubmissionFailed] = useState(false);

  const updateValue = (field: keyof ContactFormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitState('idle');
    setSubmissionFailed(false);
  };

  const validate = () => {
    const nextErrors: ContactErrors = {};
    if (!values.name.trim()) nextErrors.name = copy.requiredField;
    if (!values.email.trim()) nextErrors.email = copy.requiredField;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = copy.invalidEmail;
    if (!values.subject.trim()) nextErrors.subject = copy.requiredField;
    if (!values.service) nextErrors.service = copy.chooseServiceError;
    if (!values.message.trim()) nextErrors.message = copy.requiredField;
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState('error');
      setSubmissionFailed(false);
      return;
    }
    setSubmissionFailed(false);
    try {
      await submitPortfolioForm({
        _subject: values.subject,
        name: values.name,
        email: values.email,
        subject: values.subject,
        service: values.service,
        message: values.message,
      });
      setSubmitState('ready');
    } catch {
      setSubmitState('error');
      setSubmissionFailed(true);
    }
  };

  const fieldError = (field: keyof ContactFormValues) => errors[field];

  return (
    <main className="template-page ambient-page page-container">
       <section className="inner-banner contact-hero"><AmbientVisual variant="contact" /><span className="section-kicker">{copy.contactKicker}</span><h1><Markup>{copy.contactTitle}</Markup></h1><p>{copy.contactBody}</p></section>
       <section className="contact-section section-space two-column">
         <div><h2><Markup>{copy.contactHeading}</Markup></h2><p className="contact-intro">{copy.contactBody}</p><a className="text-link" href="mailto:ines.mlaouhi.pro@gmail.com">ines.mlaouhi.pro@gmail.com <ArrowUpRight size={15} /></a></div>
        <form className="contact-form" noValidate onSubmit={handleSubmit} aria-describedby={submitState === 'error' ? 'contact-form-error' : undefined}>
           <label><span className="field-label">{copy.name}<span className="required-mark" aria-hidden="true">*</span></span><input name="name" value={values.name} onChange={(event) => updateValue('name', event.target.value)} placeholder={copy.yourName} aria-invalid={Boolean(fieldError('name'))} aria-describedby={fieldError('name') ? 'error-name' : undefined} />{fieldError('name') && <span className="field-error" id="error-name">{fieldError('name')}</span>}</label>
           <label><span className="field-label">{copy.email}<span className="required-mark" aria-hidden="true">*</span></span><input type="email" name="email" value={values.email} onChange={(event) => updateValue('email', event.target.value)} placeholder={copy.yourEmail} aria-invalid={Boolean(fieldError('email'))} aria-describedby={fieldError('email') ? 'error-email' : undefined} />{fieldError('email') && <span className="field-error" id="error-email">{fieldError('email')}</span>}</label>
           <label><span className="field-label">{copy.subject}<span className="required-mark" aria-hidden="true">*</span></span><input name="subject" value={values.subject} onChange={(event) => updateValue('subject', event.target.value)} placeholder={copy.subjectPlaceholder} aria-invalid={Boolean(fieldError('subject'))} aria-describedby={fieldError('subject') ? 'error-subject' : undefined} />{fieldError('subject') && <span className="field-error" id="error-subject">{fieldError('subject')}</span>}</label>
           <label><span className="field-label">{copy.serviceNeeded}<span className="required-mark" aria-hidden="true">*</span></span><select name="service" value={values.service} onChange={(event) => updateValue('service', event.target.value)} aria-invalid={Boolean(fieldError('service'))} aria-describedby={fieldError('service') ? 'error-service' : undefined}><option value="">{copy.chooseService}</option>{copy.serviceOptions.map((option) => <option value={option} key={option}>{option}</option>)}</select>{fieldError('service') && <span className="field-error" id="error-service">{fieldError('service')}</span>}</label>
           <label className="contact-form-message"><span className="field-label">{copy.projectDescription}<span className="required-mark" aria-hidden="true">*</span></span><textarea name="message" rows={7} value={values.message} onChange={(event) => updateValue('message', event.target.value)} placeholder={copy.projectDescriptionPlaceholder} aria-invalid={Boolean(fieldError('message'))} aria-describedby={fieldError('message') ? 'error-message' : undefined} />{fieldError('message') && <span className="field-error" id="error-message">{fieldError('message')}</span>}</label>
          <button className="template-button" type="submit"><span>{copy.sendMessage}</span><ArrowRight size={17} /></button>
           {submitState === 'error' && <p className="form-error" id="contact-form-error" role="alert">{submissionFailed ? (formEndpoint ? copy.formSubmitError : copy.emailFallback) : copy.formError}</p>}
           {submitState === 'ready' && <p className="form-success" role="status">{copy.emailReady}</p>}
        </form>
      </section>
      <Footer />
    </main>
  );
}

function GalleryItem({ project, index }: { project: Project; index: number }) {
  const { copy } = useLocale();
  const [open, setOpen] = useState(false);
  const galleryProject = { ...project, title: `${project.title} ${index + 1}`, gallery: project.gallery?.slice(index, index + 1) };

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <>
      <button type="button" className={`gallery-trigger gallery-trigger-${index}`} onClick={() => setOpen(true)} aria-label={`${copy.openImage}: ${project.title} ${index + 1}`}>
        <PlaceholderVisual project={galleryProject} variant="gallery" />
      </button>
      {open && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${copy.openImage}: ${project.title}`}>
          <button type="button" className="gallery-lightbox-backdrop" onClick={() => setOpen(false)} aria-label={copy.closeMenu} />
          <div className="gallery-lightbox-content">
            <button type="button" className="menu-close" onClick={() => setOpen(false)} aria-label={copy.closeMenu}><X size={20} /></button>
            <PlaceholderVisual project={galleryProject} variant="detail" />
          </div>
        </div>
      )}
    </>
  );
}

function ProjectDetailGallery({ project, layout }: { project: Project; layout: ProjectDetailLayout }) {
  const { copy } = useLocale();
  return (
    <section className={`detail-gallery detail-gallery-${layout}`} aria-label={copy.openImage}>
      {layout === 'motion' && (
        <div className="motion-reel">
          <MotionReelVisual project={project} />
          <div className="motion-reel-copy"><span className="section-kicker">Motion / 3D study</span><p>{project.description}</p></div>
        </div>
      )}
      {[0, 1, 2].map((index) => <GalleryItem key={index} project={project} index={index} />)}
    </section>
  );
}

function MotionReelVisual({ project }: { project: Project }) {
  const { copy } = useLocale();
  const videoAvailable = usePublicAsset(project.video);
  return videoAvailable ? (
    <div className="motion-reel-screen motion-reel-real">
      <video src={project.video} controls playsInline muted loop aria-label={`${project.title} motion reel`} />
    </div>
  ) : (
    <div className="motion-reel-screen">
      <PlaceholderVisual project={project} variant="detail" />
      <span className="motion-reel-play" aria-hidden="true">▶</span>
      <span className="sr-only">{copy.placeholder}</span>
    </div>
  );
}
function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { copy, language } = useLocale();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  const displayProject = localizedProject(project, language, copy);
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];
  const detailLayout = getProjectDetailLayout(project);
  return (
    <main className={`template-page ambient-page page-container project-detail project-detail-${detailLayout}`}>
      <section className={`project-banner project-banner-${detailLayout}`}><AmbientVisual variant={detailLayout === 'motion' ? 'motion' : 'orbit'} /><Link href="/work" className="project-back-link"><ArrowLeft size={15} />{copy.allProjects}</Link><span className="section-kicker">{displayProject.category} / {displayProject.year}</span><h1>{displayProject.title}</h1><p>{displayProject.description}</p><div className="project-meta"><span><small>{copy.role}</small>{displayProject.role}</span><span><small>{copy.category}</small>{displayProject.category}</span><span><small>{copy.tags}</small>{displayProject.tags.join(' · ')}</span>{displayProject.client && <span><small>{copy.client}</small>{displayProject.client}</span>}{displayProject.tools?.length && <span><small>{copy.toolsLabel}</small>{displayProject.tools.join(' · ')}</span>}</div></section>
      <div className="project-hero-placeholder"><PlaceholderVisual project={displayProject} variant="detail" /></div>
      <section className="project-story two-column"><h2><Markup>{copy.thinking}</Markup></h2><div className="section-copy"><p>{displayProject.context}</p><p>{displayProject.approach}</p>{displayProject.externalUrl && <a className="text-link" href={displayProject.externalUrl} target="_blank" rel="noopener noreferrer">{copy.visitProject} <ArrowUpRight size={15} /></a>}<small className="translation-note">{copy.projectContentNotice}</small></div></section>
      <ProjectDetailGallery project={project} layout={detailLayout} />
      <nav className="project-navigation" aria-label={copy.allProjects}>
        <Link href={`/work/${previous.slug}`} className="project-navigation-link"><span>{copy.previousProject}</span><strong>{localizedProject(previous, language, copy).title}</strong><ArrowLeft size={15} /></Link>
        <Link href="/work" className="project-navigation-link project-navigation-all"><span>{copy.allProjects}</span><strong>{copy.work}</strong></Link>
        <Link href={`/work/${next.slug}`} className="project-navigation-link project-navigation-next"><span>{copy.nextProject}</span><strong>{localizedProject(next, language, copy).title}</strong><ArrowRight size={15} /></Link>
      </nav>
      <Footer />
    </main>
  );
}

function RouteMeta() {
  const [location] = useLocation();
  const { copy } = useLocale();
  useEffect(() => {
    const projectSlug = (location.startsWith('/project/') || location.startsWith('/work/')) ? location.split('/').pop() : undefined;
    const project = getProject(projectSlug);
    const sectionTitles: Record<string, string> = {
      '/': copy.home,
      '/work': copy.work,
      '/services': copy.services,
      '/about': copy.about,
      '/trainings': copy.trainings,
      '/contact': copy.contact,
    };
    const pageTitle = project ? `${project.title} — Ines Mlaouhi` : `${sectionTitles[location] ?? '404'} — Ines Mlaouhi`;
    document.title = pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', project?.description ?? copy.heroBody);
  }, [copy, location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [location]);
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.template-page > section, .template-page > .template-footer');
    elements.forEach((element) => element.classList.add('scroll-reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location]);
  return (
    <ErrorBoundary resetKey={location}>
      <RouteMeta />
      <Header />
      <div className="page-transition" key={location}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/trainings" component={Trainings} />
          <Route path="/contact" component={Contact} />
          <Route path="/work/:slug" component={ProjectPage} />
          <Route path="/project/:slug" component={ProjectPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <ProgressRail />
      <BackToTop />
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LocaleProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <div className="site-shell"><IntroPreloader /><SiteAtmosphere /><CursorBall /><Router /></div>
          </WouterRouter>
        </LocaleProvider>
        <><Analytics /><SpeedInsights /></>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;