import { Layout } from '@/components/layout/Layout';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { LeadForm } from '@/components/forms/LeadForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { User, Users, Building2, Briefcase, MessageSquare, FileText, Rocket, TrendingUp } from 'lucide-react';

const mentoringTypes = [
  {
    icon: User,
    title: 'Mentoria Individual',
    description: 'Acompanhamento personalizado para empreendedores e gestores que buscam acelerar seu desenvolvimento.',
    features: ['Sessoes 1:1 com mentor experiente', 'Plano de acao personalizado', 'Acompanhamento quinzenal ou mensal'],
  },
  {
    icon: Users,
    title: 'Mentoria em Grupo',
    description: 'Troca de experiencias com outros empreendedores em situacoes similares, com orientacao de especialistas.',
    features: ['Grupos de ate 8 participantes', 'Networking e troca de experiencias', 'Metodologia estruturada'],
  },
  {
    icon: Building2,
    title: 'Mentoria para Socios',
    description: 'Facilitacao de alinhamento entre socios e definicao de papeis, responsabilidades e governanca.',
    features: ['Mediacao de conflitos', 'Acordo de socios', 'Planejamento de sucessao'],
  },
  {
    icon: Briefcase,
    title: 'Mentoria para Empresas',
    description: 'Programa de mentoria para liderancas e equipes-chave da organizacao.',
    features: ['Desenvolvimento de liderancas', 'Alinhamento estrategico', 'Gestao de mudancas'],
  },
];

const profiles = [
  'Empreendedores em fase inicial buscando orientacao',
  'Empresarios em momento de crescimento ou transicao',
  'Gestores assumindo novas responsabilidades',
  'Profissionais em transicao de carreira para empreendedorismo',
  'Socios enfrentando desafios de relacionamento ou governanca',
];

const mentoringSteps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Diagnostico',
    description: 'Conversa inicial para entender seu momento, desafios e objetivos.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Plano',
    description: 'Definicao de metas, indicadores e cronograma de acompanhamento.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Acompanhamento',
    description: 'Sessoes regulares com orientacao pratica e feedback.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Execucao e Ajustes',
    description: 'Monitoramento da evolucao e ajustes conforme necessario.',
  },
];

export default function Mentorias() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Mentorias
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Acompanhamento personalizado com especialistas experientes para 
              acelerar seu desenvolvimento e superar desafios do negocio.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground">
                Quero uma Mentoria
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mentoring Types */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Mentoria
            </h2>
            <p className="text-lg text-muted-foreground">
              Formatos adaptados a diferentes necessidades e momentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mentoringTypes.map((type, index) => (
              <div key={index} className="card-base p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                  <type.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <HowItWorks
        title="Como Funciona"
        subtitle="Um processo estruturado para garantir seu desenvolvimento"
        steps={mentoringSteps}
      />

      {/* Target Profiles */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Para quem e
              </h2>
              <p className="text-muted-foreground mb-6">
                A mentoria e indicada para profissionais e empresarios em diferentes 
                momentos de suas jornadas:
              </p>
              <ul className="space-y-3">
                {profiles.map((profile, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-foreground">{profile}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Resultados Esperados
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-success font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Clareza de direcao</h4>
                    <p className="text-sm text-muted-foreground">Visao clara do caminho a seguir</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-success font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Decisoes mais seguras</h4>
                    <p className="text-sm text-muted-foreground">Menos erros por ter orientacao experiente</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-success font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Resultados acelerados</h4>
                    <p className="text-sm text-muted-foreground">Menos tempo para atingir objetivos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="section-padding bg-primary">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solicite sua Mentoria
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6">
                Preencha o formulario e nossa equipe entrara em contato para 
                entender seu momento e indicar o formato mais adequado.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Dados para Contato
              </h3>
              <LeadForm 
                variant="full" 
                interests={['Mentoria Individual', 'Mentoria em Grupo', 'Mentoria para Socios', 'Mentoria para Empresas']} 
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
