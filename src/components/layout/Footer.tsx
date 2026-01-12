import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';

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

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold">
              Interelos
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Desenvolvimento e aperfeicoamento para empreendedores e empresas.
            </p>
            <p className="mt-4 text-sm font-medium text-primary-foreground/90">
              20+ anos de experiencia | 15.000+ alunos treinados
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>Lapa - Sao Paulo</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/80">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span>contato@interelos.com.br</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Solucoes
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contato
            </h3>
            <div className="mt-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-cta text-cta-foreground hover:bg-cta-hover transition-colors"
              >
                Solicitar Proposta
              </Link>
            </div>
            <div className="mt-6 flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              2025 Interelos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors"
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
