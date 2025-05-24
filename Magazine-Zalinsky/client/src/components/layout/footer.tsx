import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">
              Tech<span className="text-secondary">Reviews</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Análises imparciais e recomendações de produtos tecnológicos para ajudar você a fazer a melhor escolha.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Início</Link></li>
              <li><Link href="/reviews" className="text-gray-400 hover:text-white transition">Análises</Link></li>
              <li><Link href="/ofertas" className="text-gray-400 hover:text-white transition">Ofertas</Link></li>
              <li><Link href="/guias" className="text-gray-400 hover:text-white transition">Guias de Compra</Link></li>
              <li><Link href="/sobre" className="text-gray-400 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
          
          {/* Coluna 3: Categorias */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><Link href="/reviews?category=smartphones" className="text-gray-400 hover:text-white transition">Smartphones</Link></li>
              <li><Link href="/reviews?category=notebooks" className="text-gray-400 hover:text-white transition">Notebooks</Link></li>
              <li><Link href="/reviews?category=fones" className="text-gray-400 hover:text-white transition">Fones de Ouvido</Link></li>
              <li><Link href="/reviews?category=cameras" className="text-gray-400 hover:text-white transition">Câmeras</Link></li>
              <li><Link href="/reviews?category=smart-tvs" className="text-gray-400 hover:text-white transition">Smart TVs</Link></li>
            </ul>
          </div>
          
          {/* Coluna 4: Informações Legais */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Informações</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-gray-400 hover:text-white transition">Sobre Nós</Link></li>
              <li><Link href="/politica-privacidade" className="text-gray-400 hover:text-white transition">Política de Privacidade</Link></li>
              <li><Link href="/termos-uso" className="text-gray-400 hover:text-white transition">Termos de Uso</Link></li>
              <li><Link href="/politica-cookies" className="text-gray-400 hover:text-white transition">Política de Cookies</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-white transition">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TechReviews. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm">
            Este site participa do Programa de Afiliados do Mercado Livre, um programa de publicidade por afiliação onde sites podem ganhar comissão por publicidade e links para o Mercado Livre.
          </p>
        </div>
      </div>
    </footer>
  );
}
