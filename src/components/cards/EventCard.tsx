import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Event } from '@/data/mockData';
import { ModalityBadge } from '@/components/ui/ModalityBadge';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card flex flex-col h-full p-6 relative overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="flex flex-wrap gap-2 mb-4 pt-1">
        <ModalityBadge modality={event.modality} showLocation={event.modality === 'presencial'} />
      </div>

      <h3 className="text-lg font-bold text-gradient-brand mb-2 line-clamp-2">
        {event.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
        {event.shortDescription}
      </p>

      <div className="space-y-2 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4 flex-shrink-0" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span>{event.time}</span>
        </div>
        {event.location && (
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-border">
        <Link to={`/eventos/${event.slug}`}>
          <Button variant="ghost" size="sm" className="group w-full justify-center">
            Ver detalhes
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
