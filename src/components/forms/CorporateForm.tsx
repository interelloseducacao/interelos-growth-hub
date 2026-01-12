import { useState } from 'react';
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
import { CheckCircle } from 'lucide-react';

const revenueRanges = [
  { value: '100k-500k', label: 'R$ 100.000 - R$ 500.000' },
  { value: '500k-1m', label: 'R$ 500.000 - R$ 1.000.000' },
  { value: '1m-2.4m', label: 'R$ 1.000.000 - R$ 2.400.000' },
  { value: '2.4m-4.8m', label: 'R$ 2.400.000 - R$ 4.800.000' },
  { value: '4.8m+', label: 'Acima de R$ 4.800.000' },
];

const challenges = [
  { value: 'crescimento', label: 'Crescimento e expansao' },
  { value: 'precificacao', label: 'Precificacao e margens' },
  { value: 'gestao', label: 'Gestao e processos' },
  { value: 'estrategia', label: 'Planejamento estrategico' },
  { value: 'financeiro', label: 'Controle financeiro' },
  { value: 'equipe', label: 'Gestao de equipe' },
  { value: 'outro', label: 'Outro' },
];

export function CorporateForm() {
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
      title: 'Proposta solicitada',
      description: 'Nossa equipe entrara em contato em ate 48 horas uteis.',
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
          <CheckCircle className="h-8 w-8 text-success" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Proposta solicitada com sucesso
        </h3>
        <p className="text-muted-foreground">
          Nossa equipe comercial entrara em contato em ate 48 horas uteis.
        </p>
      </div>
    );
  }

  return (
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
          <Label htmlFor="company">Empresa *</Label>
          <Input
            id="company"
            name="company"
            placeholder="Nome da empresa"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail corporativo *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@empresa.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="revenue">Faturamento anual *</Label>
          <Select name="revenue" required>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a faixa" />
            </SelectTrigger>
            <SelectContent>
              {revenueRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="challenge">Desafio principal *</Label>
          <Select name="challenge" required>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {challenges.map((challenge) => (
                <SelectItem key={challenge.value} value={challenge.value}>
                  {challenge.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="objective">Objetivo (opcional)</Label>
        <Textarea
          id="objective"
          name="objective"
          placeholder="Descreva brevemente o que voce busca alcançar..."
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="urgency">Prazo/urgencia (opcional)</Label>
        <Select name="urgency">
          <SelectTrigger>
            <SelectValue placeholder="Selecione se houver urgencia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="imediato">Imediato</SelectItem>
            <SelectItem value="30dias">Nos proximos 30 dias</SelectItem>
            <SelectItem value="90dias">Nos proximos 90 dias</SelectItem>
            <SelectItem value="sempressa">Sem pressa definida</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        className="w-full bg-cta hover:bg-cta-hover text-cta-foreground"
        disabled={isLoading}
      >
        {isLoading ? 'Enviando...' : 'Solicitar Proposta'}
      </Button>
    </form>
  );
}
