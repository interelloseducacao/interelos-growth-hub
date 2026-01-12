import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { LogIn, Eye, EyeOff, GraduationCap } from 'lucide-react';
import logoInterelos from '@/assets/logo-interelos.png';

export default function AreaDoAluno() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    toast({
      title: 'Login em desenvolvimento',
      description: 'A area do aluno sera disponibilizada em breve.',
    });
  };

  return (
    <Layout>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-secondary to-background py-12">
        <div className="container-section">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Area do Aluno
                </h1>
                <p className="text-muted-foreground">
                  Acesse seus cursos e materiais
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Sua senha"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">Lembrar-me</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">
                    Esqueci a senha
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cta hover:bg-cta-hover text-cta-foreground"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    'Entrando...'
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Entrar
                    </>
                  )}
                </Button>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Ainda nao tem acesso?{' '}
                  <a href="/cursos" className="text-primary hover:underline font-medium">
                    Conheca nossos cursos
                  </a>
                </p>
              </div>
            </div>

            {/* Help */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Problemas para acessar?{' '}
              <a href="/contato" className="text-primary hover:underline">
                Entre em contato
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
