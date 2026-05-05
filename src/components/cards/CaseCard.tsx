import { Link } from 'react-router-dom';
import { Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { Case } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface CaseCardProps {
  caseItem: Case;
}

export function CaseCard({ caseItem }: CaseCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card flex flex-col h-full p-6 relative overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/15 to-brand-purple/15 border border-primary/15">
          <Building2 className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-gradient-brand">{caseItem.company}</h4>
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
              className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-success/10 text-success rounded border border-success/20"
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
