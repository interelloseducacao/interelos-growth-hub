# Reescrita completa — Interellos Educação

## Objetivo
Substituir o site atual por uma one-page institucional em `/`, sem login, banco ou venda direta. A página apresentará a Interellos Educação e encaminhará visitantes aos dois cursos e aos dois mentores em seus sites próprios.

## Implementação

### 1. Base visual e navegação
- Recriar os tokens visuais com a paleta exata do brand book, tipografia Space Grotesk, Inter e JetBrains Mono.
- Carregar as fontes pelo documento HTML, mantendo o restante da identidade em tokens semânticos.
- Criar cabeçalho fixo e compacto com logo, âncoras para Cursos, Mentores e Contato, além do WhatsApp.
- Manter somente a página inicial no aplicativo, removendo da experiência pública as rotas, menus, login, PWA prompt e dependências de dados do site antigo.

### 2. One-page institucional
Construir, nesta ordem:
1. Hero escuro com promessa, dois CTAs e os três números de prova social.
2. Seção “O que é a Interellos” com a história, público e mecanismo único fornecidos.
3. Dois cards de cursos com resumo, preço e links externos para as páginas de venda.
4. Dois cards de mentores com iniciais visuais, resumo e links para as páginas pessoais.
5. Três depoimentos em vídeo com thumbnail do YouTube e reprodução sob clique, sem carregamento pesado inicial.
6. CTA final escuro com contato pelo WhatsApp.
7. Rodapé completo com logo negativo, navegação, redes sociais, quatro propriedades, dados legais, privacidade e termos.

### 3. Interações e acabamento
- Todos os links externos abrirão com proteção adequada; links de âncora terão rolagem suave e compensação do cabeçalho.
- Todos os CTAs de WhatsApp usarão `5511952135480` com mensagem pré-preenchida adequada à origem.
- Aplicar o degradê somente nos pontos definidos: destaque principal, card principal, CTA primário e filetes de seção.
- Garantir navegação por teclado, títulos semânticos, contraste, estados de foco e layout responsivo para celular e desktop.

### 4. SEO e descoberta
- Atualizar título, descrição, canonical, Open Graph, geolocalização e Twitter no HTML estático.
- Criar imagem social 1200×630 na paleta oficial e referenciá-la pela URL absoluta do domínio.
- Adicionar JSON-LD em `@graph` para a organização e os dois mentores, incluindo CNPJ, endereço, e-mail e perfis/propriedades oficiais.
- Criar sitemap estático apenas para `https://interellos.com.br/`, com `lastmod` em 2026-09-14.
- Atualizar `robots.txt` com acesso geral, bots solicitados e endereço do sitemap.
- Atualizar nome, descrição e cores do PWA para refletir a nova marca institucional.

### 5. Verificação
- Executar os testes disponíveis do projeto.
- Validar visualmente a página em desktop e celular, incluindo menu, âncoras, vídeos, links e ausência de conteúdo antigo.
- Confirmar o HTML, sitemap, robots e build final antes de entregar o preview.

## Arquivos principais
- `src/pages/Index.tsx`: nova página completa.
- `src/App.tsx`: aplicação reduzida à única página.
- `src/index.css` e `tailwind.config.ts`: identidade e tipografia.
- `index.html`: fontes e SEO estático/JSON-LD.
- `public/og-interellos.png`, `public/sitemap.xml`, `public/robots.txt`: ativos de compartilhamento e indexação.
- `vite.config.ts`: metadados do PWA alinhados à marca.

## Premissas
- O logo atual será reaproveitado, com tratamento visual para funcionar no cabeçalho e no rodapé escuro.
- As páginas antigas poderão permanecer como arquivos sem uso, mas não terão rotas nem links públicos.
- Os vídeos usarão thumbnails oficiais do YouTube e o player só será carregado após o clique.
