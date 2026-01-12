import { Link } from 'react-router-dom';
import { Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { Case } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface CaseCardProps {
  caseItem: Case;
}

export function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <div className="card-base flex flex-col h-full p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Building2 className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-foreground">{caseItem.company}</h4>
          <span className="text-xs text-muted-foreground">{caseItem.industry}</span>
        </div>
      </div>

      <div className="space-y-3 mb-4 flex-grow">
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Desafio
          </h5>
          <p className="text-sm text-foreground line-clamp-2">{caseItem.challenge}</p>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Abordagem
          </h5>
          <p className="text-sm text-foreground line-clamp-2">{caseItem.approach}</p>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Resultado
          </h5>
          <p className="text-sm text-foreground line-clamp-2">{caseItem.result}</p>
        </div>
      </div>

      {caseItem.metrics && (
        <div className="flex flex-wrap gap-2 mb-4">
          {caseItem.metrics.map((metric, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-success/10 text-success rounded"
            >
              <TrendingUp className="h-3 w-3" />
              {metric}
            </span>
          ))}
        </div>
      )}

      <div className="pt-4 border-t border-border">
        <Link to={`/cases/${caseItem.slug}`}>
          <Button variant="ghost" size="sm" className="group w-full justify-center">
            Ver case completo
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
