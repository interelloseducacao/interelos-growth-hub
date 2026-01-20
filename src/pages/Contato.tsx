import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail, Phone, CheckCircle } from 'lucide-react';

const demandTypes = [
  { value: 'cursos', label: 'Cursos e Treinamentos' },
  { value: 'mentorias', label: 'Mentorias' },
  { value: 'consultoria', label: 'Consultoria' },
  { value: 'parcerias', label: 'Parcerias' },
  { value: 'outros', label: 'Outros' },
];

export default function Contato() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: 'Mensagem enviada',
      description: 'Entraremos em contato em breve.',
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Contato
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Fale com a Interellos. Estamos prontos para ajudar voce e sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envie sua mensagem
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12 bg-secondary rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Mensagem enviada com sucesso
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Nossa equipe entrara em contato em breve.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone (opcional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demand">Tipo de demanda *</Label>
                      <Select name="demand" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {demandTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cta hover:bg-cta-hover text-cta-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Outras formas de contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Endereco</h3>
                    <p className="text-muted-foreground">Lapa - Sao Paulo</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline mt-1 inline-block"
                    >
                      Ver no mapa
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <a 
                      href="mailto:contato@interellos.com.br"
                      className="text-muted-foreground hover:text-primary"
                    >
                      contato@interellos.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <a 
                      href="tel:+551199999999"
                      className="text-muted-foreground hover:text-primary"
                    >
                      (11) 9999-9999
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 p-6 bg-primary rounded-xl text-primary-foreground">
                <h3 className="text-xl font-semibold mb-4">Acesso rapido</h3>
                <div className="space-y-3">
                  <a 
                    href="/cursos" 
                    className="block text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Ver cursos disponiveis
                  </a>
                  <a 
                    href="/mentorias" 
                    className="block text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Conhecer mentorias
                  </a>
                  <a 
                    href="/consultoria" 
                    className="block text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Solicitar proposta de consultoria
                  </a>
                  <a 
                    href="/eventos" 
                    className="block text-primary-foreground/80 hover:text-primary-foreground"
                  >
                    Ver agenda de eventos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
