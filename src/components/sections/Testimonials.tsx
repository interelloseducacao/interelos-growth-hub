import { motion } from 'framer-motion';
import { Quote, Star, Sparkles, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Carla Mendes',
    role: 'Proprietária de Restaurante',
    image: 'CM',
    testimonial:
      "Antes do curso, eu definia preços no 'achismo'. Hoje, minha margem de lucro aumentou 35% sem perder clientes. Foi transformador!",
    result: '+35% de margem',
  },
  {
    name: 'Roberto Silva',
    role: 'Dono de Empresa de Facilities',
    image: 'RS',
    testimonial:
      'Consegui fechar contratos maiores porque aprendi a mostrar o valor real dos meus serviços. Meu faturamento dobrou em 8 meses.',
    result: '2x no faturamento',
  },
  {
    name: 'Fernanda Costa',
    role: 'Consultora de Marketing',
    image: 'FC',
    testimonial:
      'Parei de cobrar por hora e passei a precificar por valor entregue. Meus projetos agora rendem 60% mais do que antes.',
    result: '+60% por projeto',
  },
  {
    name: 'Marcelo Almeida',
    role: 'Dono de Gráfica',
    image: 'MA',
    testimonial:
      'Identifiquei produtos que davam prejuízo e ajustei toda minha tabela. Em 6 meses, saí do vermelho e comecei a lucrar de verdade.',
    result: 'Saiu do prejuízo',
  },
  {
    name: 'Juliana Teixeira',
    role: 'Arquiteta',
    image: 'JT',
    testimonial:
      'O curso me deu segurança para cobrar o que meu trabalho vale. Hoje atendo menos clientes, mas com projetos muito mais rentáveis.',
    result: '+80% ticket médio',
  },
];

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export function Testimonials({
  title = 'O Que Nossos Alunos Dizem',
  subtitle = 'Resultados reais de alunos que transformaram seus negócios após o Curso de Precificação',
  badge = 'Histórias de Sucesso',
}: TestimonialsProps) {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(var(--brand-purple))]/20 blur-3xl" />

      <div className="container-section relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            {badge}
          </div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient-brand">{title}</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-[hsl(var(--brand-purple))]/40 to-transparent shadow-[0_10px_40px_-12px_hsl(var(--brand-purple)/0.35)] transition-all duration-300 hover:shadow-[0_20px_50px_-12px_hsl(var(--brand-purple)/0.5)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="rounded-2xl bg-card/95 backdrop-blur-sm p-6 h-full flex flex-col relative overflow-hidden">
                {/* Decorative quote */}
                <Quote className="absolute -top-2 -right-2 h-24 w-24 text-primary/5 rotate-12" />

                <div className="relative flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-[hsl(var(--brand-purple))] flex items-center justify-center shadow-[0_0_15px_hsl(var(--brand-purple)/0.4)]">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="relative text-foreground/85 mb-6 flex-grow leading-relaxed">
                  "{t.testimonial}"
                </p>

                <div className="relative flex items-center justify-between pt-4 border-t border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-[hsl(var(--brand-purple))]/20 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                      {t.image}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm leading-tight">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-cta/15 text-cta-foreground/90 text-[11px] font-bold px-2 py-1 rounded-full border border-cta/30">
                    <TrendingUp className="h-3 w-3 text-cta" />
                    <span className="text-foreground">{t.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
