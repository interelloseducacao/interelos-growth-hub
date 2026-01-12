import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { CourseCard } from '@/components/cards/CourseCard';
import { Button } from '@/components/ui/button';
import { courses } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';

const modalities = [
  { value: 'all', label: 'Todas' },
  { value: 'ead', label: 'EAD' },
  { value: 'hibrido', label: 'Hibrido' },
  { value: 'presencial', label: 'Presencial' },
];

const types = [
  { value: 'all', label: 'Todos' },
  { value: 'curso', label: 'Curso' },
  { value: 'treinamento', label: 'Treinamento' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'imersao', label: 'Imersao' },
];

const themes = [
  'Precificacao',
  'Gestao',
  'Estrategia',
  'Crescimento',
  'Inovacao',
  'Lideranca',
  'Vendas',
  'Financas',
];

export default function Cursos() {
  const [modalityFilter, setModalityFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [themeFilter, setThemeFilter] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = courses.filter((course) => {
    if (modalityFilter !== 'all' && course.modality !== modalityFilter) return false;
    if (typeFilter !== 'all' && course.type !== typeFilter) return false;
    if (themeFilter.length > 0 && !course.themes.some(t => themeFilter.includes(t))) return false;
    return true;
  });

  const clearFilters = () => {
    setModalityFilter('all');
    setTypeFilter('all');
    setThemeFilter([]);
  };

  const hasActiveFilters = modalityFilter !== 'all' || typeFilter !== 'all' || themeFilter.length > 0;

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Cursos e Treinamentos
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Formacoes completas para empreendedores e gestores que buscam 
              desenvolver competencias e acelerar resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="section-padding bg-background">
        <div className="container-section">
          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-6">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filtros
              {hasActiveFilters && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                  Ativos
                </span>
              )}
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="sticky top-24 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Filtros</h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Limpar
                    </button>
                  )}
                </div>

                {/* Modality Filter */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Modalidade</h4>
                  <div className="space-y-2">
                    {modalities.map((mod) => (
                      <label key={mod.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="modality"
                          value={mod.value}
                          checked={modalityFilter === mod.value}
                          onChange={(e) => setModalityFilter(e.target.value)}
                          className="text-primary"
                        />
                        <span className="text-sm text-muted-foreground">{mod.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Tipo</h4>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <label key={type.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value={type.value}
                          checked={typeFilter === type.value}
                          onChange={(e) => setTypeFilter(e.target.value)}
                          className="text-primary"
                        />
                        <span className="text-sm text-muted-foreground">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Theme Filter */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Tema</h4>
                  <div className="flex flex-wrap gap-2">
                    {themes.map((theme) => (
                      <button
                        key={theme}
                        onClick={() => {
                          setThemeFilter(prev =>
                            prev.includes(theme)
                              ? prev.filter(t => t !== theme)
                              : [...prev, theme]
                          );
                        }}
                        className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                          themeFilter.includes(theme)
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-secondary text-secondary-foreground border-border hover:border-primary'
                        }`}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Course Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'resultado' : 'resultados'}
                </p>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    Nenhum curso encontrado com os filtros selecionados.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Limpar filtros
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Corporate Training Block */}
          <div className="mt-16 bg-secondary rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Treinamentos para Empresas
                </h3>
                <p className="text-muted-foreground mb-4">
                  Desenvolvemos programas sob medida para sua equipe, 
                  com conteudo adaptado aos desafios especificos do seu negocio.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Formato in-company ou aberto
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Carga horaria flexivel
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Cases e exercicios personalizados
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Link to="/consultoria">
                  <Button size="lg" className="bg-cta hover:bg-cta-hover text-cta-foreground">
                    Solicitar Proposta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
