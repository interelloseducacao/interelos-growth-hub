import { cn } from '@/lib/utils';
import { MapPin, Monitor, Layers } from 'lucide-react';

interface ModalityBadgeProps {
  modality: 'ead' | 'hibrido' | 'presencial' | 'online';
  showLocation?: boolean;
  className?: string;
}

const modalityConfig = {
  ead: {
    label: 'EAD',
    icon: Monitor,
    className: 'bg-accent/10 text-accent border-accent/20',
  },
  online: {
    label: 'Online',
    icon: Monitor,
    className: 'bg-accent/10 text-accent border-accent/20',
  },
  hibrido: {
    label: 'Hibrido',
    icon: Layers,
    className: 'bg-highlight/10 text-highlight-foreground border-highlight/20',
  },
  presencial: {
    label: 'Presencial',
    icon: MapPin,
    className: 'bg-success/10 text-success border-success/20',
  },
};

export function ModalityBadge({ modality, showLocation = true, className }: ModalityBadgeProps) {
  const config = modalityConfig[modality];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border',
        config.className,
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {config.label}
      {modality === 'presencial' && showLocation && (
        <span className="text-xs opacity-80">- Lapa, SP</span>
      )}
    </span>
  );
}
