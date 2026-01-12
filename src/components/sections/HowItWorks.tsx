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
  steps = defaultSteps 
}: HowItWorksProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                  <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center text-sm font-bold text-primary-foreground bg-primary rounded-full">
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
