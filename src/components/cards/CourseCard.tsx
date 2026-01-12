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
  return (
    <div className="card-base flex flex-col h-full p-6">
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
          <span className="text-lg font-bold text-primary">{course.price}</span>
        )}
        <Link to={`/cursos/${course.slug}`} className="ml-auto">
          <Button variant="ghost" size="sm" className="group">
            Ver detalhes
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
