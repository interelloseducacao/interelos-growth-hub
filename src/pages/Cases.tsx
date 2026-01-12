import { Layout } from '@/components/layout/Layout';
import { CaseCard } from '@/components/cards/CaseCard';
import { Button } from '@/components/ui/button';
import { cases } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const industries = [
  'Industria',
  'Comercio',
  'Servicos',
  'Tecnologia',
  'Saude',
  'Educacao',
];

export default function Cases() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Cases de Sucesso
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Resultados reais com empresas de diversos portes e setores.
              Conheca algumas das transformacoes que ajudamos a construir.
            </p>
          </div>
        </div>
      </section>

      {/* Logos/Industries */}
      <section className="py-12 bg-secondary">
        <div className="container-section">
          <p className="text-sm text-muted-foreground text-center mb-6">
            Atuamos em diversos setores da economia
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-background text-foreground text-sm font-medium rounded-full border border-border"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>

          {/* More Cases Placeholder */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Estes sao apenas alguns exemplos. Temos dezenas de outros cases 
              em diferentes contextos e desafios.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Quer resultados assim para sua empresa?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Solicite um diagnostico gratuito e descubra como podemos ajudar 
            sua empresa a superar desafios e acelerar resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground">
                Quero um Diagnostico
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/consultoria">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Solicitar Proposta
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
