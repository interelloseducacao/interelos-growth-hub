import { cn } from '@/lib/utils';

interface TypeBadgeProps {
  type: 'curso' | 'treinamento' | 'workshop' | 'encontro' | 'imersao';
  className?: string;
}

const typeConfig = {
  curso: {
    label: 'Curso',
    className: 'bg-primary/10 text-primary border-primary/20',
  },
  treinamento: {
    label: 'Treinamento',
    className: 'bg-primary/10 text-primary border-primary/20',
  },
  workshop: {
    label: 'Workshop',
    className: 'bg-accent/10 text-accent border-accent/20',
  },
  encontro: {
    label: 'Encontro',
    className: 'bg-success/10 text-success border-success/20',
  },
  imersao: {
    label: 'Imersao',
    className: 'bg-highlight/10 text-highlight-foreground border-highlight/20',
  },
};

export function TypeBadge({ type, className }: TypeBadgeProps) {
  const config = typeConfig[type];

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
