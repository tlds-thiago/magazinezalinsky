import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { trackEvent } from "@/lib/analytics";

interface SocialShareProps {
  url: string;
  title: string;
  size?: "sm" | "md" | "lg";
}

export default function SocialShare({ url, title, size = "md" }: SocialShareProps) {
  // Get full URL with domain
  const fullUrl = `${window.location.origin}${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  
  const handleShare = (platform: string) => {
    trackEvent("social_share", "engagement", platform);
  };
  
  // Size classes
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  
  return (
    <div className="flex space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary transition"
              aria-label="Compartilhar no Facebook"
              onClick={() => handleShare("facebook")}
              asChild
            >
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={sizeClasses[size]}
              >
                <FaFacebook />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Compartilhar no Facebook</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary transition"
              aria-label="Compartilhar no Twitter"
              onClick={() => handleShare("twitter")}
              asChild
            >
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={sizeClasses[size]}
              >
                <FaTwitter />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Compartilhar no Twitter</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary transition"
              aria-label="Compartilhar no WhatsApp"
              onClick={() => handleShare("whatsapp")}
              asChild
            >
              <a
                href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className={sizeClasses[size]}
              >
                <FaWhatsapp />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Compartilhar no WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
