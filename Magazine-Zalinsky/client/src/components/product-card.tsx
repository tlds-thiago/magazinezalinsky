import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Product } from "@shared/schema";
import { trackEvent } from "@/lib/analytics";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleBuyClick = () => {
    trackEvent("product_click", "ecommerce", product.title, product.price);
  };

  return (
    <Card className="overflow-hidden border border-border hover:shadow-lg transition">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4">
        {product.badge && (
          <span className="bg-accent bg-opacity-20 text-accent px-2 py-1 rounded text-xs font-medium">
            {product.badge}
          </span>
        )}
        <h3 className="font-heading font-semibold text-lg mt-2 line-clamp-1">{product.title}</h3>
        <p className="text-sm text-muted-foreground mt-1 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold">{formatCurrency(product.price / 100)}</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                {formatCurrency(product.oldPrice / 100)}
              </span>
            )}
          </div>
          <Button 
            asChild
            className="bg-secondary hover:bg-opacity-90 text-white"
            onClick={handleBuyClick}
          >
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
              Comprar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
