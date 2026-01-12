import { Layout } from '@/components/layout/Layout';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { CorporateForm } from '@/components/forms/CorporateForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, 
  DollarSign, 
  Building2, 
  TrendingUp, 
  Compass,
  MessageSquare,
  FileText,
  Rocket,
  BarChart
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Consultoria Estrategica',
    description: 'Definicao de posicionamento, vantagem competitiva e estrategia de crescimento.',
  },
  {
    icon: DollarSign,
    title: 'Precificacao',
    description: 'Revisao de estrutura de precos, margens e politica comercial.',
  },
  {
    icon: Building2,
    title: 'Estruturacao de Negocios',
    description: 'Organizacao de processos, governanca e preparacao para escala.',
  },
  {
    icon: TrendingUp,
    title: 'Plano de Crescimento',
    description: 'Estrategias de expansao, novos mercados e canais de venda.',
  },
  {
    icon: Compass,
    title: 'Planejamento de Longo Prazo',
    description: 'Visao de 3-5 anos, sucessao e preparacao para M&A.',
  },
];

const consultingSteps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Diagnostico',
    description: 'Imersao na empresa para entender cenario, desafios e oportunidades.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Proposta',
    description: 'Apresentacao de escopo, metodologia, cronograma e investimento.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementacao',
    description: 'Execucao do projeto com entregas parciais e envolvimento da equipe.',
  },
  {
    number: '04',
    icon: BarChart,
    title: 'Acompanhamento',
    description: 'Monitoramento de resultados e suporte pos-projeto.',
  },
];

export default function Consultoria() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Consultorias e Solucoes Personalizadas
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Projetos sob medida para resolver desafios especificos e 
              acelerar os resultados da sua empresa.
            </p>
            <a href="#proposta">
              <Button size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground">
                Solicitar Proposta
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Linhas de Atuacao
            </h2>
            <p className="text-lg text-muted-foreground">
              Especialidades desenvolvidas ao longo de 20+ anos de experiencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card-base p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <HowItWorks
        title="Como Funciona"
        subtitle="Metodologia estruturada para garantir resultados"
        steps={consultingSteps}
      />

      {/* Target Companies */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Perfil de Empresas Atendidas
              </h2>
              <p className="text-muted-foreground mb-6">
                Trabalhamos com empresas de diversos portes e setores, com foco 
                especial em PMEs em fase de crescimento ou transicao.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <h4 className="font-medium text-foreground mb-1">Faturamento anual</h4>
                  <p className="text-sm text-muted-foreground">
                    Entre R$ 100.000 e R$ 4.800.000 por ano
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h4 className="font-medium text-foreground mb-1">Setores</h4>
                  <p className="text-sm text-muted-foreground">
                    Industria, Comercio, Servicos e Tecnologia
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h4 className="font-medium text-foreground mb-1">Momento</h4>
                  <p className="text-sm text-muted-foreground">
                    Empresas em crescimento, profissionalizacao ou preparacao para escala
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Por que a Interelos</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cta flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cta-foreground text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Experiencia comprovada</h4>
                    <p className="text-sm text-primary-foreground/80">20+ anos e 500+ projetos realizados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cta flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cta-foreground text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Foco em resultados</h4>
                    <p className="text-sm text-primary-foreground/80">Metodologia pratica e orientada a impacto</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cta flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cta-foreground text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Acompanhamento proximo</h4>
                    <p className="text-sm text-primary-foreground/80">Suporte durante e apos a implementacao</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section id="proposta" className="section-padding bg-secondary">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Solicitar Proposta
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Preencha o formulario com informacoes sobre sua empresa e 
                desafio principal. Nossa equipe comercial entrara em contato 
                em ate 48 horas uteis.
              </p>
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-medium text-foreground mb-2">Diagnostico Gratuito</h4>
                <p className="text-sm text-muted-foreground">
                  Oferecemos uma conversa inicial de diagnostico sem compromisso 
                  para entender seu cenario e indicar a melhor abordagem.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <CorporateForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
