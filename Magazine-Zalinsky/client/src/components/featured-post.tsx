import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Post } from "@shared/schema";
import { formatDate, formatCurrency } from "@/lib/utils";
import SocialShare from "@/components/ui/social-share";
import { Product } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";

export default function FeaturedPost() {
  const { data: post } = useQuery({
    queryKey: ["/api/posts/featured?limit=1"],
    select: (data: Post[]) => data[0],
  });
  
  const { data: products } = useQuery({
    queryKey: ["/api/products/featured?limit=1"],
    select: (data: Product[]) => data[0],
  });
  
  if (!post) {
    return null;
  }
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-center">
            Destaque da Semana
          </h2>
          
          <article className="bg-card rounded-xl shadow-md overflow-hidden">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            
            <div className="p-8">
              <div className="flex items-center text-sm mb-4">
                <span className="text-muted-foreground">{formatDate(post.createdAt)}</span>
                <span className="mx-2 text-muted">•</span>
                <span className="text-primary">Análise Completa</span>
                <span className="mx-2 text-muted">•</span>
                <span className="text-muted-foreground">Por Admin</span>
              </div>
              
              <h3 className="font-heading font-semibold text-2xl md:text-3xl mb-4">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {post.excerpt}
              </p>
              
              {products && (
                <div className="flex flex-col sm:flex-row justify-between items-center p-5 bg-card rounded-lg border border-border">
                  <div>
                    <p className="font-medium">{products.title}</p>
                    <div className="flex items-center mt-1">
                      <span className="font-bold text-xl">{formatCurrency(products.price / 100)}</span>
                      {products.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {formatCurrency(products.oldPrice / 100)}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button asChild 
                    className="mt-4 sm:mt-0 bg-secondary hover:bg-opacity-90 text-white"
                    size="lg"
                  >
                    <a href={products.affiliateLink} target="_blank" rel="noopener noreferrer">
                      Comprar no Mercado Livre
                    </a>
                  </Button>
                </div>
              )}
              
              <div className="flex items-center justify-between mt-8">
                <Link href="/reviews" className="text-primary font-medium hover:underline">
                  Ver todas as análises
                </Link>
                <div className="flex items-center space-x-3">
                  <span className="text-muted-foreground text-sm">Compartilhar:</span>
                  <SocialShare url={`/post/${post.slug}`} title={post.title} size="lg" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
