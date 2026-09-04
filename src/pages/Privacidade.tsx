import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Shield,
  FileText,
  UserCheck,
  Lock,
  Cookie,
  Calendar,
  Mail,
  Scale,
  Server,
  Share2,
  ArrowRight,
} from 'lucide-react';

const sections = [
  {
    id: 'controller',
    icon: Shield,
    title: '1. Quem é responsável pelos seus dados',
    content: (
      <>
        <p>
          O controlador dos dados pessoais coletados por este site é a{' '}
          <strong>Interellos Intermediação de Negócios LTDA</strong>, inscrita no
          CNPJ sob o nº <strong>40.937.083/0001-64</strong>, com sede na Lapa, São
          Paulo/SP.
        </p>
        <p>
          Dúvidas sobre esta política ou sobre o tratamento de dados podem ser
          enviadas para{' '}
          <a
            href="mailto:contato@interellos.com.br"
            className="text-primary hover:underline font-medium"
          >
            contato@interellos.com.br
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'data',
    icon: FileText,
    title: '2. Quais dados coletamos',
    content: (
      <>
        <p>Coletamos apenas as informações necessárias para atender você:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Dados de identificação e contato:</strong> nome, e-mail,
            telefone/WhatsApp, nome da empresa e cargo, informados nos
            formulários de lead, contato, consultoria corporativa e inscrição
            em eventos.
          </li>
          <li>
            <strong>Dados comerciais:</strong> faturamento anual, segmento de
            atuação e principais desafios, quando informados voluntariamente no
            formulário corporativo de consultoria.
          </li>
          <li>
            <strong>Dados de navegação:</strong> endereço IP, tipo de navegador,
            páginas visitadas, tempo de permanência e interações no site, obtidos
            por meio de cookies e ferramentas de analytics.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'purpose',
    icon: UserCheck,
    title: '3. Para que usamos seus dados',
    content: (
      <>
        <p>Seus dados são tratados com as seguintes finalidades:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Responder solicitações enviadas pelos formulários de contato.</li>
          <li>
            Apresentar propostas de cursos, mentorias, consultorias e
            treinamentos corporativos.
          </li>
          <li>
            Enviar comunicações sobre eventos, conteúdos educacionais e novidades
            da Interellos.
          </li>
          <li>
            Realizar análises de uso do site para melhorar a experiência de
            navegação e os serviços oferecidos.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'legal',
    icon: Scale,
    title: '4. Base legal para o tratamento',
    content: (
      <>
        <p>
          O tratamento de dados pessoais realizado pela Interellos fundamenta-se
          nas seguintes bases legais previstas na LGPD:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Consentimento:</strong> quando você preenche um formulário e
            autoriza o contato.
          </li>
          <li>
            <strong>Legítimo interesse:</strong> para contato comercial B2B,
            envio de propostas e comunicações relacionadas aos serviços
            contratados ou em negociação.
          </li>
          <li>
            <strong>Execução de contrato:</strong> quando necessário para cumprir
            obrigações de cursos, mentorias ou consultorias contratadas.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing',
    icon: Share2,
    title: '5. Com quem compartilhamos seus dados',
    content: (
      <>
        <p>
          A Interellos não vende dados pessoais. Compartilhamos informações
          apenas quando necessário para a operação dos nossos serviços, com:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Prestadores de serviço:</strong> ferramentas de e-mail
            marketing, CRM, atendimento via WhatsApp Business e hospedagem de
            site.
          </li>
          <li>
            <strong>Ferramentas de analytics:</strong> para mapear o tráfego e o
            comportamento de navegação de forma agregada e anônima.
          </li>
          <li>
            <strong>Exigência legal:</strong> quando houver determinação judicial
            ou obrigação regulatória.
          </li>
        </ul>
        <p>
          Todos os terceiros envolvidos são obrigados a respeitar a LGPD e a
          utilizar os dados apenas para as finalidades contratadas.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    icon: Lock,
    title: '6. Armazenamento e segurança',
    content: (
      <>
        <p>
          Seus dados são armazenados em servidores seguros, com acesso restrito e
          protegido por criptografia, autenticação e outras medidas técnicas e
          administrativas adequadas.
        </p>
        <p>
          Adotamos práticas de segurança para prevenir acessos não autorizados,
          perda, destruição ou vazamento de informações pessoais.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    icon: Server,
    title: '7. Seus direitos como titular',
    content: (
      <>
        <p>
          De acordo com a LGPD, você tem direito a solicitar, a qualquer momento:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Confirmação da existência de tratamento dos seus dados.</li>
          <li>Acesso aos dados pessoais que mantemos.</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
          <li>
            Exclusão dos dados, quando aplicável, exceto quando houver obrigação
            legal de retenção.
          </li>
          <li>Portabilidade dos dados para outro serviço ou produto.</li>
          <li>Revogação do consentimento, quando este for a base legal.</li>
          <li>Oposição ao tratamento por meio do exercício do legítimo interesse.</li>
        </ul>
        <p>
          Para exercer seus direitos, envie um e-mail para{' '}
          <a
            href="mailto:contato@interellos.com.br"
            className="text-primary hover:underline font-medium"
          >
            contato@interellos.com.br
          </a>{' '}
          com o assunto “Solicitação LGPD”.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    icon: Cookie,
    title: '8. Uso de cookies',
    content: (
      <>
        <p>
          Utilizamos cookies para melhorar a navegação e entender como nossos
          visitantes interagem com o site:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Cookies essenciais:</strong> necessários para o
            funcionamento básico do site e da área do aluno.
          </li>
          <li>
            <strong>Cookies de analytics:</strong> coletam dados de navegação de
            forma agregada para análise de desempenho e melhoria contínua.
          </li>
        </ul>
        <p>
          Você pode gerenciar ou desativar os cookies diretamente nas
          configurações do seu navegador. A desativação de cookies essenciais pode
          afetar o funcionamento de algumas funcionalidades.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    icon: Calendar,
    title: '9. Prazo de retenção',
    content: (
      <>
        <p>
          Mantemos seus dados pessoais pelo tempo necessário para cumprir as
          finalidades descritas nesta política, atender obrigações legais,
          exercer direitos em processos judiciais ou administrativos e cumprir
          contratos em vigor.
        </p>
        <p>
          Quando os dados não forem mais necessários, serão anonimizados ou
          eliminados de forma segura.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    icon: FileText,
    title: '10. Alterações nesta política',
    content: (
      <>
        <p>
          Esta Política de Privacidade pode ser atualizada periodicamente para
          refletir mudanças nos serviços, na legislação ou nas práticas da
          Interellos.
        </p>
        <p>
          Recomendamos que você revise esta página com frequência. A data da
          última atualização está indicada ao final do documento.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    icon: Mail,
    title: '11. Canal de contato do Encarregado de Dados (DPO)',
    content: (
      <>
        <p>
          O canal de comunicação com o Encarregado de Proteção de Dados da
          Interellos está disponível pelo e-mail:
        </p>
        <p className="font-medium">
          <a
            href="mailto:contato@interellos.com.br"
            className="text-primary hover:underline"
          >
            contato@interellos.com.br
          </a>
        </p>
        <p>
          Responderemos às solicitações no prazo estabelecido pela legislação
          vigente.
        </p>
      </>
    ),
  },
];

export default function Privacidade() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Política de <span className="text-gradient-brand">Privacidade</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Entenda como a Interellos coleta, usa e protege suas informações,
              em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
        {/* Decorative blurred orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[hsl(var(--brand-purple))]/20 blur-3xl" />

        <div className="container-section relative">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-[hsl(var(--brand-purple))]/40 to-transparent shadow-[0_10px_40px_-12px_hsl(var(--brand-purple)/0.35)]"
                >
                  <div className="rounded-2xl bg-card/95 backdrop-blur-sm p-7 md:p-9 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--brand-purple))] flex items-center justify-center shadow-[0_0_18px_hsl(var(--brand-purple)/0.5)]">
                        <section.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl md:text-2xl font-bold text-gradient-brand mb-4">
                          {section.title}
                        </h2>
                        <div className="space-y-4 text-foreground/85 leading-relaxed text-[15px] md:text-base">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Last update */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                Última atualização: 04 de setembro de 2026.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-[hsl(var(--brand-purple))]/50 to-primary/50 shadow-[0_10px_50px_-12px_hsl(var(--brand-purple)/0.4)]">
              <div className="rounded-2xl bg-card/95 backdrop-blur-sm p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gradient-brand mb-4">
                  Ficou com alguma dúvida?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                  Nossa equipe está à disposição para esclarecer qualquer questão
                  sobre privacidade e proteção de dados.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-cta hover:bg-cta-hover text-cta-foreground shadow-[0_0_20px_hsl(var(--cta)/0.4)] hover:shadow-[0_0_30px_hsl(var(--cta)/0.6)]"
                  >
                    <Link to="/contato">
                      Falar com a Interellos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 hover:bg-white/5"
                  >
                    <a href="mailto:contato@interellos.com.br">
                      Enviar e-mail
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
