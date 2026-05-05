import { MessageSquare, FileText, Rocket, TrendingUp } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Diagnostico',
    description: 'Entendemos seu momento, desafios e objetivos de forma personalizada.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Proposta',
    description: 'Elaboramos um plano de acao sob medida para suas necessidades.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementacao',
    description: 'Executamos juntos, com metodologia pratica e foco em resultados.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Acompanhamento',
    description: 'Monitoramos evolucao e ajustamos estrategias conforme necessario.',
  },
];

export function HowItWorks({
  title = 'Como Funciona',
  subtitle = 'Um processo estruturado para garantir resultados',
  steps = defaultSteps,
}: HowItWorksProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="container-section relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-primary/40 to-brand-purple/30" />
              )}

              <div className="relative flex flex-col items-center text-center rounded-lg border border-border bg-card p-6 h-full shadow-card">
                <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-lg bg-gradient-to-br from-primary/15 to-brand-purple/10 border border-primary/15 mb-6">
                  <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center text-sm font-bold text-primary-foreground bg-primary rounded-lg shadow-[0_0_18px_hsl(var(--primary)/0.35)]">
                    {step.number}
                  </span>
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
