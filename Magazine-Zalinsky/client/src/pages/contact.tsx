import { useState } from "react";
import { Helmet } from "react-helmet";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";

import AdSlot from "@/components/ad-slot";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  subject: z.string().min(5, {
    message: "O assunto deve ter pelo menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", values);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos seu contato. Responderemos em breve!",
        variant: "default",
      });
      form.reset();
      trackEvent("contact_form_submit", "engagement", "contact_page_success");
    },
    onError: (error) => {
      console.error(error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
      });
      trackEvent("contact_form_error", "engagement", "contact_page_error");
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    mutation.mutate(values);
  }

  return (
    <>
      <Helmet>
        <title>Contato - TechReviews</title>
        <meta
          name="description"
          content="Entre em contato com a equipe do TechReviews. Estamos à disposição para responder suas dúvidas, receber sugestões ou discutir parcerias."
        />
        <meta property="og:title" content="Contato - TechReviews" />
        <meta
          property="og:description"
          content="Entre em contato com a equipe do TechReviews. Estamos à disposição para responder suas dúvidas, receber sugestões ou discutir parcerias."
        />
      </Helmet>

      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-center">
            Entre em Contato
          </h1>
          <p className="text-center mt-4 max-w-2xl mx-auto opacity-90">
            Estamos à disposição para responder suas dúvidas, receber sugestões ou discutir parcerias.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-4">Informações de Contato</h2>
                <p className="text-muted-foreground mb-6">
                  Agradecemos seu interesse em entrar em contato conosco. Utilize o formulário ou os canais abaixo para nos enviar sua mensagem.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-medium">E-mail</h3>
                      <p className="text-muted-foreground">contato@techreviews.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <i className="fas fa-clock text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-medium">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <i className="fas fa-share-alt text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-medium">Redes Sociais</h3>
                      <div className="flex space-x-3 mt-2">
                        <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary" aria-label="WhatsApp">
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-4">Formulário de Contato</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu e-mail" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto</FormLabel>
                          <FormControl>
                            <Input placeholder="Assunto da mensagem" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Sua mensagem" 
                              className="resize-none h-36" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            
            <AdSlot id="contato-meio" className="my-10" />
            
            <div className="bg-muted p-6 rounded-lg mt-8">
              <h2 className="text-xl font-heading font-semibold mb-3">Sobre Parcerias</h2>
              <p className="text-muted-foreground mb-4">
                Somos um portal especializado em análises e recomendações de produtos tecnológicos. Se você é um fabricante, distribuidor ou lojista interessado em parcerias, teremos prazer em discutir oportunidades de colaboração.
              </p>
              <p className="text-muted-foreground">
                Para propostas de parcerias ou colaborações, envie um e-mail para <span className="text-primary font-medium">parcerias@techreviews.com.br</span> com detalhes sobre sua empresa e o tipo de colaboração que você busca.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-6">
        <AdSlot id="contato-inferior" />
      </div>
    </>
  );
}
