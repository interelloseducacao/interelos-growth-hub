import { Link } from 'react-router-dom';
import { MapPin, Mail, Linkedin, Instagram, Youtube, MessageCircle, Sparkles, Award, Users, GraduationCap } from 'lucide-react';

const navigation = {
  solutions: [
    { name: 'Cursos', href: '/cursos' },
    { name: 'Mentorias', href: '/mentorias' },
    { name: 'Consultorias', href: '/consultoria' },
    { name: 'Treinamentos Corporativos', href: '/consultoria' },
  ],
  company: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Cases', href: '/cases' },
    { name: 'Conteudos', href: '/conteudos' },
    { name: 'Eventos', href: '/eventos' },
  ],
  legal: [
    { name: 'Politica de Privacidade', href: '/privacidade' },
    { name: 'Termos de Uso', href: '/termos' },
  ],
};

const social = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os cursos da Interellos.';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-zinc-950 via-primary to-zinc-950 text-primary-foreground overflow-hidden">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[hsl(var(--brand-purple))]/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] rounded-full bg-[hsl(var(--brand-purple))]/10 blur-3xl" />

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-purple))]/60 to-transparent" />

      <div className="container-section section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold">
              <span className="text-gradient-brand">Interellos</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Desenvolvimento e aperfeiçoamento para empreendedores e empresas.
            </p>

            {/* Trust badges */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <Award className="h-4 w-4 text-[hsl(var(--brand-purple))] flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold leading-none">30+</div>
                  <div className="text-[10px] text-primary-foreground/70 leading-tight">anos</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <Users className="h-4 w-4 text-[hsl(var(--brand-purple))] flex-shrink-0" />
                <div>
                  <div className="text-sm font-bold leading-none">15k+</div>
                  <div className="text-[10px] text-primary-foreground/70 leading-tight">alunos</div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/85">
                <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span>Lapa - São Paulo</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/85">
                <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span>contato@interellos.com.br</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[hsl(var(--brand-purple))]" />
              Soluções
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--brand-purple))] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[hsl(var(--brand-purple))]" />
              Empresa
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-all"
                  >
                    <span className="w-1 h-1 rounded-full bg-[hsl(var(--brand-purple))] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-[hsl(var(--brand-purple))]" />
              Contato
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-cta text-cta-foreground hover:bg-cta-hover transition-all shadow-[0_0_20px_hsl(var(--cta)/0.4)] hover:shadow-[0_0_30px_hsl(var(--cta)/0.6)]"
              >
                Solicitar Proposta
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/15 border border-white/15 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">Siga-nos</p>
              <div className="flex gap-2">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-primary-foreground/80 hover:text-primary-foreground hover:bg-gradient-to-br hover:from-primary hover:to-[hsl(var(--brand-purple))] hover:border-transparent transition-all hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2026 Interellos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
