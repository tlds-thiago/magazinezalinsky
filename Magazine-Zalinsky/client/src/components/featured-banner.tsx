import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FeaturedBanner() {
  return (
    <section className="relative bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Encontre os melhores produtos de tecnologia
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Análises imparciais e ofertas exclusivas para ajudar na sua escolha
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                asChild 
                variant="secondary" 
                size="lg" 
                className="bg-secondary hover:bg-opacity-90 text-white"
              >
                <Link href="#produtos">Ver ofertas</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="bg-white text-primary hover:bg-opacity-90"
              >
                <Link href="/reviews">Ler análises</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500" 
              alt="Promoção de produtos tecnológicos" 
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                Oferta Especial
              </span>
              <p className="text-white font-medium mt-2">
                Descontos de até 40% em smartphones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
