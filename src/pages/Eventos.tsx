import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { EventCard } from '@/components/cards/EventCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { events } from '@/data/mockData';

const modalityFilters = [
  { value: 'all', label: 'Todos' },
  { value: 'presencial', label: 'Presencial' },
  { value: 'online', label: 'Online' },
  { value: 'hibrido', label: 'Hibrido' },
];

export default function Eventos() {
  const [modalityFilter, setModalityFilter] = useState('all');
  const [email, setEmail] = useState('');

  const filteredEvents = modalityFilter === 'all'
    ? events
    : events.filter(e => e.modality === modalityFilter);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle notification signup
    setEmail('');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Eventos e Encontros
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Workshops, encontros e oportunidades de networking para 
              empreendedores e gestores.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-background">
        <div className="container-section">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {modalityFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setModalityFilter(filter.value)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  modalityFilter === filter.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Nenhum evento encontrado com o filtro selecionado.
              </p>
              <Button variant="outline" onClick={() => setModalityFilter('all')}>
                Ver todos os eventos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Notify CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-section">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Quero ser avisado dos proximos eventos
            </h2>
            <p className="text-muted-foreground mb-6">
              Cadastre seu e-mail e receba em primeira mao os convites 
              para nossos eventos e encontros.
            </p>
            <form onSubmit={handleNotifySubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-cta hover:bg-cta-hover text-cta-foreground flex-shrink-0">
                Cadastrar
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
