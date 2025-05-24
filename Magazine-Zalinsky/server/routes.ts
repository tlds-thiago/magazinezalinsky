import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Prefix all routes with /api
  
  // Products routes
  app.get("/api/products", async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get("/api/products/featured", async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
    const products = await storage.getFeaturedProducts(limit);
    res.json(products);
  });

  app.get("/api/products/category/:category", async (req, res) => {
    const products = await storage.getProductsByCategory(req.params.category);
    res.json(products);
  });

  app.get("/api/products/:slug", async (req, res) => {
    const product = await storage.getProductBySlug(req.params.slug);
    
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    
    res.json(product);
  });

  // Posts routes
  app.get("/api/posts", async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get("/api/posts/featured", async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
    const posts = await storage.getFeaturedPosts(limit);
    res.json(posts);
  });

  app.get("/api/posts/recent", async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
    const posts = await storage.getRecentPosts(limit);
    res.json(posts);
  });

  app.get("/api/posts/category/:category", async (req, res) => {
    const posts = await storage.getPostsByCategory(req.params.category);
    res.json(posts);
  });

  app.get("/api/posts/:slug", async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    
    if (!post) {
      return res.status(404).json({ message: "Artigo não encontrado" });
    }
    
    res.json(post);
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Mensagem enviada com sucesso!", 
        data: submission 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        success: false, 
        message: "Erro ao processar a solicitação" 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.subscribeToNewsletter(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Inscrição realizada com sucesso!", 
        data: newsletter 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "E-mail inválido", 
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        success: false, 
        message: "Erro ao processar a solicitação" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
