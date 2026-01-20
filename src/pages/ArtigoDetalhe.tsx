import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { Button } from '@/components/ui/button';
import { articles } from '@/data/mockData';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

export default function ArtigoDetalhe() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="container-section section-padding text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo nao encontrado</h1>
          <Link to="/conteudos">
            <Button>Voltar para conteudos</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-secondary">
        <div className="container-section">
          <Link 
            to="/conteudos" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para conteudos
          </Link>

          <div className="max-w-3xl">
            <span className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                {article.excerpt}
              </p>

              <div className="space-y-6 text-foreground">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Topico Principal</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Ponto importante numero um</li>
                  <li>Ponto importante numero dois</li>
                  <li>Ponto importante numero tres</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusao</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 p-6 bg-secondary rounded-xl">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Quer aprofundar neste tema?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Conheca nossos cursos e treinamentos sobre {article.category.toLowerCase()}.
                </p>
                <div className="flex gap-3">
                  <Link to="/cursos">
                    <Button className="bg-cta hover:bg-cta-hover text-cta-foreground">
                      Ver Cursos
                    </Button>
                  </Link>
                  <Link to="/contato">
                    <Button variant="outline">
                      Falar com a Interellos
                    </Button>
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="p-6 bg-secondary rounded-xl">
                  <h4 className="font-semibold text-foreground mb-4">
                    Sobre o autor
                  </h4>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">EI</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{article.author}</p>
                      <p className="text-sm text-muted-foreground">Interellos</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Conteudo produzido pela equipe de especialistas da Interellos.
                  </p>
                </div>

                <div className="p-6 bg-primary rounded-xl text-primary-foreground">
                  <h4 className="font-semibold mb-2">Precisa de ajuda?</h4>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Nossa equipe pode ajudar sua empresa com desafios relacionados a este tema.
                  </p>
                  <Link to="/contato">
                    <Button variant="secondary" size="sm" className="w-full">
                      Falar com Especialista
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-16 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Artigos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
