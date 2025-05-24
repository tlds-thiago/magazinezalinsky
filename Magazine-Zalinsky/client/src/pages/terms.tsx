import { Helmet } from "react-helmet";
import AdSlot from "@/components/ad-slot";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - TechReviews</title>
        <meta 
          name="description" 
          content="Conheça os termos e condições de uso do TechReviews, seu portal de análises e recomendações de produtos tecnológicos."
        />
      </Helmet>
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-center">
            Termos de Uso
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
              Bem-vindo ao TechReviews. Ao acessar e usar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você discordar de qualquer parte destes termos, não poderá acessar ou usar nosso site.
            </p>
            
            <AdSlot id="termos-topo" />
            
            <h2>1. Terminologia</h2>
            <p>
              Os seguintes termos se aplicam a estes Termos e Condições, Declaração de Privacidade e Aviso de Isenção e quaisquer Acordos:
            </p>
            <ul>
              <li>"Cliente", "Você" e "Seu" referem-se a você, a pessoa que acessa este site e aceita os termos e condições da empresa.</li>
              <li>"A Empresa", "Nós", "Nosso" referem-se ao TechReviews.</li>
              <li>"Parte", "Partes" refere-se tanto ao Cliente quanto a nós mesmos, ou ao Cliente ou a nós mesmos.</li>
            </ul>
            
            <h2>2. Uso do Site</h2>
            <p>
              O uso deste site está sujeito às seguintes condições:
            </p>
            <ol>
              <li>
                <strong>Conteúdo:</strong> Todo o conteúdo publicado neste site, incluindo, mas não limitado a, textos, imagens, gráficos, vídeos, é fornecido apenas para fins informativos. Não garantimos a precisão, integridade ou utilidade de qualquer informação neste site.
              </li>
              <li>
                <strong>Uso pessoal e não comercial:</strong> Você pode usar o conteúdo deste site apenas para uso pessoal e não comercial. Não é permitido modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação obtida deste site sem nossa permissão prévia por escrito.
              </li>
              <li>
                <strong>Conduta do usuário:</strong> Ao usar este site, você concorda em não enviar, publicar ou transmitir qualquer material que seja ilegal, ameaçador, abusivo, difamatório, invasivo de privacidade, vulgar, obsceno ou de outra forma censurável.
              </li>
            </ol>
            
            <AdSlot id="termos-meio" />
            
            <h2>3. Afiliados e Links Patrocinados</h2>
            <p>
              O TechReviews participa do Programa de Afiliados do Mercado Livre e outros programas de afiliados. Isso significa que podemos receber uma comissão quando você compra produtos através dos links em nosso site.
            </p>
            <p>
              Queremos deixar claro que:
            </p>
            <ul>
              <li>Todos os links de afiliados são claramente identificados como tal ou indicados na nossa política de afiliados.</li>
              <li>Nossa participação em programas de afiliados não influencia nossas avaliações ou recomendações de produtos.</li>
              <li>Os produtos que recomendamos são escolhidos com base em sua qualidade e valor para o consumidor, independentemente de termos ou não um relacionamento de afiliado com o fabricante ou vendedor.</li>
            </ul>
            
            <h2>4. Propriedade Intelectual</h2>
            <p>
              Todos os direitos de propriedade intelectual relacionados ao site e seu conteúdo (incluindo, mas não limitado a, texto, gráficos, logotipos, imagens, clipes de áudio, downloads digitais, compilações de dados e software) são de propriedade do TechReviews ou de seus licenciadores e são protegidos pelas leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
            </p>
            
            <h2>5. Isenção de Responsabilidade</h2>
            <p>
              As informações neste site são fornecidas "como estão", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos a precisão, confiabilidade ou integridade de qualquer informação, texto, gráficos, links ou outros itens contidos neste site.
            </p>
            <p>
              Em nenhuma circunstância seremos responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucros, ou devido a interrupção de negócios) decorrentes do uso ou da incapacidade de usar os materiais neste site.
            </p>
            
            <AdSlot id="termos-inferior" />
            
            <h2>6. Alterações nos Termos de Uso</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos de uso a qualquer momento. Ao continuar a usar este site após qualquer modificação destes termos, você concorda em estar vinculado à versão atualizada.
            </p>
            
            <h2>7. Lei Aplicável</h2>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil, e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais brasileiros.
            </p>
            
            <h2>8. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através da página de <a href="/contato">Contato</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
