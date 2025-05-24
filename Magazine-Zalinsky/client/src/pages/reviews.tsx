import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Post } from "@shared/schema";
import BlogPostCard from "@/components/blog-post-card";
import AdSlot from "@/components/ad-slot";
import { useLocation } from "wouter";

export default function Reviews() {
  const [location] = useLocation();
  const params = new URLSearchParams(location.split('?')[1]);
  const category = params.get('category');
  
  const queryKey = category 
    ? [`/api/posts/category/${category}`] 
    : ["/api/posts"];
  
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey,
  });

  const pageTitle = category 
    ? `Análises de ${getCategoryName(category)} - TechReviews` 
    : "Todas as Análises - TechReviews";
  
  const pageDescription = category 
    ? `Confira nossas análises detalhadas de ${getCategoryName(category)}. Recomendações, testes e avaliações completas.` 
    : "Explore todas as nossas análises de produtos tecnológicos. Avaliações imparciais para ajudar em suas decisões de compra.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>
      
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-center">
            {category ? `Análises de ${getCategoryName(category)}` : "Todas as Análises"}
          </h1>
          <p className="text-center mt-4 max-w-2xl mx-auto opacity-90">
            {pageDescription}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        <AdSlot id="banner-topo-reviews" />
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-muted animate-pulse rounded-lg h-96"></div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-2">Nenhuma análise encontrada</h3>
              <p className="text-muted-foreground">
                Não encontramos análises {category ? `na categoria ${getCategoryName(category)}` : ''}.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-6">
        <AdSlot id="banner-inferior-reviews" />
      </div>
    </>
  );
}

function getCategoryName(slug: string): string {
  const categories: Record<string, string> = {
    'smartphones': 'Smartphones',
    'notebooks': 'Notebooks',
    'fones': 'Fones de Ouvido',
    'cameras': 'Câmeras',
    'smart-tvs': 'Smart TVs',
    'smartwatches': 'Smartwatches',
    'guias': 'Guias',
    'análises': 'Análises'
  };
  
  return categories[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
}
