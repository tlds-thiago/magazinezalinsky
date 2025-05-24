import { Helmet } from "react-helmet";
import AdSlot from "@/components/ad-slot";

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - TechReviews</title>
        <meta 
          name="description" 
          content="Entenda como utilizamos cookies para melhorar sua experiência no TechReviews e como você pode gerenciar suas preferências."
        />
      </Helmet>
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-center">
            Política de Cookies
          </h1>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p>
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            
            <p>
              Esta Política de Cookies explica o que são cookies, como os utilizamos, as escolhas que você tem em relação ao seu uso e informações adicionais sobre cookies. Esta política complementa nossa <a href="/politica-privacidade">Política de Privacidade</a>.
            </p>
            
            <AdSlot id="cookies-topo" />
            
            <h2>O que são cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou celular) quando você visita determinados sites. Os cookies são amplamente utilizados para fazer os sites funcionarem de maneira mais eficiente, bem como fornecer informações aos proprietários do site.
            </p>
            
            <p>
              Os cookies podem ser "cookies persistentes" ou "cookies de sessão". Os cookies persistentes permanecem no seu computador pessoal ou dispositivo móvel quando você fica offline, enquanto os cookies de sessão são excluídos assim que você fecha o navegador.
            </p>
            
            <h2>Como utilizamos os cookies</h2>
            <p>
              O TechReviews utiliza cookies para vários propósitos, incluindo:
            </p>
            
            <ul>
              <li>
                <strong>Cookies essenciais ou necessários:</strong> Estes cookies são necessários para o funcionamento do site e não podem ser desativados em nossos sistemas. Geralmente, eles são configurados apenas em resposta a ações feitas por você que equivalem a uma solicitação de serviços, como definir suas preferências de privacidade, fazer login ou preencher formulários. Você pode configurar seu navegador para bloquear ou alertá-lo sobre esses cookies, mas algumas partes do site não funcionarão corretamente.
              </li>
              <li>
                <strong>Cookies de desempenho/analíticos:</strong> Estes cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares e ver como os visitantes navegam pelo site. Todas as informações coletadas por esses cookies são agregadas e, portanto, anônimas.
              </li>
              <li>
                <strong>Cookies de funcionalidade:</strong> Estes cookies permitem que o site forneça funcionalidades e personalização aprimoradas. Eles podem ser definidos por nós ou por provedores terceiros cujos serviços adicionamos às nossas páginas. Se você não permitir esses cookies, alguns ou todos esses serviços podem não funcionar corretamente.
              </li>
              <li>
                <strong>Cookies de marketing:</strong> Estes cookies podem ser definidos através do nosso site por nossos parceiros de publicidade. Eles podem ser usados por essas empresas para criar um perfil de seus interesses e mostrar anúncios relevantes em outros sites. Eles não armazenam diretamente informações pessoais, mas são baseados na identificação exclusiva do seu navegador e dispositivo de internet.
              </li>
            </ul>
            
            <AdSlot id="cookies-meio" />
            
            <h2>Cookies específicos que utilizamos</h2>
            <p>
              Utilizamos os seguintes cookies em nosso site:
            </p>
            
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-2 text-left">Cookie</th>
                  <th className="border border-border p-2 text-left">Tipo</th>
                  <th className="border border-border p-2 text-left">Duração</th>
                  <th className="border border-border p-2 text-left">Finalidade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">cookie-consent</td>
                  <td className="border border-border p-2">Essencial</td>
                  <td className="border border-border p-2">1 ano</td>
                  <td className="border border-border p-2">Armazena suas preferências de consentimento de cookies</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">_ga</td>
                  <td className="border border-border p-2">Analítico</td>
                  <td className="border border-border p-2">2 anos</td>
                  <td className="border border-border p-2">Usado pelo Google Analytics para distinguir usuários</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">_gid</td>
                  <td className="border border-border p-2">Analítico</td>
                  <td className="border border-border p-2">24 horas</td>
                  <td className="border border-border p-2">Usado pelo Google Analytics para distinguir usuários</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">_gat</td>
                  <td className="border border-border p-2">Analítico</td>
                  <td className="border border-border p-2">1 minuto</td>
                  <td className="border border-border p-2">Usado pelo Google Analytics para limitar a taxa de solicitações</td>
                </tr>
              </tbody>
            </table>
            
            <h2>Como gerenciar os cookies</h2>
            <p>
              A maioria dos navegadores permite que você controle cookies através das configurações. As configurações de cookies em navegadores populares incluem:
            </p>
            
            <ul>
              <li><strong>Google Chrome:</strong> Menu {'->'} Configurações {'->'} Avançado {'->'} Privacidade e segurança {'->'} Configurações de conteúdo {'->'} Cookies</li>
              <li><strong>Mozilla Firefox:</strong> Menu {'->'} Opções {'->'} Privacidade e Segurança {'->'} Cookies e dados do site</li>
              <li><strong>Safari:</strong> Preferências {'->'} Privacidade {'->'} Cookies e dados do site</li>
              <li><strong>Microsoft Edge:</strong> Menu {'->'} Configurações {'->'} Privacidade e segurança {'->'} Cookies</li>
            </ul>
            
            <p>
              Você também pode visitar <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a> para obter informações detalhadas sobre como excluir ou bloquear cookies e informações gerais sobre cookies.
            </p>
            
            <AdSlot id="cookies-inferior" />
            
            <h2>Aviso de cookies</h2>
            <p>
              Quando você visita nosso site pela primeira vez, mostramos um banner de cookies que solicita seu consentimento para o uso de cookies. Você pode escolher aceitar todos os cookies ou personalizá-los conforme sua preferência.
            </p>
            
            <h2>Consequências de desativar cookies</h2>
            <p>
              Se você optar por desativar cookies, algumas áreas do site podem não funcionar corretamente ou apresentar funcionalidade reduzida. Isso é especialmente verdadeiro para cookies essenciais que são necessários para o funcionamento do site.
            </p>
            
            <h2>Alterações na Política de Cookies</h2>
            <p>
              Podemos atualizar esta Política de Cookies periodicamente. Quando fizermos alterações, atualizaremos a data de "Última atualização" no topo desta política. Recomendamos que você revise esta política regularmente para estar ciente de quaisquer alterações.
            </p>
            
            <h2>Contato</h2>
            <p>
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco através da nossa página de <a href="/contato">Contato</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
