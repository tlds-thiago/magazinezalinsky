import { Helmet } from "react-helmet";
import AdSlot from "@/components/ad-slot";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - TechReviews</title>
        <meta 
          name="description" 
          content="Conheça nossa política de privacidade e como tratamos seus dados pessoais no TechReviews."
        />
      </Helmet>
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-center">
            Política de Privacidade
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
              A sua privacidade é importante para nós. É política do TechReviews respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="/">TechReviews</a>.
            </p>
            
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            
            <AdSlot id="privacidade-topo" />
            
            <h2>Informações que coletamos</h2>
            <p>
              Podemos coletar os seguintes tipos de informações:
            </p>
            
            <ul>
              <li>
                <strong>Informações de identificação pessoal:</strong> como nome, endereço de e-mail e outros dados que você fornece voluntariamente ao usar nossos serviços, como ao se inscrever em nossa newsletter ou enviar um formulário de contato.
              </li>
              <li>
                <strong>Informações de uso:</strong> coletamos informações sobre como você interage com nosso site, incluindo as páginas que visita, o tempo gasto no site, links clicados e preferências de navegação.
              </li>
              <li>
                <strong>Informações do dispositivo:</strong> podemos coletar informações sobre o dispositivo que você usa para acessar nosso site, incluindo modelo de hardware, sistema operacional, identificadores de dispositivo únicos e informações de rede móvel.
              </li>
            </ul>
            
            <h2>Como usamos suas informações</h2>
            <p>
              Usamos as informações que coletamos das seguintes maneiras:
            </p>
            
            <ul>
              <li>Para fornecer, operar e manter nosso site</li>
              <li>Para melhorar, personalizar e expandir nosso site</li>
              <li>Para entender e analisar como você usa nosso site</li>
              <li>Para desenvolver novos produtos, serviços, recursos e funcionalidades</li>
              <li>Para nos comunicar com você, diretamente ou através de um de nossos parceiros, para fornecer atualizações e outras informações relacionadas ao site e para fins de marketing e promocionais</li>
              <li>Para enviar e-mails</li>
              <li>Para encontrar e prevenir fraudes</li>
            </ul>
            
            <AdSlot id="privacidade-meio" />
            
            <h2>Cookies</h2>
            <p>
              O site TechReviews usa cookies para ajudar a personalizar sua experiência online. Um cookie é um arquivo de texto que é colocado no seu disco rígido por um servidor de páginas web. Os cookies não podem ser usados para executar programas ou entregar vírus ao seu computador. Os cookies são atribuídos exclusivamente a você e só podem ser lidos por um servidor web no domínio que emitiu o cookie.
            </p>
            
            <p>
              Podemos usar cookies para coletar, armazenar e rastrear informações para fins estatísticos e de marketing para operar nosso site. Você tem a capacidade de aceitar ou recusar cookies opcionais. Existem alguns cookies necessários para o funcionamento do nosso site. Esses cookies não requerem seu consentimento. Para mais detalhes, consulte nossa <a href="/politica-cookies">Política de Cookies</a>.
            </p>
            
            <h2>Serviços de terceiros</h2>
            <p>
              Podemos empregar serviços de terceiros e indivíduos pelos seguintes motivos:
            </p>
            
            <ul>
              <li>Para facilitar nosso site</li>
              <li>Para fornecer o site em nosso nome</li>
              <li>Para executar serviços relacionados ao site</li>
              <li>Para nos ajudar a analisar como nosso site é usado</li>
            </ul>
            
            <p>
              Queremos informar aos usuários que esses terceiros têm acesso às suas Informações Pessoais. O motivo é realizar as tarefas atribuídas a eles em nosso nome. No entanto, eles são obrigados a não divulgar ou usar as informações para qualquer outra finalidade.
            </p>
            
            <h2>Segurança</h2>
            <p>
              Valorizamos sua confiança em nos fornecer suas Informações Pessoais, portanto, estamos nos esforçando para usar meios comercialmente aceitáveis de protegê-las. Mas lembre-se que nenhum método de transmissão pela internet, ou método de armazenamento eletrônico é 100% seguro e confiável, e não podemos garantir sua segurança absoluta.
            </p>
            
            <AdSlot id="privacidade-inferior" />
            
            <h2>Links para outros sites</h2>
            <p>
              Nosso site pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site. Observe que esses sites externos não são operados por nós. Portanto, recomendamos fortemente que você revise a Política de Privacidade desses sites. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
            </p>
            
            <h2>Alterações a esta Política de Privacidade</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade de tempos em tempos. Assim, recomendamos que você revise esta página periodicamente para quaisquer alterações. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página. Essas alterações são efetivas imediatamente após serem publicadas nesta página.
            </p>
            
            <h2>Contato</h2>
            <p>
              Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em nos contatar através da página de <a href="/contato">Contato</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
