import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { LogIn, Eye, EyeOff, GraduationCap, UserPlus, LogOut } from 'lucide-react';

export default function AreaDoAluno() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const { user, loading, signIn, signUp, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password);
        if (error) {
          if (error.message.includes('already registered')) {
            toast({
              title: 'E-mail ja cadastrado',
              description: 'Este e-mail ja possui uma conta. Tente fazer login.',
              variant: 'destructive',
            });
          } else {
            toast({
              title: 'Erro ao cadastrar',
              description: error.message,
              variant: 'destructive',
            });
          }
        } else {
          toast({
            title: 'Conta criada com sucesso',
            description: 'Voce ja pode acessar a area do aluno.',
          });
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: 'Erro ao entrar',
            description: 'E-mail ou senha incorretos.',
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Login realizado',
            description: 'Bem-vindo a area do aluno.',
          });
        }
      }
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro inesperado. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Ate logo',
      description: 'Voce saiu da sua conta.',
    });
  };

  if (loading) {
    return (
      <Layout>
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-secondary to-background py-12">
          <div className="container-section">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Carregando...</p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Logged in view
  if (user) {
    return (
      <Layout>
        <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-secondary to-background py-12">
          <div className="container-section">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
                    <GraduationCap className="h-8 w-8 text-success" />
                  </div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    Bem-vindo, Aluno!
                  </h1>
                  <p className="text-muted-foreground">
                    {user.email}
                  </p>
                </div>

                <div className="bg-secondary rounded-lg p-6 mb-6">
                  <h2 className="font-semibold text-foreground mb-4">Seus Cursos</h2>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      Voce ainda nao possui cursos matriculados.
                    </p>
                    <Button 
                      onClick={() => navigate('/cursos')} 
                      className="bg-cta hover:bg-cta-hover text-cta-foreground"
                    >
                      Explorar Cursos
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="w-full"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair da Conta
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Login/Signup form
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
                  {isSignUp ? 'Criar Conta' : 'Area do Aluno'}
                </h1>
                <p className="text-muted-foreground">
                  {isSignUp ? 'Cadastre-se para acessar' : 'Acesse seus cursos e materiais'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
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
                  {isSignUp && (
                    <p className="text-xs text-muted-foreground">Minimo de 6 caracteres</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cta hover:bg-cta-hover text-cta-foreground"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    'Processando...'
                  ) : isSignUp ? (
                    <>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Criar Conta
                    </>
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Entrar
                    </>
                  )}
                </Button>
              </form>

              {/* Toggle */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {isSignUp ? 'Ja tem uma conta?' : 'Ainda nao tem conta?'}{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-primary hover:underline font-medium"
                  >
                    {isSignUp ? 'Fazer login' : 'Criar conta'}
                  </button>
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
