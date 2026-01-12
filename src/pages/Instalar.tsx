import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Download, Smartphone, Check, Zap, Wifi, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function Instalar() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Acesso Rápido',
      description: 'Abra diretamente da tela inicial, sem precisar do navegador'
    },
    {
      icon: Wifi,
      title: 'Funciona Offline',
      description: 'Acesse conteúdos mesmo sem conexão com a internet'
    },
    {
      icon: Bell,
      title: 'Notificações',
      description: 'Receba alertas de novos cursos e eventos'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero */}
        <section className="section-padding py-20 md:py-32">
          <div className="container-section text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center shadow-2xl">
                <Smartphone className="w-12 h-12 text-primary-foreground" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Instale o App da{' '}
                <span className="text-gradient">Interelos</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-10">
                Tenha acesso aos cursos e conteúdos diretamente do seu celular, 
                com experiência de aplicativo nativo.
              </p>

              {isInstalled ? (
                <div className="inline-flex items-center gap-3 bg-success/10 text-success px-6 py-4 rounded-xl">
                  <Check className="w-6 h-6" />
                  <span className="font-semibold text-lg">App já instalado!</span>
                </div>
              ) : isIOS ? (
                <div className="bg-card border border-border rounded-2xl p-6 max-w-md mx-auto text-left">
                  <h3 className="font-semibold text-lg mb-4">Como instalar no iPhone/iPad:</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span>Abra esta página no <strong>Safari</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span>Toque no ícone de <strong>Compartilhar</strong> (⎙) na barra inferior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span>Role e toque em <strong>"Adicionar à Tela de Início"</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span>Confirme tocando em <strong>"Adicionar"</strong></span>
                    </li>
                  </ol>
                </div>
              ) : deferredPrompt ? (
                <Button
                  onClick={handleInstall}
                  size="lg"
                  className="bg-gradient-to-r from-cta to-cta/90 hover:from-cta/90 hover:to-cta text-cta-foreground px-10 py-6 text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Instalar App Agora
                </Button>
              ) : (
                <div className="bg-card border border-border rounded-2xl p-6 max-w-md mx-auto text-left">
                  <h3 className="font-semibold text-lg mb-4">Como instalar:</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span>Abra o menu do navegador (três pontos)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span>Selecione <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong></span>
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding py-16 bg-muted/30">
          <div className="container-section">
            <h2 className="text-3xl font-bold text-center mb-12">
              Por que instalar?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
