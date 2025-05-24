import { Helmet } from "react-helmet";
import AdSlot from "@/components/ad-slot";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - TechReviews</title>
        <meta 
          name="description" 
          content="Conheça a equipe por trás do TechReviews e nossa missão de fornecer análises imparciais e recomendações de produtos tecnológicos."
        />
      </Helmet>
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-center">
            Sobre Nós
          </h1>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p>
              Bem-vindo ao <strong>TechReviews</strong>, o seu destino definitivo para análises, recomendações e guias de compra de produtos tecnológicos no Brasil.
            </p>
            
            <AdSlot id="sobre-topo" />
            
            <h2>Nossa Missão</h2>
            <p>
              Fundado em 2023, o TechReviews nasceu com uma missão clara: simplificar suas decisões de compra de tecnologia através de análises honestas, detalhadas e imparciais. Entendemos que investir em produtos tecnológicos representa uma decisão significativa para muitas pessoas, e estamos comprometidos em fornecer as informações necessárias para que você faça escolhas acertadas.
            </p>
            
            <h2>O Que Fazemos</h2>
            <p>
              Nossa equipe de especialistas em tecnologia testa rigorosamente cada produto que analisamos, avaliando desempenho, funcionalidades, durabilidade e relação custo-benefício. Não nos limitamos a repetir especificações técnicas – mergulhamos na experiência real de uso para trazer insights que realmente importam para você.
            </p>
            
            <p>
              Além das análises detalhadas, oferecemos:
            </p>
            
            <ul>
              <li>Guias de compra específicos para diferentes categorias de produtos</li>
              <li>Comparativos entre modelos concorrentes</li>
              <li>Dicas para maximizar o uso dos seus dispositivos</li>
              <li>Informações sobre as melhores ofertas disponíveis no mercado</li>
              <li>Notícias sobre lançamentos e tendências tecnológicas</li>
            </ul>
            
            <h2>Nossos Valores</h2>
            <p>
              O TechReviews opera com base em valores fundamentais que norteiam todo o nosso trabalho:
            </p>
            
            <ol>
              <li>
                <strong>Transparência:</strong> Deixamos claro quando nosso conteúdo inclui links de afiliados, e isso nunca influencia nossas avaliações.
              </li>
              <li>
                <strong>Imparcialidade:</strong> Nossos veredictos são baseados exclusivamente na qualidade dos produtos, independentemente de marcas ou parcerias.
              </li>
              <li>
                <strong>Precisão:</strong> Verificamos cuidadosamente todas as informações para garantir a confiabilidade do nosso conteúdo.
              </li>
              <li>
                <strong>Acessibilidade:</strong> Acreditamos que informações técnicas devem ser compreensíveis para todos, independentemente do nível de conhecimento.
              </li>
            </ol>
            
            <AdSlot id="sobre-meio" />
            
            <h2>Programa de Afiliados</h2>
            <p>
              O TechReviews participa do Programa de Afiliados do Mercado Livre. Isso significa que podemos receber uma comissão quando você compra produtos através dos links em nosso site. Esta é uma das formas como mantemos nosso conteúdo gratuito e de alta qualidade.
            </p>
            
            <p>
              É importante ressaltar que nossa participação em programas de afiliados <strong>nunca influencia</strong> nossas avaliações ou recomendações. Os produtos que recomendamos são escolhidos exclusivamente com base em sua qualidade e valor para o consumidor.
            </p>
            
            <h2>Entre em Contato</h2>
            <p>
              Temos o compromisso de construir um relacionamento de confiança com nossa comunidade. Seus comentários, sugestões e perguntas são sempre bem-vindos e nos ajudam a melhorar continuamente.
            </p>
            
            <p>
              Se você deseja entrar em contato conosco, utilize nosso <a href="/contato">formulário de contato</a> ou envie um e-mail para contato@techreviews.com.br.
            </p>
            
            <p>
              Agradecemos por escolher o TechReviews como seu guia de confiança no mundo da tecnologia!
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-6">
        <AdSlot id="sobre-inferior" />
      </div>
    </>
  );
}
