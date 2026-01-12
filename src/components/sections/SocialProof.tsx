import { Award, Users, Building2, GraduationCap } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '20+',
    label: 'Anos de experiencia',
    description: 'Academica e corporativa',
  },
  {
    icon: Users,
    value: '15.000+',
    label: 'Alunos treinados',
    description: 'Em todo o Brasil',
  },
  {
    icon: Building2,
    value: '500+',
    label: 'Empresas atendidas',
    description: 'De pequeno a grande porte',
  },
  {
    icon: GraduationCap,
    value: '100+',
    label: 'Programas realizados',
    description: 'Cursos e treinamentos',
  },
];

export function SocialProof() {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
