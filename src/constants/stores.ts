export type StoreCategory =
  | "Moda e Acessórios"
  | "Gastronomia"
  | "Serviços"
  | "Beleza e Saúde"
  | "Casa e Decoração"
  | "Lazer e Entretenimento"
  | "Educação"
  | "Tecnologia";

export interface Store {
  id: string;
  name: string;
  category: StoreCategory;
  description: string;
  /** Null até as fotos serem fornecidas. Usar com <Image /> do Next.js */
  imageSrc: string | null;
  /** Alt text para acessibilidade quando imageSrc for fornecido */
  imageAlt: string;
  /** Slug para futura página de detalhe da loja */
  slug: string;
  /** Destacar na seção de lojas da home */
  featured?: boolean;
  floor?: string;
}

export const STORES: Store[] = [
  /* ── Moda e Acessórios ──────────────────────────────────── */
  {
    id: "store-001",
    name: "Villaggio Fashion",
    category: "Moda e Acessórios",
    description:
      "As últimas tendências em moda feminina, masculina e acessórios para todas as ocasiões.",
    imageSrc: null,
    imageAlt: "Fachada da Villaggio Fashion no Villaggio Mall Center",
    slug: "villaggio-fashion",
    featured: true,
  },
  {
    id: "store-002",
    name: "Calçados & Cia",
    category: "Moda e Acessórios",
    description:
      "Amplo sortimento de calçados para homens, mulheres e crianças das principais marcas do mercado.",
    imageSrc: null,
    imageAlt: "Vitrine da Calçados & Cia",
    slug: "calcados-e-cia",
  },
  {
    id: "store-003",
    name: "Ótica Villaggio",
    category: "Moda e Acessórios",
    description:
      "Armações, lentes e óculos de sol com exame de vista no local. Qualidade e estilo para o seu olhar.",
    imageSrc: null,
    imageAlt: "Vitrine da Ótica Villaggio",
    slug: "otica-villaggio",
  },

  /* ── Gastronomia ────────────────────────────────────────── */
  {
    id: "store-004",
    name: "Praça de Alimentação",
    category: "Gastronomia",
    description:
      "Diversas opções de culinária reunidas em um ambiente amplo e agradável. Do casual ao requintado.",
    imageSrc: null,
    imageAlt: "Praça de alimentação do Villaggio Mall Center",
    slug: "praca-de-alimentacao",
    featured: true,
  },
  {
    id: "store-005",
    name: "Café Villaggio",
    category: "Gastronomia",
    description:
      "Cafés especiais, lanches e sobremesas artesanais para uma pausa perfeita durante suas compras.",
    imageSrc: null,
    imageAlt: "Café Villaggio — ambiente acolhedor com mesas ao ar livre",
    slug: "cafe-villaggio",
    featured: true,
  },
  {
    id: "store-006",
    name: "Pizzaria Contemporânea",
    category: "Gastronomia",
    description:
      "Pizzas artesanais com ingredientes selecionados, massa de fermentação natural e sabores autorais.",
    imageSrc: null,
    imageAlt: "Mesa da Pizzaria Contemporânea",
    slug: "pizzaria-contemporanea",
  },
  {
    id: "store-007",
    name: "Sabor da Terra",
    category: "Gastronomia",
    description:
      "Comida caseira e regional com buffet diário, self-service por kilo e pratos executivos.",
    imageSrc: null,
    imageAlt: "Buffet do restaurante Sabor da Terra",
    slug: "sabor-da-terra",
  },

  /* ── Beleza e Saúde ─────────────────────────────────────── */
  {
    id: "store-008",
    name: "Studio Beleza",
    category: "Beleza e Saúde",
    description:
      "Salão de beleza completo: cortes, coloração, tratamentos capilares, manicure e pedicure.",
    imageSrc: null,
    imageAlt: "Interior do Studio Beleza",
    slug: "studio-beleza",
    featured: true,
  },
  {
    id: "store-009",
    name: "Farmácia Villaggio",
    category: "Beleza e Saúde",
    description:
      "Medicamentos, dermocosméticos e produtos de saúde com atendimento farmacêutico especializado.",
    imageSrc: null,
    imageAlt: "Farmácia Villaggio",
    slug: "farmacia-villaggio",
  },

  /* ── Serviços ───────────────────────────────────────────── */
  {
    id: "store-010",
    name: "Banco & Serviços",
    category: "Serviços",
    description:
      "Agência bancária com caixas eletrônicos, serviços financeiros e atendimento personalizado.",
    imageSrc: null,
    imageAlt: "Agência bancária no Villaggio Mall",
    slug: "banco-e-servicos",
  },
  {
    id: "store-011",
    name: "Lavanderia Express",
    category: "Serviços",
    description:
      "Lavanderia self-service e com entrega. Serviço rápido, econômico e de alta qualidade.",
    imageSrc: null,
    imageAlt: "Lavanderia Express",
    slug: "lavanderia-express",
  },
  {
    id: "store-012",
    name: "Oficina de Consertos",
    category: "Serviços",
    description:
      "Conserto de roupas, calçados, bolsas e acessórios com mão de obra especializada.",
    imageSrc: null,
    imageAlt: "Oficina de Consertos do Villaggio Mall",
    slug: "oficina-de-consertos",
  },

  /* ── Casa e Decoração ───────────────────────────────────── */
  {
    id: "store-013",
    name: "Casa & Estilo",
    category: "Casa e Decoração",
    description:
      "Artigos para casa, decoração e presentes. Encontre peças únicas para transformar seu ambiente.",
    imageSrc: null,
    imageAlt: "Loja Casa & Estilo",
    slug: "casa-e-estilo",
  },

  /* ── Tecnologia ─────────────────────────────────────────── */
  {
    id: "store-014",
    name: "Tech Center",
    category: "Tecnologia",
    description:
      "Eletrônicos, smartphones, acessórios e serviços de assistência técnica para seus dispositivos.",
    imageSrc: null,
    imageAlt: "Tech Center — loja de eletrônicos",
    slug: "tech-center",
  },
];

/** Categorias únicas para uso em filtros */
export const STORE_CATEGORIES: StoreCategory[] = [
  "Moda e Acessórios",
  "Gastronomia",
  "Beleza e Saúde",
  "Serviços",
  "Casa e Decoração",
  "Tecnologia",
  "Lazer e Entretenimento",
  "Educação",
];

/** Lojas em destaque para a seção da home */
export const FEATURED_STORES = STORES.filter((s) => s.featured);
