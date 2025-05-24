import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@shared/schema";
import { formatDate } from "@/lib/utils";
import SocialShare from "@/components/ui/social-share";

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden border border-border hover:shadow-lg transition">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
          loading="lazy"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-center text-sm mb-2">
          <span className="text-muted-foreground">{formatDate(post.createdAt)}</span>
          <span className="mx-2 text-border">•</span>
          <span className="text-primary">{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
        </div>
        <h3 className="font-heading font-semibold text-xl mb-2 hover:text-primary transition line-clamp-2">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <Link href={`/post/${post.slug}`} className="text-primary font-medium hover:underline">
            Ler mais
          </Link>
          <SocialShare url={`/post/${post.slug}`} title={post.title} />
        </div>
      </CardContent>
    </Card>
  );
}
