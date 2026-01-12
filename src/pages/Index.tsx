import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SocialProof } from '@/components/sections/SocialProof';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { CourseCard } from '@/components/cards/CourseCard';
import { EventCard } from '@/components/cards/EventCard';
import { CaseCard } from '@/components/cards/CaseCard';
import { LeadForm } from '@/components/forms/LeadForm';
import { Button } from '@/components/ui/button';
import { courses, events, cases } from '@/data/mockData';
import { 
  ArrowRight, 
  GraduationCap, 
  Users, 
  Briefcase,
  Monitor,
  Layers,
  MapPin
} from 'lucide-react';

export default function Index() {
  const featuredCourses = courses.filter(c => c.featured).slice(0, 6);
  const featuredEvents = events.filter(e => e.featured).slice(0, 3);
  const featuredCases = cases.filter(c => c.featured).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent min-h-[80vh] flex items-center">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cta/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
          {/* Geometric patterns */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-2xl rotate-12" />
          <div className="absolute bottom-32 right-40 w-20 h-20 border border-white/10 rounded-xl -rotate-12" />
          <div className="absolute top-40 left-20 w-16 h-16 bg-cta/30 rounded-lg rotate-45" />
        </div>

        <div className="container-section relative z-10 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span className="text-sm font-medium text-white/90">20+ anos formando líderes de mercado</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in text-white">
              Desenvolvimento e 
              <span className="block text-cta">aperfeiçoamento</span>
              para empreendedores
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: '100ms' }}>
              Transforme seu negócio com metodologias comprovadas. 
              Mais de <span className="font-semibold text-white">15.000 profissionais</span> já 
              aceleraram suas carreiras conosco.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/cursos">
                <Button size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground w-full sm:w-auto text-lg px-8 py-6 shadow-lg shadow-cta/30">
                  Ver Cursos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto text-lg px-8 py-6 backdrop-blur-sm">
                  Solicitar Proposta
                </Button>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">20+</div>
                <div className="text-sm text-white/60">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">15k+</div>
                <div className="text-sm text-white/60">Alunos treinados</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Empresas atendidas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Solutions Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossas Solucoes
            </h2>
            <p className="text-lg text-muted-foreground">
              Desenvolvemos pessoas e organizacoes com metodologias praticas e foco em resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/cursos" className="card-base p-8 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Cursos e Treinamentos
              </h3>
              <p className="text-muted-foreground mb-4">
                Formacoes completas em gestao, estrategia, financas, lideranca e mais.
              </p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Conhecer <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link to="/mentorias" className="card-base p-8 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Mentorias
              </h3>
              <p className="text-muted-foreground mb-4">
                Acompanhamento individual ou em grupo com especialistas experientes.
              </p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Conhecer <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>

            <Link to="/consultoria" className="card-base p-8 text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Consultorias
              </h3>
              <p className="text-muted-foreground mb-4">
                Solucoes personalizadas para desafios especificos da sua empresa.
              </p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Conhecer <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="section-padding bg-secondary">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Modalidades
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o formato que melhor se adapta a sua rotina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 text-center border border-border">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                <Monitor className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">EAD</h3>
              <p className="text-muted-foreground">
                Estude no seu ritmo, de qualquer lugar, com acesso a plataforma online.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center border border-border">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-highlight/10 mb-4">
                <Layers className="h-7 w-7 text-highlight-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Hibrido</h3>
              <p className="text-muted-foreground">
                Combine o melhor do online e presencial para uma experiencia completa.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 text-center border border-border relative overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 text-xs font-medium bg-success text-success-foreground rounded-full">
                  Destaque
                </span>
              </div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-success/10 mb-4">
                <MapPin className="h-7 w-7 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Presencial</h3>
              <p className="text-muted-foreground mb-3">
                Imersao total com networking e troca de experiencias.
              </p>
              <p className="text-sm font-medium text-success">
                Lapa - Sao Paulo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses/Events */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proximas Oportunidades
              </h2>
              <p className="text-lg text-muted-foreground">
                Cursos e eventos com inscricoes abertas
              </p>
            </div>
            <Link to="/cursos" className="mt-4 md:mt-0">
              <Button variant="outline">
                Ver todos os cursos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="section-padding bg-secondary">
        <div className="container-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cases de Sucesso
              </h2>
              <p className="text-lg text-muted-foreground">
                Resultados reais com empresas de diversos portes e setores
              </p>
            </div>
            <Link to="/cases" className="mt-4 md:mt-0">
              <Button variant="outline">
                Ver todos os cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proximos Eventos
              </h2>
              <p className="text-lg text-muted-foreground">
                Encontros, workshops e oportunidades de networking
              </p>
            </div>
            <Link to="/eventos" className="mt-4 md:mt-0">
              <Button variant="outline">
                Ver agenda completa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="relative section-padding overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cta via-cta-hover to-accent" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '500ms' }} />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1000ms' }} />
        </div>
        
        <div className="container-section relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-sm font-medium">Parcele em ate 10x sem juros</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Pronto para
                <span className="block text-white/90">transformar sua empresa?</span>
              </h2>
              
              <p className="text-xl text-white/85 mb-8 leading-relaxed">
                Junte-se a mais de 15.000 profissionais que ja desenvolveram suas habilidades conosco.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Cursos</div>
                      <div className="font-semibold text-white">Individuais</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Mentorias</div>
                      <div className="font-semibold text-white">Personalizadas</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Consultoria</div>
                      <div className="font-semibold text-white">Estrategica</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Certificado incluso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Suporte completo</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-2xl border border-border">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-cta animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">Resposta em ate 24h</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Fale com a Interelos
              </h3>
              <p className="text-muted-foreground mb-6">
                Conte-nos sobre sua empresa e objetivos
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
