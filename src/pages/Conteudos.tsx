import { Layout } from '@/components/layout/Layout';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { articles } from '@/data/mockData';
import { useState } from 'react';

const categories = ['Todos', 'Precificacao', 'Gestao', 'Estrategia', 'Crescimento', 'Inovacao', 'Execucao'];

export default function Conteudos() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [email, setEmail] = useState('');

  const filteredArticles = selectedCategory === 'Todos'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Conteudos e Conhecimento
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Artigos, insights e materiais praticos sobre gestao, estrategia 
              e desenvolvimento de negocios.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 bg-secondary">
        <div className="container-section">
          <h2 className="text-xl font-semibold text-foreground mb-6">Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-background">
        <div className="container-section">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary">
        <div className="container-section">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Receba novos conteudos
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Cadastre-se para receber artigos, materiais e novidades diretamente no seu e-mail.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground text-foreground"
                required
              />
              <Button type="submit" className="bg-cta hover:bg-cta-hover text-cta-foreground flex-shrink-0">
                Cadastrar
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
