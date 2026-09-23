import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  Calculator,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  MessageCircle,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-interellos-brand.png";

const WHATSAPP_URL =
  "https://wa.me/5511952135480?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Interellos%20Educa%C3%A7%C3%A3o%20e%20quero%20saber%20mais.";

const courses = [
  {
    title: "Precificação Blindada para Empresas de Facilities",
    description:
      "Metodologia para precificar, negociar e reajustar contratos com margem real — do custo do posto à defesa de preço e à reforma tributária.",
    price: "A partir de R$ 599",
    detail: "R$ 1.299 no pacote completo com mentoria",
    href: "https://precificacao.interellos.com.br",
    icon: Calculator,
    featured: true,
    topics: ["Custo do posto", "Ponto de equilíbrio", "IBS e CBS"],
  },
  {
    title: "IA Aplicada aos Negócios de Facilities",
    description:
      "Use IA para criar propostas, analisar editais, estruturar planilhas e produzir relatórios em minutos, sem aumentar a folha.",
    price: "A partir de R$ 297",
    detail: "R$ 597 com sessão individual mentorada",
    href: "https://ia.interellos.com.br",
    icon: Bot,
    featured: false,
    topics: ["Método V.E.R.I.F.I.C.A.", "Aplicação prática", "Mais produtividade"],
  },
];

const mentors = [
  {
    name: "Luilson Gomes",
    initials: "LG",
    eyebrow: "Fundador e mentor",
    description:
      "30 anos em facilities. Foi do zero a mais de 2.200 funcionários em 14 anos, liderou contratos públicos e privados, atravessou uma recuperação judicial e reconstruiu.",
    href: "https://luilson.interellos.com.br",
  },
  {
    name: "Anderson Claudino",
    initials: "AC",
    eyebrow: "Co-instrutor",
    description:
      "Mais de 20 anos no setor e especialista em Inteligência Artificial aplicada aos negócios, transformando tecnologia em ferramentas úteis para a operação.",
    href: "https://anderson.interellos.com.br",
  },
];

const testimonials = [
  {
    name: "Maurício",
    company: "GetClean",
    videoId: "3KgGn1wN8wI",
    quote:
      "Um curso que me auxiliou muito, principalmente na precificação de serviço, gestão de margem e gestão do contrato.",
  },
  {
    name: "Alexandre",
    company: "AH Facilities",
    videoId: "RWRRHWbVoyI",
    quote:
      "Passei a enxergar com clareza os pontos de ajuste no preço de venda. A negociação de novos postos ficou muito mais favorável.",
  },
  {
    name: "Márcia Leite",
    company: "Glad Services",
    videoId: "suk7vVjlEwQ",
    quote:
      "Ganhei clareza para orientar o time comercial. A negociação ficou mais estratégica.",
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/interellos.educacao", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/interellos-educação", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61586831633149", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@Interellos.educacao", icon: Youtube },
];

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function VideoTestimonial({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="testimonial-card group">
      <div className="relative aspect-video overflow-hidden bg-brand-graphite">
        {isPlaying ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${testimonial.videoId}?autoplay=1&rel=0`}
            title={`Depoimento de ${testimonial.name}, ${testimonial.company}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://i.ytimg.com/vi/${testimonial.videoId}/hqdefault.jpg`}
              alt={`Depoimento em vídeo de ${testimonial.name}, da ${testimonial.company}`}
              className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite/70 via-transparent to-transparent" />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Reproduzir depoimento de ${testimonial.name}`}
              onClick={() => setIsPlaying(true)}
              className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-white/30 bg-brand-white/95 text-primary shadow-lg hover:bg-brand-white hover:text-brand-purple"
            >
              <Play className="ml-1 h-6 w-6 fill-current" />
            </Button>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Quote className="mb-4 h-6 w-6 text-brand-purple" aria-hidden="true" />
        <blockquote className="flex-1 text-base leading-relaxed text-foreground">“{testimonial.quote}”</blockquote>
        <div className="mt-6 border-t border-border pt-4">
          <p className="font-display font-bold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
    </article>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="topo" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-white/10 bg-brand-graphite/90 backdrop-blur-xl">
        <nav className="site-container flex h-20 items-center justify-between" aria-label="Navegação principal">
          <a href="#topo" onClick={closeMenu} aria-label="Interellos Educação — início" className="shrink-0">
            <img src={logo} alt="Interellos Educação" className="h-14 w-auto" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#cursos" className="nav-link">Cursos</a>
            <a href="#mentores" className="nav-link">Mentores</a>
            <a href="#contato" className="nav-link">Contato</a>
          </div>

          <div className="hidden md:block">
            <Button asChild className="whatsapp-button h-11 px-5">
              <ExternalLink href={WHATSAPP_URL}>
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </ExternalLink>
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-brand-white hover:bg-brand-white/10 hover:text-brand-white md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>

        {menuOpen && (
          <div className="border-t border-brand-white/10 bg-brand-graphite px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[
                ["Cursos", "#cursos"],
                ["Mentores", "#mentores"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu} className="rounded-md px-4 py-3 font-medium text-brand-white/85 hover:bg-brand-white/10">
                  {label}
                </a>
              ))}
              <Button asChild className="whatsapp-button mt-3 w-full">
                <ExternalLink href={WHATSAPP_URL}>
                  <MessageCircle /> Falar no WhatsApp
                </ExternalLink>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="hero-section relative flex min-h-[760px] items-center overflow-hidden pt-20">
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="site-container relative z-10 py-20 md:py-28">
            <div className="max-w-5xl">
              <p className="eyebrow-dark mb-7">
                <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                Educação para donos de empresas de facilities
              </p>
              <h1 className="max-w-5xl font-display text-4xl font-bold leading-[1.07] text-brand-white sm:text-5xl md:text-7xl">
                Domine a precificação dos seus contratos e{" "}
                <span className="signature-text">pare de ser refém do operacional</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-brand-white/70 md:text-xl">
                Conhecimento de quem vive facilities há 30 anos, transformado em ferramentas práticas para você proteger margem, negociar melhor e liderar com clareza.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="brand-button h-13 px-7 text-base">
                  <a href="#cursos">Ver os cursos <ArrowRight /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-brand-white/25 bg-transparent px-7 text-base text-brand-white hover:bg-brand-white/10 hover:text-brand-white">
                  <ExternalLink href={WHATSAPP_URL}><MessageCircle /> Falar no WhatsApp</ExternalLink>
                </Button>
              </div>
            </div>

            <div className="mt-16 grid max-w-4xl grid-cols-1 border-y border-brand-white/15 sm:grid-cols-3">
              {[
                ["+300", "alunos treinados"],
                ["+50", "empresas de facilities pelo método"],
                ["+6.000", "donos e gestores nas redes"],
              ].map(([value, label], index) => (
                <div key={value} className={`py-6 sm:px-7 ${index > 0 ? "border-t border-brand-white/15 sm:border-l sm:border-t-0" : ""}`}>
                  <p className="font-mono text-3xl font-bold text-brand-cyan md:text-4xl">{value}</p>
                  <p className="mt-1 text-sm leading-snug text-brand-white/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-20 bg-background section-space">
          <div className="section-accent" />
          <div className="site-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow">O que é a Interellos</p>
              <h2 className="section-title mt-5">Educação feita dentro da realidade de facilities.</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                A <strong className="text-foreground">Interellos Educação</strong> prepara donos e gestores de empresas de limpeza, portaria, segurança desarmada e manutenção em todo o Brasil para saírem do operacional e assumirem o papel de estrategistas.
              </p>
              <p>
                O foco está onde a margem nasce ou desaparece: na precificação dos contratos. Mais recentemente, incorporamos Inteligência Artificial aplicada ao negócio para acelerar tarefas sem perder o controle e a capacidade de decisão.
              </p>
              <div className="mechanism-card">
                <ShieldCheck className="h-7 w-7 shrink-0 text-brand-blue" aria-hidden="true" />
                <p className="text-base text-foreground">
                  <strong>Nosso mecanismo é simples:</strong> 30 anos de trincheira real em facilities, ferramentas práticas como planilhas e IA, e foco em valor percebido — nunca em achismo de preço.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cursos" className="scroll-mt-20 bg-secondary section-space">
          <div className="section-accent" />
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">Nossos cursos</p>
              <h2 className="section-title mt-5">Dois caminhos práticos para ganhar margem e tempo.</h2>
              <p className="section-lead mt-5">Escolha o desafio mais urgente e conheça a formação completa na página do curso.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {courses.map((course) => (
                <article key={course.title} className={course.featured ? "course-card course-card-featured" : "course-card"}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <course.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-bold leading-tight text-foreground md:text-3xl">{course.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{course.description}</p>
                  <ul className="mt-6 space-y-3">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-cyan/20 text-primary"><Check className="h-3 w-3" /></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="font-mono text-2xl font-bold text-primary">{course.price}</p>
                    <p className="mt-1 min-h-5 text-sm text-muted-foreground">{course.detail}</p>
                    <Button asChild className={course.featured ? "brand-button mt-6 w-full" : "mt-6 w-full rounded-full"}>
                      <ExternalLink href={course.href}>Ver o curso <ArrowRight /></ExternalLink>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="mentores" className="scroll-mt-20 bg-background section-space">
          <div className="section-accent" />
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">Quem ensina</p>
              <h2 className="section-title mt-5">Experiência de quem conhece o peso das decisões.</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {mentors.map((mentor) => (
                <article key={mentor.name} className="mentor-card">
                  <div className="mentor-monogram" aria-hidden="true">{mentor.initials}</div>
                  <div className="flex flex-1 flex-col p-7 md:p-9">
                    <p className="eyebrow">{mentor.eyebrow}</p>
                    <h3 className="mt-4 font-display text-3xl font-bold text-foreground">{mentor.name}</h3>
                    <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{mentor.description}</p>
                    <ExternalLink href={mentor.href} className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-brand-purple">
                      Conhecer {mentor.name.split(" ")[0]} <ArrowRight className="h-4 w-4" />
                    </ExternalLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="bg-secondary section-space">
          <div className="section-accent" />
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="eyebrow">Resultados reais</p>
              <h2 className="section-title mt-5">O que dizem quem já fez.</h2>
              <p className="section-lead mt-5">Donos e gestores contando, com as próprias palavras, o que mudou na rotina comercial.</p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => <VideoTestimonial key={testimonial.videoId} testimonial={testimonial} />)}
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 bg-brand-graphite py-20 text-brand-white md:py-28">
          <div className="site-container">
            <div className="mx-auto max-w-4xl text-center">
              <Sparkles className="mx-auto h-8 w-8 text-brand-cyan" aria-hidden="true" />
              <h2 className="mt-6 font-display text-4xl font-bold text-brand-white md:text-6xl">Fale com a gente.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-white/65">
                Conte em que momento sua empresa está. Nós ajudamos você a encontrar o próximo passo certo dentro do ecossistema Interellos.
              </p>
              <Button asChild size="lg" className="whatsapp-button mt-9 h-13 px-7 text-base">
                <ExternalLink href={WHATSAPP_URL}><MessageCircle /> Conversar no WhatsApp</ExternalLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-white/10 bg-brand-graphite py-14 text-brand-white">
        <div className="site-container">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#topo" aria-label="Voltar ao início"><img src={logo} alt="Interellos Educação" className="h-20 w-auto" /></a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-white/60">Educação prática para donos e gestores de empresas de facilities.</p>
              <div className="mt-6 flex gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Button key={label} asChild variant="ghost" size="icon" className="rounded-full border border-brand-white/15 text-brand-white/75 hover:bg-brand-white/10 hover:text-brand-white">
                    <ExternalLink href={href} className="" ><Icon /><span className="sr-only">{label}</span></ExternalLink>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="footer-title">Navegação</h3>
              <div className="footer-links">
                <a href="#sobre">A Interellos</a><a href="#cursos">Cursos</a><a href="#mentores">Mentores</a><a href="#contato">Contato</a>
              </div>
            </div>
            <div>
              <h3 className="footer-title">Ecossistema</h3>
              <div className="footer-links">
                <ExternalLink href="https://precificacao.interellos.com.br">Precificação Blindada</ExternalLink>
                <ExternalLink href="https://ia.interellos.com.br">IA para Facilities</ExternalLink>
                <ExternalLink href="https://luilson.interellos.com.br">Luilson Gomes</ExternalLink>
                <ExternalLink href="https://anderson.interellos.com.br">Anderson Claudino</ExternalLink>
              </div>
            </div>
            <div>
              <h3 className="footer-title">Dados legais</h3>
              <address className="space-y-2 text-sm not-italic leading-relaxed text-brand-white/60">
                <p>Interellos Intermediação de Negócios LTDA</p>
                <p>CNPJ 40.937.083/0001-64</p>
                <p>Rua John Harrison, 299 — Lapa<br />São Paulo/SP, CEP 05074-080</p>
                <a className="block hover:text-brand-white" href="mailto:contato@interellos.com.br">contato@interellos.com.br</a>
              </address>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-brand-white/10 pt-7 text-xs text-brand-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Interellos Educação. Todos os direitos reservados.</p>
            <div className="flex flex-wrap gap-5">
              <ExternalLink href="https://luilson.interellos.com.br/politica-de-privacidade">Política de Privacidade</ExternalLink>
              <ExternalLink href="https://luilson.interellos.com.br/termos-de-uso">Termos de Uso</ExternalLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}