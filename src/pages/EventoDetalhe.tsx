import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ModalityBadge } from '@/components/ui/ModalityBadge';
import { EventCard } from '@/components/cards/EventCard';
import { Button } from '@/components/ui/button';
import { events } from '@/data/mockData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users,
  ArrowLeft 
} from 'lucide-react';

export default function EventoDetalhe() {
  const { slug } = useParams();
  const event = events.find(e => e.slug === slug);

  if (!event) {
    return (
      <Layout>
        <div className="container-section section-padding text-center">
          <h1 className="text-2xl font-bold mb-4">Evento nao encontrado</h1>
          <Link to="/eventos">
            <Button>Voltar para eventos</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const otherEvents = events.filter(e => e.id !== event.id).slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-12 md:py-16">
        <div className="container-section">
          <Link 
            to="/eventos" 
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para eventos
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <ModalityBadge modality={event.modality} />
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {event.title}
          </h1>
          
          <p className="text-lg text-primary-foreground/90 max-w-3xl mb-6">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
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
                  {event.target.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Programacao
                </h2>
                <ul className="space-y-3">
                  {event.topics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Perguntas Frequentes
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>Como funciona a inscricao?</AccordionTrigger>
                    <AccordionContent>
                      Clique no botao "Quero Participar" e preencha seus dados. 
                      Voce recebera um e-mail de confirmacao com todas as instrucoes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>O evento e pago?</AccordionTrigger>
                    <AccordionContent>
                      Alguns eventos sao gratuitos e outros tem investimento. 
                      Verifique as informacoes especificas deste evento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>Posso levar acompanhante?</AccordionTrigger>
                    <AccordionContent>
                      Sim, desde que a pessoa tambem faca sua inscricao no evento.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="card-base p-6">
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Data</span>
                      <span className="font-medium text-foreground">{event.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Horario</span>
                      <span className="font-medium text-foreground">{event.time}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Modalidade</span>
                      <span className="font-medium text-foreground capitalize">{event.modality}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-cta hover:bg-cta-hover text-cta-foreground mb-3">
                    Quero Participar
                  </Button>
                  <Link to="/contato">
                    <Button variant="outline" className="w-full">
                      Tenho Duvidas
                    </Button>
                  </Link>
                </div>

                {event.modality === 'presencial' && event.location && (
                  <div className="mt-6 p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-success" />
                      Local do Evento
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{event.location}</p>
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

          {/* Other Events */}
          {otherEvents.length > 0 && (
            <div className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Outros Eventos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
