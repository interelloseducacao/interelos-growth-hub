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
      <section className="gradient-hero text-primary-foreground py-20 md:py-28 lg:py-32">
        <div className="container-section">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Desenvolvimento e aperfeicoamento para empreendedores e empresas
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '100ms' }}>
              Mais de 20 anos de experiencia academica e corporativa. 
              Mais de 15.000 alunos treinados. 
              Cases em empresas de pequeno, medio e grande porte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/cursos">
                <Button size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground w-full sm:w-auto">
                  Ver Cursos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                  Solicitar Proposta
                </Button>
              </Link>
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
      <section className="section-padding bg-primary">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto para desenvolver sua empresa?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6">
                Entre em contato e descubra a melhor solucao para o seu momento.
              </p>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                  Cursos e treinamentos para individuos e equipes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                  Mentoria com acompanhamento personalizado
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cta" />
                  Consultoria estrategica para empresas
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Fale com a Interelos
              </h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
