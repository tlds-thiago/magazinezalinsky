import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Product, Post } from "@shared/schema";

import FeaturedBanner from "@/components/featured-banner";
import AdSlot from "@/components/ad-slot";
import ProductCard from "@/components/product-card";
import BlogPostCard from "@/components/blog-post-card";
import FeaturedPost from "@/components/featured-post";
import NewsletterSignup from "@/components/newsletter-signup";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const { data: featuredProducts } = useQuery<Product[]>({
    queryKey: ["/api/products/featured?limit=6"],
  });

  const { data: recentPosts } = useQuery<Post[]>({
    queryKey: ["/api/posts/recent?limit=3"],
  });

  return (
    <>
      <Helmet>
        <title>TechReviews - Análises e recomendações de produtos tecnológicos</title>
        <meta 
          name="description" 
          content="Descubra as melhores ofertas e análises de produtos eletrônicos. Resenhas detalhadas para ajudar em suas decisões de compra."
        />
        <meta property="og:title" content="TechReviews - Análises e recomendações de produtos" />
        <meta 
          property="og:description" 
          content="Descubra as melhores ofertas e análises de produtos eletrônicos. Resenhas detalhadas para ajudar em suas decisões de compra."
        />
      </Helmet>
      
      <FeaturedBanner />
      
      <div className="container mx-auto px-4 py-6">
        <AdSlot id="banner-topo" />
      </div>
      
      <section id="produtos" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-center">
            Produtos Recomendados
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-opacity-90 text-white">
              <Link href="/ofertas">Ver todos os produtos</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-6">
        <AdSlot id="banner-meio" />
      </div>
      
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-center">
            Artigos Recentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts?.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-opacity-90 text-white">
              <Link href="/reviews">Ver todos os artigos</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <NewsletterSignup />
      
      <FeaturedPost />
      
      <div className="container mx-auto px-4 py-6">
        <AdSlot id="banner-inferior" />
      </div>
    </>
  );
}
