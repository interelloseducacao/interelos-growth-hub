import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SocialProof } from '@/components/sections/SocialProof';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { CourseCard } from '@/components/cards/CourseCard';
import { EventCard } from '@/components/cards/EventCard';
import { CaseCard } from '@/components/cards/CaseCard';
import { LeadForm } from '@/components/forms/LeadForm';
import { Button } from '@/components/ui/button';
import { courses, events, cases } from '@/data/mockData';
import ProceduralGroundBackground from '@/components/backgrounds/ProceduralGroundBackground';
import { 
  ArrowRight, 
  GraduationCap, 
  Users, 
  Briefcase,
  Monitor,
  Layers,
  MapPin,
  CheckCircle,
  MessageCircle,
  Clock
} from 'lucide-react';

export default function Index() {
  const featuredCourses = courses.filter(c => c.featured).slice(0, 6);
  const featuredEvents = events.filter(e => e.featured).slice(0, 3);
  const featuredCases = cases.filter(c => c.featured).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center bg-zinc-950">
        {/* WebGL Background */}
        <ProceduralGroundBackground />

        <div className="container-section relative z-10 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in shadow-[0_0_20px_rgba(255,255,255,0.15),0_0_40px_rgba(100,150,255,0.1)]">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse shadow-[0_0_8px_rgba(var(--cta))]" />
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
                <Button size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground w-full sm:w-auto text-lg px-8 py-6 shadow-[0_0_20px_rgba(59,130,246,0.4),0_0_40px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5),0_0_50px_rgba(59,130,246,0.3)] transition-shadow">
                  Ver Cursos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto text-lg px-8 py-6 shadow-[0_0_20px_rgba(34,197,94,0.4),0_0_40px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5),0_0_50px_rgba(34,197,94,0.3)] transition-shadow">
                  Fale Agora Conosco
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Link to="/cursos" className="card-base p-8 text-center group block h-full">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 mb-6 transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-lg group-hover:shadow-blue-200/50"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </motion.div>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/mentorias" className="card-base p-8 text-center group block h-full">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-100 mb-6 transition-all duration-300 group-hover:bg-indigo-200 group-hover:shadow-lg group-hover:shadow-indigo-200/50"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Users className="h-8 w-8 text-indigo-600" />
                </motion.div>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/consultoria" className="card-base p-8 text-center group block h-full">
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-sky-100 mb-6 transition-all duration-300 group-hover:bg-sky-200 group-hover:shadow-lg group-hover:shadow-sky-200/50"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Briefcase className="h-8 w-8 text-sky-600" />
                </motion.div>
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
            </motion.div>
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

      {/* CTA Section with Form - Redesigned */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-primary via-primary to-accent">
        {/* Subtle decorative element */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cta/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>
        
        <div className="container-section relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Value Proposition */}
            <div className="text-white">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Vamos conversar sobre o futuro do seu negócio?
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Conte-nos sobre seus desafios. Nossa equipe entrará em contato em até 24 horas para apresentar a melhor solução.
              </motion.p>
              
              {/* Benefits List */}
              <div className="space-y-4 mb-10">
                {[
                  "Diagnóstico gratuito e sem compromisso",
                  "Soluções personalizadas para seu momento",
                  "Parcelamento em até 10x sem juros"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-cta flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <CheckCircle className="h-4 w-4 text-cta-foreground" />
                    </motion.div>
                    <span className="text-white/90 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Proof */}
              <motion.div 
                className="flex items-center gap-3 pt-6 border-t border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center">
                    <Users className="h-5 w-5 text-white/80" />
                  </div>
                </div>
                <p className="text-white/80 text-sm md:text-base">
                  Já ajudamos mais de <span className="font-semibold text-white">15.000 profissionais</span> a transformarem seus negócios
                </p>
              </motion.div>
            </div>

            {/* Right Column - Form Card */}
            <motion.div 
              className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl border border-border"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <motion.div 
                className="flex items-center gap-2 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <MessageCircle className="h-5 w-5 text-cta" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Solicite seu diagnóstico gratuito
                </h3>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Resposta em até 24 horas</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <LeadForm variant="full" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
