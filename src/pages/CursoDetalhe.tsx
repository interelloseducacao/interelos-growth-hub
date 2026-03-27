import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ModalityBadge } from '@/components/ui/ModalityBadge';
import { TypeBadge } from '@/components/ui/TypeBadge';
import { CourseCard } from '@/components/cards/CourseCard';
import { Button } from '@/components/ui/button';
import { courses } from '@/data/mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Clock, 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle,
  ArrowLeft 
} from 'lucide-react';

export default function CursoDetalhe() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <Layout>
        <div className="container-section section-padding text-center">
          <h1 className="text-2xl font-bold mb-4">Curso nao encontrado</h1>
          <Link to="/cursos">
            <Button>Voltar para cursos</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedCourses = courses
    .filter(c => c.id !== course.id && c.themes.some(t => course.themes.includes(t)))
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-12 md:py-16">
        <div className="container-section">
          <Link 
            to="/cursos" 
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para cursos
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <ModalityBadge modality={course.modality} />
            <TypeBadge type={course.type} />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {course.title}
          </h1>
          
          <p className="text-lg text-primary-foreground/90 max-w-3xl mb-6">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{course.workload}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            {course.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{course.location}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Target */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Para quem e</h2>
                <ul className="space-y-2">
                  {course.target.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Beneficios e Resultados
                </h2>
                <ul className="space-y-2">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modules */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Conteudo Programatico
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {course.modules.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`}>
                      <AccordionTrigger className="text-left">
                        <span className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {index + 1}
                          </span>
                          {module.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="ml-11 space-y-1">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Instructors */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Instrutores</h2>
                <div className="space-y-4">
                  {course.instructors.map((instructor, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-secondary rounded-lg">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">
                          {instructor.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{instructor.name}</h4>
                        <p className="text-sm text-primary mb-1">{instructor.role}</p>
                        <p className="text-sm text-muted-foreground">{instructor.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Perguntas Frequentes
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>Como funciona o acesso ao curso?</AccordionTrigger>
                    <AccordionContent>
                      Apos a confirmacao da inscricao, voce recebera um e-mail com as 
                      instrucoes de acesso a plataforma. O acesso fica disponivel por 
                      12 meses apos o inicio do programa.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>Tem certificado?</AccordionTrigger>
                    <AccordionContent>
                      Sim, todos os participantes que completarem pelo menos 80% do 
                      programa recebem certificado digital de conclusao.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>Posso parcelar o pagamento?</AccordionTrigger>
                    <AccordionContent>
                      Sim, oferecemos parcelamento em ate 12x no cartao de credito. 
                      Para empresas, temos condicoes especiais de pagamento.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="card-base p-6">
                  {course.price && (
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-1">Investimento</p>
                      <p className="text-3xl font-bold text-primary">{course.price}</p>
                      <p className="text-sm text-muted-foreground">ou em ate 12x</p>
                    </div>
                  )}

                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duracao</span>
                      <span className="font-medium text-foreground">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Carga horaria</span>
                      <span className="font-medium text-foreground">{course.workload}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Modalidade</span>
                      <span className="font-medium text-foreground capitalize">{course.modality}</span>
                    </div>
                    {course.dates && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Datas</span>
                        <span className="font-medium text-foreground">{course.dates}</span>
                      </div>
                    )}
                  </div>

                  {course.slug === 'precificacao-empreendedores-facilities' ? (
                    <a href="https://lp.interellos.com.br/precificacao-blindada-empresas-facilities/" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-cta hover:bg-cta-hover text-cta-foreground mb-3">
                        Quero Participar
                      </Button>
                    </a>
                  ) : (
                    <Button className="w-full bg-cta hover:bg-cta-hover text-cta-foreground mb-3">
                      Quero Participar
                    </Button>
                  )}
                  <Link to="/contato">
                    <Button variant="outline" className="w-full">
                      Solicitar Informacoes
                    </Button>
                  </Link>
                </div>

                {course.modality === 'presencial' && course.location && (
                  <div className="mt-6 p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-success" />
                      Local do Curso
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{course.location}</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Como chegar
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Courses */}
          {relatedCourses.length > 0 && (
            <div className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Cursos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
