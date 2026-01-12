import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Course } from '@/data/mockData';
import { ModalityBadge } from '@/components/ui/ModalityBadge';
import { TypeBadge } from '@/components/ui/TypeBadge';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const isHighlight = course.highlight;

  return (
    <div className={`card-base flex flex-col h-full p-6 relative ${isHighlight ? 'ring-2 ring-cta shadow-lg shadow-cta/20' : ''}`}>
      {isHighlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cta text-cta-foreground text-xs font-bold rounded-full uppercase tracking-wide">
          Oferta Especial
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        <ModalityBadge modality={course.modality} showLocation={course.modality === 'presencial'} />
        <TypeBadge type={course.type} />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
        {course.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
        {course.shortDescription}
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>{course.workload}</span>
        </div>
        {course.dates && (
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{course.dates}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {course.themes.slice(0, 3).map((theme) => (
          <span
            key={theme}
            className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded"
          >
            {theme}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        {course.price && (
          <div className="flex flex-col">
            {course.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">{course.originalPrice}</span>
            )}
            <span className={`text-lg font-bold ${isHighlight ? 'text-cta' : 'text-primary'}`}>{course.price}</span>
          </div>
        )}
        <Link to={`/cursos/${course.slug}`} className="ml-auto">
          <Button variant={isHighlight ? 'default' : 'ghost'} size="sm" className={`group ${isHighlight ? 'bg-cta hover:bg-cta-hover text-cta-foreground' : ''}`}>
            Ver detalhes
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
