/* ============================================================
   SITE INFO — Textos e dados institucionais do Villaggio Mall
   Validar endereço, horários e contatos com a administração.
   ============================================================ */

export const SITE_INFO = {
  name: "Villaggio Mall Center",
  shortName: "Villaggio",
  tagline: "Um lugar pra chamar de seu",
  description:
    "O Villaggio Mall Center é um open mall localizado em Bauru, SP. Um espaço aberto e acolhedor que reúne moda, gastronomia, serviços e muito mais em um ambiente agradável para toda a família.",
  about: {
    heading: "Um mall pensado para você",
    paragraphs: [
      "O Villaggio Mall Center nasceu com o propósito de criar um espaço diferente em Bauru — um open mall que combina a praticidade de um centro comercial com o charme e a atmosfera de rua de um bairro vivo.",
      "Com arquitetura que valoriza a luz natural e espaços abertos, o Villaggio convida os visitantes a passear, descobrir e se conectar. Aqui, cada loja, restaurante e serviço foi pensado para oferecer uma experiência completa.",
      "Venha nos visitar e descubra por que o Villaggio se tornou um ponto de encontro preferido dos bauruenses.",
    ],
  },
  /** Validar com a administração do mall antes de publicar */
  address: {
    street: "Rua Gustavo Maciel, 13-61",
    neighborhood: "Centro",
    city: "Bauru",
    state: "SP",
    zip: "17015-280",
    full: "Rua Gustavo Maciel, 13-61 — Centro, Bauru, SP",
    googleMapsUrl:
      "https://www.google.com/maps/search/Villaggio+Mall+Center+Bauru",
  },
  /** Validar com a administração do mall antes de publicar */
  hours: {
    label: "Horário de funcionamento",
    weekdays: "Segunda a Sexta: 10h às 22h",
    saturday: "Sábado: 10h às 22h",
    sunday: "Domingo: 12h às 20h",
    holidays: "Feriados: consulte nossas redes sociais",
    rows: [
      { days: "Segunda a Sexta", hours: "10h às 22h" },
      { days: "Sábado", hours: "10h às 22h" },
      { days: "Domingo", hours: "12h às 20h" },
      { days: "Feriados", hours: "Veja nossas redes" },
    ],
  },
  social: {
    facebook: "https://www.facebook.com/villaggiomallcenter",
    instagram: "https://www.instagram.com/villaggiomallcenter",
  },
  /** Validar com a administração do mall antes de publicar */
  contact: {
    phone: "(14) 3234-0000",
    email: "contato@villaggiomall.com.br",
  },
} as const;
