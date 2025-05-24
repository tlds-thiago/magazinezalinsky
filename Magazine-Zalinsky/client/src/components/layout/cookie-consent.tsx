import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("cookie-consent");
    
    if (!cookieChoice) {
      // Show after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    trackEvent("cookie_consent", "engagement", "accepted");
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    trackEvent("cookie_consent", "engagement", "declined");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark text-white p-4 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 mr-4">
            <p>
              Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
              <Link href="/politica-cookies" className="text-primary hover:underline">
                Política de Cookies
              </Link>.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button
              onClick={handleAccept}
              className="bg-primary hover:bg-opacity-90 text-white"
            >
              Aceitar
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-gray-500 hover:border-white text-white bg-transparent"
            >
              Recusar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
