import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Helmet } from "react-helmet";
import { Post, Product } from "@shared/schema";
import { formatDate, formatCurrency } from "@/lib/utils";
import AdSlot from "@/components/ad-slot";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SocialShare from "@/components/ui/social-share";
import NewsletterSignup from "@/components/newsletter-signup";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import NotFound from "./not-found";

export default function PostPage() {
  const [, params] = useRoute<{ slug: string }>("/post/:slug");
  
  if (!params) {
    return <NotFound />;
  }
  
  const { slug } = params;
  
  const { data: post, isLoading, error } = useQuery<Post>({
    queryKey: [`/api/posts/${slug}`],
  });
  
  const { data: relatedProduct } = useQuery<Product[]>({
    queryKey: ["/api/products/featured?limit=1"],
    select: (data) => data[0],
    enabled: !!post,
  });
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted animate-pulse h-80 rounded-lg mb-8"></div>
          <div className="h-10 bg-muted animate-pulse rounded mb-4"></div>
          <div className="h-6 bg-muted animate-pulse rounded mb-8"></div>
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-muted animate-pulse rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return <NotFound />;
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title} - TechReviews</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} - TechReviews`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center text-sm mb-4">
              <span className="text-muted-foreground">{formatDate(post.createdAt)}</span>
              <span className="mx-2 text-muted">•</span>
              <span className="text-primary">{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
              <span className="mx-2 text-muted">•</span>
              <span className="text-muted-foreground">Por Admin</span>
            </div>
            
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6">{post.title}</h1>
            
            <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>
            
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover rounded-lg mb-8"
              loading="lazy"
            />
            
            <AdSlot id="post-topo" />
            
            <div className="prose prose-lg max-w-none my-8">
              {/* Rendering markdown content as HTML would go here */}
              {post.content.split('\n').map((paragraph, idx) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={idx} className="text-2xl font-bold mt-6 mb-4">{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-lg font-bold mt-5 mb-2">{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={idx} className="ml-6 mb-2">{paragraph.substring(2)}</li>;
                } else if (paragraph.trim() === '') {
                  return <br key={idx} />;
                } else {
                  return <p key={idx} className="mb-4">{paragraph}</p>;
                }
              })}
            </div>
            
            <AdSlot id="post-meio" />
            
            {relatedProduct && (
              <div className="flex flex-col sm:flex-row justify-between items-center p-6 bg-card rounded-lg border border-border my-8">
                <div>
                  <p className="font-medium">{relatedProduct.title}</p>
                  <div className="flex items-center mt-1">
                    <span className="font-bold text-xl">{formatCurrency(relatedProduct.price / 100)}</span>
                    {relatedProduct.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        {formatCurrency(relatedProduct.oldPrice / 100)}
                      </span>
                    )}
                  </div>
                </div>
                <Button asChild 
                  className="mt-4 sm:mt-0 bg-secondary hover:bg-opacity-90 text-white"
                  size="lg"
                >
                  <a href={relatedProduct.affiliateLink} target="_blank" rel="noopener noreferrer">
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
            
            <Separator className="my-8" />
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-6">Posts relacionados</h3>
            </div>
          </div>
        </div>
      </article>
      
      <div className="container mx-auto px-4 py-6">
        <AdSlot id="post-inferior" />
      </div>
      
      <NewsletterSignup />
    </>
  );
}
