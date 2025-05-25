// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  products;
  posts;
  contactSubmissions;
  newsletters;
  currentUserId;
  currentProductId;
  currentPostId;
  currentContactId;
  currentNewsletterId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.products = /* @__PURE__ */ new Map();
    this.posts = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.newsletters = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentPostId = 1;
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
    this.createUser({
      username: "admin",
      password: "admin123",
      email: "admin@techreviews.com.br",
      name: "Administrador"
    });
    this.initializeProducts();
    this.initializePosts();
  }
  // Initialize sample data
  initializeProducts() {
    const sampleProducts = [
      {
        title: "Smartphone XYZ Ultra",
        slug: "smartphone-xyz-ultra",
        description: "O mais avan\xE7ado smartphone com c\xE2mera de 108MP e processador ultra-r\xE1pido.",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
        price: 349900,
        oldPrice: 399900,
        affiliateLink: "https://www.mercadolivre.com.br/produto1",
        category: "smartphones",
        featured: true,
        badge: "Top Vendas"
      },
      {
        title: "Notebook PowerPro",
        slug: "notebook-powerpro",
        description: "Notebook para profissionais com 16GB RAM, SSD de 512GB e tela de alta resolu\xE7\xE3o.",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        price: 489900,
        oldPrice: 549900,
        affiliateLink: "https://www.mercadolivre.com.br/produto2",
        category: "notebooks",
        featured: true,
        badge: "Recomendado"
      },
      {
        title: "Fones SoundMax Pro",
        slug: "fones-soundmax-pro",
        description: "Fones de ouvido sem fio com cancelamento de ru\xEDdo e bateria de 36 horas.",
        image: "https://images.unsplash.com/photo-1600003263720-95b45a4035d5",
        price: 69900,
        oldPrice: 89900,
        affiliateLink: "https://www.mercadolivre.com.br/produto3",
        category: "fones",
        featured: true,
        badge: "Oferta"
      },
      {
        title: "C\xE2mera ProShot X5",
        slug: "camera-proshot-x5",
        description: "C\xE2mera mirrorless com sensor full-frame de 42MP e grava\xE7\xE3o em 4K.",
        image: "https://pixabay.com/get/g75c5a7a60fc9b46a98ae6e6be0bafc6016bb22fa80d271bf3c3ed2da60c04761e93ed26563477228ac4d3c1b05c0f63d5bdb37d026b2a6965b3cbe2a4e49977f_1280.jpg",
        price: 799900,
        oldPrice: 859900,
        affiliateLink: "https://www.mercadolivre.com.br/produto4",
        category: "cameras",
        featured: true,
        badge: "Novidade"
      },
      {
        title: 'Smart TV UltraHD 55"',
        slug: "smart-tv-ultrahd-55",
        description: "TV com resolu\xE7\xE3o 4K, HDR, sistema operacional inteligente e design slim.",
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
        price: 329900,
        oldPrice: 379900,
        affiliateLink: "https://www.mercadolivre.com.br/produto5",
        category: "smart-tvs",
        featured: true,
        badge: "Recomendado"
      },
      {
        title: "Smartwatch FitPro",
        slug: "smartwatch-fitpro",
        description: "Rel\xF3gio inteligente com monitoramento card\xEDaco, GPS e bateria de longa dura\xE7\xE3o.",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb",
        price: 89900,
        oldPrice: 119900,
        affiliateLink: "https://www.mercadolivre.com.br/produto6",
        category: "smartwatches",
        featured: true,
        badge: "Oferta"
      }
    ];
    for (const product of sampleProducts) {
      this.createProduct(product);
    }
  }
  initializePosts() {
    const samplePosts = [
      {
        title: "Como escolher o smartphone ideal para suas necessidades",
        slug: "como-escolher-smartphone-ideal",
        excerpt: "Aprenda a identificar os recursos que realmente importam na hora de escolher um novo smartphone.",
        content: "# Como escolher o smartphone ideal para suas necessidades\n\nA escolha de um novo smartphone pode ser uma tarefa desafiadora, especialmente com tantas op\xE7\xF5es dispon\xEDveis no mercado. Neste guia, vamos ajud\xE1-lo a identificar os recursos que realmente importam para o seu uso di\xE1rio.\n\n## Considere o seu or\xE7amento\n\nAntes de tudo, defina quanto voc\xEA est\xE1 disposto a gastar. Smartphones est\xE3o dispon\xEDveis em todas as faixas de pre\xE7o, desde modelos b\xE1sicos at\xE9 aparelhos premium. Ter um or\xE7amento definido ajudar\xE1 a limitar suas op\xE7\xF5es e evitar gastos desnecess\xE1rios.\n\n## Processador e RAM\n\nO processador e a quantidade de RAM determinam o desempenho do seu smartphone. Se voc\xEA usa muitos aplicativos simult\xE2neos ou jogos, considere no m\xEDnimo 6GB de RAM e um processador de \xFAltima gera\xE7\xE3o.\n\n## Bateria\n\nA dura\xE7\xE3o da bateria \xE9 crucial para a maioria dos usu\xE1rios. Procure smartphones com baterias de pelo menos 4000mAh para garantir que o aparelho dure o dia todo.\n\n## C\xE2mera\n\nSe voc\xEA gosta de fotografia, preste aten\xE7\xE3o \xE0s especifica\xE7\xF5es da c\xE2mera. Lembre-se que mais megapixels nem sempre significam melhores fotos - o software e o processamento de imagem s\xE3o igualmente importantes.\n\n## Armazenamento\n\nConsidere quanto espa\xE7o voc\xEA precisa para aplicativos, fotos, v\xEDdeos e outros arquivos. Modelos com slot para cart\xE3o microSD oferecem expansibilidade extra.\n\n## Conclus\xE3o\n\nO smartphone ideal \xE9 aquele que atende \xE0s suas necessidades espec\xEDficas dentro do seu or\xE7amento. N\xE3o se deixe levar apenas pelo hype em torno dos \xFAltimos lan\xE7amentos - avalie cuidadosamente o que realmente importa para voc\xEA.",
        image: "https://images.unsplash.com/photo-1648737963503-1a26da876aca",
        authorId: 1,
        category: "guias",
        featured: true
      },
      {
        title: "Os 5 melhores notebooks para trabalho remoto em 2023",
        slug: "melhores-notebooks-trabalho-remoto-2023",
        excerpt: "Comparamos os modelos mais avan\xE7ados para quem precisa de produtividade em qualquer lugar.",
        content: "# Os 5 melhores notebooks para trabalho remoto em 2023\n\nO trabalho remoto se tornou uma realidade para muitas pessoas, e ter um notebook confi\xE1vel e potente \xE9 essencial. Neste artigo, comparamos os melhores modelos para profissionais que precisam de produtividade em qualquer lugar.\n\n## 1. Notebook PowerPro\n\nO PowerPro \xE9 nossa escolha principal para trabalho remoto. Com processador de \xFAltima gera\xE7\xE3o, 16GB de RAM e SSD de 512GB, ele oferece desempenho excepcional para multitarefas. A tela de alta resolu\xE7\xE3o proporciona conforto visual durante longas horas de trabalho.\n\n**Pre\xE7o:** R$ 4.899,00\n\n## 2. UltraBook X360\n\nPara quem precisa de versatilidade, o X360 \xE9 uma excelente op\xE7\xE3o. Seu design convers\xEDvel permite us\xE1-lo como tablet, e a bateria dura impressionantes 12 horas.\n\n**Pre\xE7o:** R$ 5.299,00\n\n## 3. ProBook Air\n\nSe mobilidade \xE9 sua prioridade, o ProBook Air pesa apenas 1,2kg e tem menos de 1,5cm de espessura, sem comprometer o desempenho.\n\n**Pre\xE7o:** R$ 4.599,00\n\n## 4. WorkMaster 15\n\nPara quem trabalha com design gr\xE1fico ou edi\xE7\xE3o de v\xEDdeo, o WorkMaster 15 oferece GPU dedicada e tela com alta precis\xE3o de cores.\n\n**Pre\xE7o:** R$ 6.299,00\n\n## 5. BusinessBook Pro\n\nFocado em seguran\xE7a e durabilidade, o BusinessBook Pro inclui leitor de impress\xE3o digital, chassi refor\xE7ado e certifica\xE7\xF5es militares de resist\xEAncia.\n\n**Pre\xE7o:** R$ 5.799,00\n\n## Conclus\xE3o\n\nA escolha do notebook ideal depende das suas necessidades espec\xEDficas de trabalho. Considere fatores como mobilidade, dura\xE7\xE3o da bateria e tipo de tarefas que voc\xEA realiza antes de fazer seu investimento.",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
        authorId: 1,
        category: "an\xE1lises",
        featured: true
      },
      {
        title: "An\xE1lise: SoundMax Pro supera expectativas com \xE1udio impressionante",
        slug: "analise-soundmax-pro-fones-audio-impressionante",
        excerpt: "Testamos por duas semanas os novos fones de ouvido que est\xE3o conquistando o mercado.",
        content: "# An\xE1lise: SoundMax Pro supera expectativas com \xE1udio impressionante\n\nPassamos as \xFAltimas duas semanas testando intensivamente os fones de ouvido SoundMax Pro, um modelo que promete cancelamento de ru\xEDdo avan\xE7ado e qualidade sonora excepcional. Ser\xE1 que ele cumpre o prometido? Vamos descobrir.\n\n## Design e conforto\n\nOs SoundMax Pro apresentam um design elegante e minimalista, com acabamento premium em pl\xE1stico soft-touch e almofadas de espuma com mem\xF3ria cobertas por couro sint\xE9tico. Os fones s\xE3o surpreendentemente leves (apenas 255g) e, mesmo em sess\xF5es de uso prolongado, n\xE3o causaram desconforto.\n\n## Qualidade de \xE1udio\n\nEste \xE9 o ponto forte dos SoundMax Pro. Os drivers de 40mm entregam graves profundos sem comprometer os m\xE9dios e agudos. O perfil sonoro \xE9 bastante equilibrado, favorecendo ligeiramente os graves, o que agradar\xE1 a maioria dos ouvintes.\n\n## Cancelamento de ru\xEDdo\n\nO sistema de cancelamento de ru\xEDdo ativo (ANC) \xE9 um dos melhores que j\xE1 testamos nesta faixa de pre\xE7o. Ele elimina eficientemente ru\xEDdos constantes como o de avi\xF5es, ar-condicionado e o burburinho de escrit\xF3rios. Existe tamb\xE9m um modo de ambiente que permite ouvir os sons ao redor quando necess\xE1rio.\n\n## Bateria\n\nA dura\xE7\xE3o da bateria \xE9 impressionante: conseguimos aproximadamente 34 horas de uso com ANC ativado, muito pr\xF3ximo das 36 horas anunciadas pelo fabricante. O carregamento completo leva cerca de 2 horas via USB-C.\n\n## Conectividade\n\nO Bluetooth 5.2 garante conex\xE3o est\xE1vel e alcance satisfat\xF3rio. Os fones suportam m\xFAltiplas conex\xF5es simult\xE2neas, permitindo alternar facilmente entre smartphone e computador, por exemplo.\n\n## Veredicto final\n\nPor R$ 699,00 (atualmente com desconto sobre o pre\xE7o original de R$ 899,00), os SoundMax Pro oferecem um valor excepcional. O conforto, qualidade sonora, cancelamento de ru\xEDdo eficiente e bateria de longa dura\xE7\xE3o os tornam uma excelente op\xE7\xE3o para trabalho, viagens ou simplesmente apreciar suas m\xFAsicas favoritas.\n\n### Pontua\xE7\xE3o: 9/10\n",
        image: "https://pixabay.com/get/gc37c9e1270b839dc6ce1386b06870b931a910ba5d0d27040fc5e6fd7979534a5abace4c5b4f3bfcebefc2cb9174b5bbf037412febf7a3a52a6d8ddfbcabf44b1_1280.jpg",
        authorId: 1,
        category: "an\xE1lises",
        featured: true
      }
    ];
    for (const post of samplePosts) {
      this.createPost(post);
    }
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const now = /* @__PURE__ */ new Date();
    const user = {
      ...insertUser,
      id,
      isAdmin: false,
      createdAt: now
    };
    this.users.set(id, user);
    return user;
  }
  // Product methods
  async getProducts() {
    return Array.from(this.products.values());
  }
  async getProductById(id) {
    return this.products.get(id);
  }
  async getProductBySlug(slug) {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug
    );
  }
  async getFeaturedProducts(limit) {
    const featured = Array.from(this.products.values()).filter((product) => product.featured).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    if (limit) {
      return featured.slice(0, limit);
    }
    return featured;
  }
  async getProductsByCategory(category) {
    return Array.from(this.products.values()).filter((product) => product.category === category).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async createProduct(insertProduct) {
    const id = this.currentProductId++;
    const now = /* @__PURE__ */ new Date();
    const product = {
      ...insertProduct,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.products.set(id, product);
    return product;
  }
  async updateProduct(id, product) {
    const existingProduct = this.products.get(id);
    if (!existingProduct) {
      return void 0;
    }
    const updatedProduct = {
      ...existingProduct,
      ...product,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }
  async deleteProduct(id) {
    return this.products.delete(id);
  }
  // Post methods
  async getPosts() {
    return Array.from(this.posts.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async getPostById(id) {
    return this.posts.get(id);
  }
  async getPostBySlug(slug) {
    return Array.from(this.posts.values()).find(
      (post) => post.slug === slug
    );
  }
  async getFeaturedPosts(limit) {
    const featured = Array.from(this.posts.values()).filter((post) => post.featured).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    if (limit) {
      return featured.slice(0, limit);
    }
    return featured;
  }
  async getRecentPosts(limit) {
    const posts2 = Array.from(this.posts.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    if (limit) {
      return posts2.slice(0, limit);
    }
    return posts2;
  }
  async getPostsByCategory(category) {
    return Array.from(this.posts.values()).filter((post) => post.category === category).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async createPost(insertPost) {
    const id = this.currentPostId++;
    const now = /* @__PURE__ */ new Date();
    const post = {
      ...insertPost,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.posts.set(id, post);
    return post;
  }
  async updatePost(id, post) {
    const existingPost = this.posts.get(id);
    if (!existingPost) {
      return void 0;
    }
    const updatedPost = {
      ...existingPost,
      ...post,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.posts.set(id, updatedPost);
    return updatedPost;
  }
  async deletePost(id) {
    return this.posts.delete(id);
  }
  // Contact methods
  async createContactSubmission(submission) {
    const id = this.currentContactId++;
    const now = /* @__PURE__ */ new Date();
    const contactSubmission = {
      ...submission,
      id,
      createdAt: now
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  async getContactSubmissions() {
    return Array.from(this.contactSubmissions.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  // Newsletter methods
  async subscribeToNewsletter(data) {
    const existing = Array.from(this.newsletters.values()).find(
      (newsletter2) => newsletter2.email === data.email
    );
    if (existing) {
      return existing;
    }
    const id = this.currentNewsletterId++;
    const now = /* @__PURE__ */ new Date();
    const newsletter = {
      ...data,
      id,
      createdAt: now
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
  async getNewsletterSubscribers() {
    return Array.from(this.newsletters.values());
  }
};
var storage = new MemStorage();

// server/routes.ts
import { z } from "zod";

// shared/schema.ts
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  price: integer("price").notNull(),
  // Price in cents
  oldPrice: integer("old_price"),
  affiliateLink: text("affiliate_link").notNull(),
  category: text("category").notNull(),
  featured: boolean("featured").default(false).notNull(),
  badge: text("badge"),
  // e.g. "Top Vendas", "Recomendado", "Oferta"
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  image: text("image").notNull(),
  authorId: integer("author_id").references(() => users.id).notNull(),
  category: text("category").notNull(),
  featured: boolean("featured").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  isAdmin: true
});
var insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertPostSchema = createInsertSchema(posts).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});
var insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true
});
var insertNewsletterSchema = createInsertSchema(newsletters).omit({
  id: true,
  createdAt: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/products", async (req, res) => {
    const products2 = await storage.getProducts();
    res.json(products2);
  });
  app2.get("/api/products/featured", async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
    const products2 = await storage.getFeaturedProducts(limit);
    res.json(products2);
  });
  app2.get("/api/products/category/:category", async (req, res) => {
    const products2 = await storage.getProductsByCategory(req.params.category);
    res.json(products2);
  });
  app2.get("/api/products/:slug", async (req, res) => {
    const product = await storage.getProductBySlug(req.params.slug);
    if (!product) {
      return res.status(404).json({ message: "Produto n\xE3o encontrado" });
    }
    res.json(product);
  });
  app2.get("/api/posts", async (req, res) => {
    const posts2 = await storage.getPosts();
    res.json(posts2);
  });
  app2.get("/api/posts/featured", async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
    const posts2 = await storage.getFeaturedPosts(limit);
    res.json(posts2);
  });
  app2.get("/api/posts/recent", async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : void 0;
    const posts2 = await storage.getRecentPosts(limit);
    res.json(posts2);
  });
  app2.get("/api/posts/category/:category", async (req, res) => {
    const posts2 = await storage.getPostsByCategory(req.params.category);
    res.json(posts2);
  });
  app2.get("/api/posts/:slug", async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: "Artigo n\xE3o encontrado" });
    }
    res.json(post);
  });
  app2.post("/api/contact", async (req, res) => {
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
          message: "Dados inv\xE1lidos",
          errors: error.errors
        });
      }
      res.status(500).json({
        success: false,
        message: "Erro ao processar a solicita\xE7\xE3o"
      });
    }
  });
  app2.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.subscribeToNewsletter(validatedData);
      res.status(201).json({
        success: true,
        message: "Inscri\xE7\xE3o realizada com sucesso!",
        data: newsletter
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "E-mail inv\xE1lido",
          errors: error.errors
        });
      }
      res.status(500).json({
        success: false,
        message: "Erro ao processar a solicita\xE7\xE3o"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
