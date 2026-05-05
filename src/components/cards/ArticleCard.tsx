import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Article } from '@/data/mockData';
import { Button } from '@/components/ui/button';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card flex flex-col h-full p-6 relative overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="mb-3 pt-1">
        <span className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/15">
          {article.category}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gradient-brand mb-2 line-clamp-2">
        {article.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
        {article.excerpt}
      </p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1.5">
          <User className="h-4 w-4" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>{article.readTime}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <Link to={`/conteudos/${article.slug}`}>
          <Button variant="ghost" size="sm" className="group w-full justify-center">
            Ler artigo
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
