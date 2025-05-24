import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { trackEvent } from "@/lib/analytics";

const emailSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
});

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Você foi inscrito na nossa newsletter.",
        variant: "default",
      });
      setEmail("");
      trackEvent("newsletter_signup", "engagement", "newsletter_form");
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao se inscrever. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse({ email });
      mutation.mutate(email);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro",
          description: "Por favor, insira um e-mail válido.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Receba as melhores ofertas por e-mail
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Cadastre-se para receber novidades, análises exclusivas e ofertas imperdíveis diretamente na sua caixa de entrada.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <Button 
              type="submit" 
              className="bg-secondary hover:bg-opacity-90 text-white font-medium"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </form>
          
          <p className="text-sm opacity-75 mt-4">
            Respeitamos sua privacidade. Nunca enviaremos spam.
          </p>
        </div>
      </div>
    </section>
  );
}
