import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoInterelos from '@/assets/logo-interelos.png';

const navigation = [
  { name: 'Cursos', href: '/cursos' },
  { name: 'Mentorias', href: '/mentorias' },
  { name: 'Consultorias', href: '/consultoria' },
  { name: 'Cases', href: '/cases' },
  { name: 'Conteudos', href: '/conteudos' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Contato', href: '/contato' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <nav className="container-section" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img src={logoInterelos} alt="Interelos" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Mobile menu button and area do aluno */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/area-do-aluno" className="flex flex-col items-center group">
              <Button variant="ghost" size="icon" className="h-9 w-9 transition-transform duration-200 group-hover:scale-110 group-hover:text-primary">
                <LogIn className="h-5 w-5" />
              </Button>
              <span className="text-[10px] text-muted-foreground -mt-1 group-hover:text-primary transition-colors">Aluno</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
            <Link to="/cursos">
              <Button variant="outline" size="sm">
                Ver Cursos
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="sm" className="bg-cta hover:bg-cta-hover text-cta-foreground">
                Solicitar Proposta
              </Button>
            </Link>
            <div className="h-6 w-px bg-border mx-2" />
            <Link to="/area-do-aluno">
              <Button variant="ghost" size="sm" className="gap-2">
                <LogIn className="h-4 w-4" />
                Area do Aluno
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    location.pathname === item.href
                      ? 'bg-secondary text-primary'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 space-y-2 px-3">
                <Link to="/cursos" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Ver Cursos
                  </Button>
                </Link>
                <Link to="/contato" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-cta hover:bg-cta-hover text-cta-foreground">
                    Solicitar Proposta
                  </Button>
                </Link>
                <Link to="/area-do-aluno" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full gap-2">
                    <LogIn className="h-4 w-4" />
                    Area do Aluno
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
