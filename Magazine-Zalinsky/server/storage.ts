import { 
  users, 
  products, 
  posts, 
  contactSubmissions, 
  newsletters,
  type User, 
  type InsertUser,
  type Product,
  type InsertProduct,
  type Post,
  type InsertPost,
  type ContactSubmission,
  type InsertContactSubmission,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product methods
  getProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  getFeaturedProducts(limit?: number): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
  
  // Post methods
  getPosts(): Promise<Post[]>;
  getPostById(id: number): Promise<Post | undefined>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  getFeaturedPosts(limit?: number): Promise<Post[]>;
  getRecentPosts(limit?: number): Promise<Post[]>;
  getPostsByCategory(category: string): Promise<Post[]>;
  createPost(post: InsertPost): Promise<Post>;
  updatePost(id: number, post: Partial<InsertPost>): Promise<Post | undefined>;
  deletePost(id: number): Promise<boolean>;
  
  // Contact methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Newsletter methods
  subscribeToNewsletter(email: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscribers(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private posts: Map<number, Post>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletters: Map<number, Newsletter>;
  private currentUserId: number;
  private currentProductId: number;
  private currentPostId: number;
  private currentContactId: number;
  private currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.posts = new Map();
    this.contactSubmissions = new Map();
    this.newsletters = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentPostId = 1;
    this.currentContactId = 1;
    this.currentNewsletterId = 1;
    
    // Add default admin user
    this.createUser({
      username: "admin",
      password: "admin123",
      email: "admin@techreviews.com.br",
      name: "Administrador"
    });
    
    // Add some sample products
    this.initializeProducts();
    
    // Add some sample posts
    this.initializePosts();
  }

  // Initialize sample data
  private initializeProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        title: "Smartphone XYZ Ultra",
        slug: "smartphone-xyz-ultra",
        description: "O mais avançado smartphone com câmera de 108MP e processador ultra-rápido.",
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
        description: "Notebook para profissionais com 16GB RAM, SSD de 512GB e tela de alta resolução.",
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
        description: "Fones de ouvido sem fio com cancelamento de ruído e bateria de 36 horas.",
        image: "https://images.unsplash.com/photo-1600003263720-95b45a4035d5",
        price: 69900,
        oldPrice: 89900,
        affiliateLink: "https://www.mercadolivre.com.br/produto3",
        category: "fones",
        featured: true,
        badge: "Oferta"
      },
      {
        title: "Câmera ProShot X5",
        slug: "camera-proshot-x5",
        description: "Câmera mirrorless com sensor full-frame de 42MP e gravação em 4K.",
        image: "https://pixabay.com/get/g75c5a7a60fc9b46a98ae6e6be0bafc6016bb22fa80d271bf3c3ed2da60c04761e93ed26563477228ac4d3c1b05c0f63d5bdb37d026b2a6965b3cbe2a4e49977f_1280.jpg",
        price: 799900,
        oldPrice: 859900,
        affiliateLink: "https://www.mercadolivre.com.br/produto4",
        category: "cameras",
        featured: true,
        badge: "Novidade"
      },
      {
        title: "Smart TV UltraHD 55\"",
        slug: "smart-tv-ultrahd-55",
        description: "TV com resolução 4K, HDR, sistema operacional inteligente e design slim.",
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
        description: "Relógio inteligente com monitoramento cardíaco, GPS e bateria de longa duração.",
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
  
  private initializePosts() {
    const samplePosts: InsertPost[] = [
      {
        title: "Como escolher o smartphone ideal para suas necessidades",
        slug: "como-escolher-smartphone-ideal",
        excerpt: "Aprenda a identificar os recursos que realmente importam na hora de escolher um novo smartphone.",
        content: "# Como escolher o smartphone ideal para suas necessidades\n\nA escolha de um novo smartphone pode ser uma tarefa desafiadora, especialmente com tantas opções disponíveis no mercado. Neste guia, vamos ajudá-lo a identificar os recursos que realmente importam para o seu uso diário.\n\n## Considere o seu orçamento\n\nAntes de tudo, defina quanto você está disposto a gastar. Smartphones estão disponíveis em todas as faixas de preço, desde modelos básicos até aparelhos premium. Ter um orçamento definido ajudará a limitar suas opções e evitar gastos desnecessários.\n\n## Processador e RAM\n\nO processador e a quantidade de RAM determinam o desempenho do seu smartphone. Se você usa muitos aplicativos simultâneos ou jogos, considere no mínimo 6GB de RAM e um processador de última geração.\n\n## Bateria\n\nA duração da bateria é crucial para a maioria dos usuários. Procure smartphones com baterias de pelo menos 4000mAh para garantir que o aparelho dure o dia todo.\n\n## Câmera\n\nSe você gosta de fotografia, preste atenção às especificações da câmera. Lembre-se que mais megapixels nem sempre significam melhores fotos - o software e o processamento de imagem são igualmente importantes.\n\n## Armazenamento\n\nConsidere quanto espaço você precisa para aplicativos, fotos, vídeos e outros arquivos. Modelos com slot para cartão microSD oferecem expansibilidade extra.\n\n## Conclusão\n\nO smartphone ideal é aquele que atende às suas necessidades específicas dentro do seu orçamento. Não se deixe levar apenas pelo hype em torno dos últimos lançamentos - avalie cuidadosamente o que realmente importa para você.",
        image: "https://images.unsplash.com/photo-1648737963503-1a26da876aca",
        authorId: 1,
        category: "guias",
        featured: true
      },
      {
        title: "Os 5 melhores notebooks para trabalho remoto em 2023",
        slug: "melhores-notebooks-trabalho-remoto-2023",
        excerpt: "Comparamos os modelos mais avançados para quem precisa de produtividade em qualquer lugar.",
        content: "# Os 5 melhores notebooks para trabalho remoto em 2023\n\nO trabalho remoto se tornou uma realidade para muitas pessoas, e ter um notebook confiável e potente é essencial. Neste artigo, comparamos os melhores modelos para profissionais que precisam de produtividade em qualquer lugar.\n\n## 1. Notebook PowerPro\n\nO PowerPro é nossa escolha principal para trabalho remoto. Com processador de última geração, 16GB de RAM e SSD de 512GB, ele oferece desempenho excepcional para multitarefas. A tela de alta resolução proporciona conforto visual durante longas horas de trabalho.\n\n**Preço:** R$ 4.899,00\n\n## 2. UltraBook X360\n\nPara quem precisa de versatilidade, o X360 é uma excelente opção. Seu design conversível permite usá-lo como tablet, e a bateria dura impressionantes 12 horas.\n\n**Preço:** R$ 5.299,00\n\n## 3. ProBook Air\n\nSe mobilidade é sua prioridade, o ProBook Air pesa apenas 1,2kg e tem menos de 1,5cm de espessura, sem comprometer o desempenho.\n\n**Preço:** R$ 4.599,00\n\n## 4. WorkMaster 15\n\nPara quem trabalha com design gráfico ou edição de vídeo, o WorkMaster 15 oferece GPU dedicada e tela com alta precisão de cores.\n\n**Preço:** R$ 6.299,00\n\n## 5. BusinessBook Pro\n\nFocado em segurança e durabilidade, o BusinessBook Pro inclui leitor de impressão digital, chassi reforçado e certificações militares de resistência.\n\n**Preço:** R$ 5.799,00\n\n## Conclusão\n\nA escolha do notebook ideal depende das suas necessidades específicas de trabalho. Considere fatores como mobilidade, duração da bateria e tipo de tarefas que você realiza antes de fazer seu investimento.",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
        authorId: 1,
        category: "análises",
        featured: true
      },
      {
        title: "Análise: SoundMax Pro supera expectativas com áudio impressionante",
        slug: "analise-soundmax-pro-fones-audio-impressionante",
        excerpt: "Testamos por duas semanas os novos fones de ouvido que estão conquistando o mercado.",
        content: "# Análise: SoundMax Pro supera expectativas com áudio impressionante\n\nPassamos as últimas duas semanas testando intensivamente os fones de ouvido SoundMax Pro, um modelo que promete cancelamento de ruído avançado e qualidade sonora excepcional. Será que ele cumpre o prometido? Vamos descobrir.\n\n## Design e conforto\n\nOs SoundMax Pro apresentam um design elegante e minimalista, com acabamento premium em plástico soft-touch e almofadas de espuma com memória cobertas por couro sintético. Os fones são surpreendentemente leves (apenas 255g) e, mesmo em sessões de uso prolongado, não causaram desconforto.\n\n## Qualidade de áudio\n\nEste é o ponto forte dos SoundMax Pro. Os drivers de 40mm entregam graves profundos sem comprometer os médios e agudos. O perfil sonoro é bastante equilibrado, favorecendo ligeiramente os graves, o que agradará a maioria dos ouvintes.\n\n## Cancelamento de ruído\n\nO sistema de cancelamento de ruído ativo (ANC) é um dos melhores que já testamos nesta faixa de preço. Ele elimina eficientemente ruídos constantes como o de aviões, ar-condicionado e o burburinho de escritórios. Existe também um modo de ambiente que permite ouvir os sons ao redor quando necessário.\n\n## Bateria\n\nA duração da bateria é impressionante: conseguimos aproximadamente 34 horas de uso com ANC ativado, muito próximo das 36 horas anunciadas pelo fabricante. O carregamento completo leva cerca de 2 horas via USB-C.\n\n## Conectividade\n\nO Bluetooth 5.2 garante conexão estável e alcance satisfatório. Os fones suportam múltiplas conexões simultâneas, permitindo alternar facilmente entre smartphone e computador, por exemplo.\n\n## Veredicto final\n\nPor R$ 699,00 (atualmente com desconto sobre o preço original de R$ 899,00), os SoundMax Pro oferecem um valor excepcional. O conforto, qualidade sonora, cancelamento de ruído eficiente e bateria de longa duração os tornam uma excelente opção para trabalho, viagens ou simplesmente apreciar suas músicas favoritas.\n\n### Pontuação: 9/10\n",
        image: "https://pixabay.com/get/gc37c9e1270b839dc6ce1386b06870b931a910ba5d0d27040fc5e6fd7979534a5abace4c5b4f3bfcebefc2cb9174b5bbf037412febf7a3a52a6d8ddfbcabf44b1_1280.jpg",
        authorId: 1,
        category: "análises",
        featured: true
      }
    ];
    
    for (const post of samplePosts) {
      this.createPost(post);
    }
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id, 
      isAdmin: false,
      createdAt: now
    };
    this.users.set(id, user);
    return user;
  }
  
  // Product methods
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
  
  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug
    );
  }
  
  async getFeaturedProducts(limit?: number): Promise<Product[]> {
    const featured = Array.from(this.products.values())
      .filter(product => product.featured)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      
    if (limit) {
      return featured.slice(0, limit);
    }
    
    return featured;
  }
  
  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values())
      .filter(product => product.category === category)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const now = new Date();
    const product: Product = {
      ...insertProduct,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.products.set(id, product);
    return product;
  }
  
  async updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined> {
    const existingProduct = this.products.get(id);
    
    if (!existingProduct) {
      return undefined;
    }
    
    const updatedProduct: Product = {
      ...existingProduct,
      ...product,
      updatedAt: new Date()
    };
    
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }
  
  async deleteProduct(id: number): Promise<boolean> {
    return this.products.delete(id);
  }
  
  // Post methods
  async getPosts(): Promise<Post[]> {
    return Array.from(this.posts.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async getPostById(id: number): Promise<Post | undefined> {
    return this.posts.get(id);
  }
  
  async getPostBySlug(slug: string): Promise<Post | undefined> {
    return Array.from(this.posts.values()).find(
      (post) => post.slug === slug
    );
  }
  
  async getFeaturedPosts(limit?: number): Promise<Post[]> {
    const featured = Array.from(this.posts.values())
      .filter(post => post.featured)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      
    if (limit) {
      return featured.slice(0, limit);
    }
    
    return featured;
  }
  
  async getRecentPosts(limit?: number): Promise<Post[]> {
    const posts = Array.from(this.posts.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      
    if (limit) {
      return posts.slice(0, limit);
    }
    
    return posts;
  }
  
  async getPostsByCategory(category: string): Promise<Post[]> {
    return Array.from(this.posts.values())
      .filter(post => post.category === category)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async createPost(insertPost: InsertPost): Promise<Post> {
    const id = this.currentPostId++;
    const now = new Date();
    const post: Post = {
      ...insertPost,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.posts.set(id, post);
    return post;
  }
  
  async updatePost(id: number, post: Partial<InsertPost>): Promise<Post | undefined> {
    const existingPost = this.posts.get(id);
    
    if (!existingPost) {
      return undefined;
    }
    
    const updatedPost: Post = {
      ...existingPost,
      ...post,
      updatedAt: new Date()
    };
    
    this.posts.set(id, updatedPost);
    return updatedPost;
  }
  
  async deletePost(id: number): Promise<boolean> {
    return this.posts.delete(id);
  }
  
  // Contact methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const now = new Date();
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: now
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  // Newsletter methods
  async subscribeToNewsletter(data: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existing = Array.from(this.newsletters.values()).find(
      newsletter => newsletter.email === data.email
    );
    
    if (existing) {
      return existing;
    }
    
    const id = this.currentNewsletterId++;
    const now = new Date();
    const newsletter: Newsletter = {
      ...data,
      id,
      createdAt: now
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
  
  async getNewsletterSubscribers(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
