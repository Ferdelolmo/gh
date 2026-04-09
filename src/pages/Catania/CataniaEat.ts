import type { Language } from '@/types/i18n';

export type PriceCategory = 'economic' | 'fair' | 'upscale';
type DishKey =
  | 'pastaAllaNorma'
  | 'arancini'
  | 'pesceSpadaAllaGhiotta'
  | 'granitaConBrioche'
  | 'cannolo'
  | 'scacciata'
  | 'caponata'
  | 'horseMeatDishes'
  | 'seafoodSpecialties'
  | 'involtini'
  | 'seltzLimoneSale';
type RestaurantKey =
  | 'trattoriaDaAntonio'
  | 'osteriaAnticaMarina'
  | 'meCumpariTuriddu'
  | 'sciroccoSicilianFishLab'
  | 'ilSaleArtCafe'
  | 'alVicoloPizzaVino'
  | 'locandaCerami'
  | 'corteDeiMedici'
  | 'savia'
  | 'spinella'
  | 'rixCatania'
  | 'altaMira'
  | 'nievski'
  | 'iDolciDiNonnaVincenza'
  | 'firstLoungeBar'
  | 'razmataz'
  | 'camelot'
  | 'trattoriaDelCavaliere'
  | 'laTerrazzaDelBarone';

export interface TypicalDish {
  name: string;
  description: string;
  image: string;
}

export interface RestaurantRecommendation {
  name: string;
  description: string;
  priceCategory: PriceCategory;
  priceLabel: string;
  mapUrl: string;
}

export interface CataniaEatContent {
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  cuisineHeading: string;
  cuisineDescription: string;
  typicalDishesHeading: string;
  restaurantsHeading: string;
  viewOnMapsLabel: string;
  typicalDishes: TypicalDish[];
  restaurants: RestaurantRecommendation[];
}

const heroImage =
  'https://i.imgur.com/U773qtH.jpeg';

const dishMetadata: Array<{ key: DishKey; image: string }> = [
  {
    key: 'pastaAllaNorma',
    image: 'https://imag.bonviveur.com/pasta-alla-norma.jpg',
  },
  {
    key: 'arancini',
    image: 'https://www.sicilyaddict.it/cdn/shop/articles/Arancini_ragu_2_0e77993b-1fbe-47d3-b786-3c5f526dc38f.jpg?v=1739198901',
  },
  {
    key: 'pesceSpadaAllaGhiotta',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMnSvbuLpmTbLGa5OATHSyBc67RiE9sk1Ag&s',
  },
  {
    key: 'granitaConBrioche',
    image: 'https://www.coravin.com.es/cdn/shop/articles/AdobeStock_245883896_222f3921-ebc9-4369-b7f5-e642e7352796.jpg?v=1750420421',
  },
  {
    key: 'cannolo',
    image: 'https://www.giallozafferano.es/images/2-256/Cannoli-siciliani_1200x800.jpg',
  },
  {
    key: 'scacciata',
    image: 'https://www.maestrella.com/wp-content/uploads/2022/09/SCACIAPA-3-1024x761-1.jpg',
  },
  {
    key: 'caponata',
    image: 'https://italianismo.com.br/wp-content/uploads/2021/01/receita-caponata.jpg',
  },
  {
    key: 'horseMeatDishes',
    image: 'https://cdn-media.italiani.it/site-catania/2019/02/gds.it_-e1550257171955-900x600.jpg',
  },
  {
    key: 'seafoodSpecialties',
    image: 'https://blog.giallozafferano.it/azuccherozero/wp-content/uploads/2018/04/Pesce-spada-alla-griglia-o02.jpeg',
  },
  {
    key: 'involtini',
    image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2024/07/Involtini-alla-siciliana.jpg',
  },
  {
    key: 'seltzLimoneSale',
    image: 'https://www.foodandwineitalia.com/wp-content/uploads/elementor/thumbs/Seltz-sale-e-limone-qr5ofrwqm5qvqjd28d44fo5zuef4ll1l7y3bjw3cxk.jpg',
  },
];

const restaurantMetadata: Array<{ key: RestaurantKey; priceCategory: PriceCategory; mapUrl: string }> = [
  {
    key: 'trattoriaDelCavaliere',
    priceCategory: 'fair',
    mapUrl: 'https://maps.google.com/?q=Trattoria+del+Cavaliere+Catania',
  },
  {
    key: 'trattoriaDaAntonio',
    priceCategory: 'fair',
    mapUrl: 'https://maps.google.com/?q=Trattoria+da+Antonio+Catania',
  },
  {
    key: 'osteriaAnticaMarina',
    priceCategory: 'fair',
    mapUrl: 'https://maps.google.com/?q=Osteria+Antica+Marina+Catania',
  },
  {
    key: 'meCumpariTuriddu',
    priceCategory: 'upscale',
    mapUrl: 'https://maps.google.com/?q=Me+Cumpari+Turiddu+Catania',
  },
  {
    key: 'sciroccoSicilianFishLab',
    priceCategory: 'economic',
    mapUrl: 'https://maps.google.com/?q=Scirocco+Sicilian+Fish+Lab',
  },
  {
    key: 'ilSaleArtCafe',
    priceCategory: 'upscale',
    mapUrl: 'https://maps.app.goo.gl/9YKzYg1Houtg66kq8',
  },
  {
    key: 'alVicoloPizzaVino',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/bjvyassrb8WjqjEUA',
  },
  {
    key: 'locandaCerami',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/CPJkvUhZqXvVtKBm9',
  },
  {
    key: 'corteDeiMedici',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/Fmw3Ybo8ZoYskHwR9',
  },
  {
    key: 'savia',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/4pY8G8G4Z3o4Y4Yx9',
  },
  {
    key: 'spinella',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/qZ4Y4Y4Y4Y4Y4Yx9',
  },
  {
    key: 'rixCatania',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/HP4UVWkDVJk6obau9',
  },
  {
    key: 'altaMira',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/Z2EaK9tGGLyDdb7p6',
  },
  {
    key: 'nievski',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/PhZ2wiXsCwfmxcwL7',
  },
  {
    key: 'iDolciDiNonnaVincenza',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/GCqjvReXv3ReyxqS8',
  },
  {
    key: 'firstLoungeBar',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/3b5vdZT2nGxbknPa6',
  },
  {
    key: 'razmataz',
    priceCategory: 'fair',
    mapUrl: 'https://maps.app.goo.gl/QFu34UN2K2GHpmr79',
  },
  {
    key: 'laTerrazzaDelBarone',
    priceCategory: 'fair',
    mapUrl: 'https://maps.google.com/?q=La+Terrazza+del+Barone+Catania',
  },
  {
    key: 'camelot',
    priceCategory: 'fair',
    mapUrl: 'https://maps.google.com/?q=Camelot+Catania',
  },
];

const translations: Record<
  Language,
  {
    title: string;
    description: string;
    heroAlt: string;
    cuisineHeading: string;
    cuisineDescription: string;
    typicalDishesHeading: string;
    restaurantsHeading: string;
    viewOnMapsLabel: string;
    typicalDishes: Record<DishKey, { name: string; description: string }>;
    restaurants: Record<RestaurantKey, { name: string; description: string }>;
    priceLabels: Record<PriceCategory, string>;
  }
> = {
  en: {
    title: 'Taste the city: where and what to eat',
    description: 'Sample Sicily’s markets, trattorias, and bold flavours with hand-picked recommendations.',
    heroAlt: 'Traditional Sicilian pranzo spread',
    cuisineHeading: 'Sicilian cuisine essentials 🍋',
    cuisineDescription: `Sicilian cuisine is a historical and cultural melting pot where <strong>Greek, Arab, Norman, and Spanish culinary traditions blend</strong> seamlessly. This unique fusion has made Sicily the core and foundation of Italian cuisine, as many iconic dishes and flavors originate from the island. <strong>Ingredients like olive oil, nuts (especially pistachios and almonds), citrus fruits, and fresh fish</strong>, together with emblematic dishes such as pasta alla Norma, pasta con le sarde, arancini, and couscous, reflect the rich Mediterranean complexity of its culinary tradition.

More than just a regional cuisine, <strong>Sicilian food tells the story of a diverse history</strong> where each conqueror left an imprint on tastes and techniques, offering an experience that goes beyond food to narrate the Mediterranean heritage of the island. <strong>Italian cuisine owes much of its richness and diversity to Sicily, which stands as its culinary heart and Mediterranean soul.</strong>`,
    typicalDishesHeading: 'Typical dishes 🍽️',
    restaurantsHeading: 'Restaurant recommendations 🍝',
    viewOnMapsLabel: 'View on Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rigatoni or maccheroni with tomato sauce, fried eggplant, ricotta salata, and basil—a tribute to Vincenzo Bellini.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Crispy fried rice cones filled with ragù, mozzarella, and peas (or pistachio cream for a twist).',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Swordfish seared with capers, olives, tomatoes, and generous Sicilian olive oil.',
      },
      granitaConBrioche: {
        name: 'Granita con Brioche',
        description:
          'Almond or pistachio granita paired with warm brioche “col tuppo,” perfect in the morning heat.',
      },
      cannolo: {
        name: 'Cannolo',
        description:
          'Crispy pastry tube filled with sweet, creamy ricotta, often with chocolate chips or candied fruit.',
      },
      scacciata: {
        name: 'Scacciata',
        description:
          'A stuffed focaccia with fillings like potatoes, sausage, broccoli, or cauliflower, reflecting authentic local flavors.',
      },
      caponata: {
        name: 'Caponata',
        description:
          'A sweet and sour vegetable dish made from eggplant, zucchini, peppers, celery, olives, raisins, and capers with a vinegar and sugar dressing.',
      },
      horseMeatDishes: {
        name: 'Horse meat dishes',
        description:
          'Including meatballs and sausages, popular in Catania’s culinary tradition.',
      },
      seafoodSpecialties: {
        name: 'Seafood specialties',
        description:
          'Dishes like swordfish with tomatoes and olives, spaghetti alle vongole (clams) and other fresh seafood are common in Catania’s coastal cuisine.',
      },
      involtini: {
        name: 'Involtini',
        description:
          'Thinly sliced meat rolls stuffed with cheese, breadcrumbs, and herbs, grilled to perfection.',
      },
      seltzLimoneSale: {
        name: 'Seltz Limone e Sale',
        description:
          'A refreshing typical drink from Catania’s chioschi, made with sparkling water, fresh lemon juice, and a pinch of salt.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'A beloved trattoria steps from Piazza del Duomo serving market-fresh seafood pastas and hearty secondi.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'Inside La Pescheria market, this osteria builds menus around the day’s catch—crudo platters, grilled calamari, and killer arancini.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Retro Sicilian vibes, vintage ceramics, and slow-food storytelling with recipes steeped in Etna’s volcanic terroir.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Street-food counter next to the fish market frying up nero di seppia arancini, tuna burgers, and cones of fritto misto.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'The pizza and beers are also very good here. Top pizzas are those with grilled zucchini, pesto, chopped pistachios and mozzarella.',
      },
      alVicoloPizzaVino: {
        name: 'Al Vicolo Pizza&Vino',
        description:
          'Try to call first to book because it is usually full. Get pizza with the edges, mortadella and pistachio 😍',
      },
      locandaCerami: {
        name: 'Locanda Cerami',
        description:
          'Also this excellent pizzeria, in one of the most suggestive streets which is Via Crociferi',
      },
      corteDeiMedici: {
        name: 'Corte dei medici',
        description:
          'Really good',
      },
      savia: {
        name: 'Savia',
        description:
          'For breakfast the best pastry shops are Savia and Spinella in Via Etna',
      },
      spinella: {
        name: 'Spinella',
        description:
          'Another favorite bakery in Via Etnea, known for traditional Sicilian pastries and desserts',
      },
      rixCatania: {
        name: 'Rix Catania',
        description:
          'For an aperitif or after-dinner drink',
      },
      altaMira: {
        name: 'Alta Mira',
        description:
          'Original daily dishes, large variety of salads, paninis, and a wide selection of wines.Healthy food options, friendly service and pleasant atmosphere ideal for couples, friends and families',
      },
      nievski: {
        name: 'Nievski',
        description:
          'Historic pub in Catania, a meeting point for generations of young people and students. It is located in the historic center, near the Ursino Castle.',
      },
      iDolciDiNonnaVincenza: {
        name: 'I Dolci di Nonna Vincenza',
        description:
          'Another historic pastry shop where to go to eat',
      },
      firstLoungeBar: {
        name: 'First Lounge Bar',
        description:
          'A modern and elegant lounge bar, ideal for an aperitif or an after-dinner drink. It offers a wide selection of cocktails and wines.',
      },
      razmataz: {
        name: 'Razmataz | Wine Bar Catania',
        description:
          'A cozy and informal wine bar, with a wide selection of Sicilian and national wines. It also offers cutting boards with local products.',
      },
      camelot: {
        name: 'Camelot',
        description:
          'Popular spot near Castello Ursino with medieval décor, offering a variety of Italian dishes, spacious seating and fast service—especially good value on meat.',
      },
      trattoriaDelCavaliere: {
        name: 'Trattoria del Cavaliere',
        description:
          'Traditional trattoria celebrated for Sicilian classics with fresh ingredients, from squid ink pasta to hearty horse meat, generous portions loved by locals.',
      },
      laTerrazzaDelBarone: {
        name: 'La Terrazza del Barone',
        description:
          'Trattoria with a sunny terrace, excellent Sicilian fish and meat dishes, and fair prices—ideal for dining outdoors in the city center.',
      },
    },
    priceLabels: {
      economic: 'Economic',
      fair: 'Fair',
      upscale: 'Upscale',
    },
  },
  es: {
    title: 'Saborea la ciudad: dónde y qué comer',
    description: 'Descubre mercados, trattorías y delicias que cuentan la historia gastronómica de Sicilia.',
    heroAlt: 'Mesa tradicional de un pranzo siciliano',
    cuisineHeading: 'Esenciales de la cocina siciliana 🍋',
    cuisineDescription:
      'La gastronomía siciliana es un crisol histórico y cultural en el que <strong>se funden las tradiciones culinarias de los griegos, árabes, normandos y españoles</strong>, entre otros pueblos que dominaron y enriquecieron la isla a lo largo de los siglos. Esta fusión única ha convertido a Sicilia en el núcleo duro y la base esencial de la cocina italiana, pues muchas de sus preparaciones y sabores emblemáticos tienen origen o fuerte influencia en la isla. <strong>Ingredientes como el aceite de oliva, frutos secos (pistachos y almendras), cítricos y pescados frescos</strong>, junto con platos como la pasta alla Norma, pasta con le sarde, arancini o el couscous, reflejan la complejidad y riqueza mediterránea de su tradición culinaria, que ha conquistado paladares y se ha extendido ampliamente.\n\nMás que una simple cocina regional, <strong>la siciliana es un reflejo vivo de su historia</strong>, donde cada dominación dejó huellas bien presentes en los sabores y técnicas actuales. Desde la sencilla y sabrosa pasta con sardinas, que mezcla contraste de dulzura y sal, hasta los dulces como los cannoli o la cassata, cuyos orígenes remiten a la presencia árabe, esta cocina ofrece experiencias que trascienden lo gastronómico para narrar la propia historia mediterránea. <strong>Así, la cocina italiana debe en gran medida su riqueza y diversidad a Sicilia</strong>, que actúa como su corazón culinario y alma mediterránea.',
    typicalDishesHeading: 'Platos típicos 🍽️',
    restaurantsHeading: 'Recomendaciones gastronómicas 🍝',
    viewOnMapsLabel: 'Ver en Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rellena de historia: pasta larga con salsa de tomate, berenjenas fritas y ricotta salada.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Conos de arroz crujientes rellenos de ragú, mozzarella y guisantes (o crema de pistacho).',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Pescado espada sellado con alcaparras, aceitunas, tomate y mucho aceite siciliano.',
      },
      granitaConBrioche: {
        name: 'Granita con Brioche',
        description:
          'Granita de almendra o pistacho acompañada de brioche “col tuppo”, ideal para el calor.',
      },
      cannolo: {
        name: 'Cannolo',
        description:
          'Tubo de hojaldre crujiente relleno de ricota dulce y cremosa, a menudo con trocitos de chocolate o fruta confitada.',
      },
      scacciata: {
        name: 'Scacciata',
        description:
          'Focaccia rellena con patatas, salchicha, brócoli o coliflor, reflejo de sabores locales auténticos.',
      },
      caponata: {
        name: 'Caponata',
        description:
          'Plato agripicante de verduras con berenjena, calabacín, pimientos, apio, aceitunas, pasas y alcaparras en vinagre y azúcar.',
      },
      horseMeatDishes: {
        name: 'Platos de carne de caballo',
        description:
          'Bolas de carne y salchichas de caballo, muy populares en la tradición culinaria catanesa.',
      },
      seafoodSpecialties: {
        name: 'Especialidades de mariscos',
        description:
          'Platos como pez espada con tomates y aceitunas, espaguetis alle vongole y otros mariscos frescos son habituales en la cocina costera.',
      },
      involtini: {
        name: 'Involtini',
        description:
          'Rollitos de carne en rodajas finas rellenos de queso, pan rallado y hierbas, asados a la perfección.',
      },
      seltzLimoneSale: {
        name: 'Seltz Limone e Sale',
        description:
          'Una refrescante bebida típica de los quioscos de Catania, a base de agua con gas, zumo de limón fresco y una pizca de sal.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'Trattoria frente a Piazza del Duomo con pastas y platos principales recién pescados.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'Dentro de La Pescheria, se sirve la pesca del día con crudos y calamari a la parrilla.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Ambiente retro con recetas familiares que celebran el terroir volcánico de Etna.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Puesto informal cerca del mercado con arancini negros y frituras variadas.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'Aquí también la pizza y las cervezas son muy buenas. Las mejores pizzas son las que llevan calabacín a la plancha, pesto, pistacho picado y mozzarella.',
      },
      alVicoloPizzaVino: {
        name: 'Al Vicolo Pizza&Vino',
        description:
          'Intenta llamar antes para reservar porque suele estar lleno. Pide pizza con los bordes, mortadela y pistacho 😍',
      },
      locandaCerami: {
        name: 'Locanda Cerami',
        description:
          'También esta excelente pizzería, en una de las calles más sugerentes que es Via Crociferi',
      },
      corteDeiMedici: {
        name: 'Corte dei medici',
        description:
          'Conocido por sus pizzas y comida callejera',
      },
      savia: {
        name: 'Savia',
        description:
          'Para el desayuno las mejores pastelerías son Savia y Spinella en Via Etnea',
      },
      spinella: {
        name: 'Spinella',
        description:
          'Otra pastelería favorita en Via Etnea, conocida por sus pasteles y postres tradicionales sicilianos',
      },
      rixCatania: {
        name: 'Rix Catania',
        description:
          'Para un aperitivo o una copa después de cenar',
      },
      altaMira: {
        name: 'Alta Mira',
        description:
          'Platos diarios originales, gran variedad de ensaladas, paninis y una amplia selección de vinos. Opciones de comida saludable, servicio amable y ambiente agradable ideal para parejas, amigos y familias.',
      },
      nievski: {
        name: 'Nievski',
        description:
          'Pub histórico de Catania, punto de encuentro de generaciones de jóvenes y estudiantes. Se encuentra en el centro histórico, cerca del Castillo de Ursino.',
      },
      iDolciDiNonnaVincenza: {
        name: 'I Dolci di Nonna Vincenza',
        description:
          'Otra pastelería histórica donde ir a comer',
      },
      firstLoungeBar: {
        name: 'First Lounge Bar',
        description:
          'Un lounge bar moderno y elegante, ideal para un aperitivo o una copa después de cenar. Ofrece una amplia selección de cócteles y vinos.',
      },
      razmataz: {
        name: 'Razmataz | Wine Bar Catania',
        description:
          'Una vinoteca acogedora e informal, con una amplia selección de vinos sicilianos y nacionales. También ofrece tablas con productos locales.',
      },
      camelot: {
        name: 'Camelot',
        description:
          'Lugar popular cerca del Castello Ursino con decoración medieval, una carta italiana variada, espacios interiores y exteriores amplios, servicio rápido y buena relación calidad-precio, sobre todo en carnes.',
      },
      trattoriaDelCavaliere: {
        name: 'Trattoria del Cavaliere',
        description:
          'Trattoria tradicional famosa por platos sicilianos con ingredientes frescos, incluida excelente pasta al nero di seppia y carne de caballo, muy valorada por los locales por sus generosas porciones y sabores clásicos.',
      },
      laTerrazzaDelBarone: {
        name: 'La Terrazza del Barone',
        description:
          'Trattoria con agradable terraza que sirve platos de pescado y carne sicilianos, excelente comida y precios justos—ideal para comer al aire libre en el centro de Catania.',
      },
    },
    priceLabels: {
      economic: 'Económico',
      fair: 'Moderado',
      upscale: 'Exclusivo',
    },
  },
  it: {
    title: 'A Napoli che in Spagna, basta che si mangia',
    description: 'Scopri mercati, trattorie e street food imperdibili per assaporare Catania.',
    heroAlt: 'Tavola tradizionale di un pranzo siciliano',
    cuisineHeading: 'Essenziali della cucina siciliana 🍋',
    cuisineDescription:
      '<strong>La cucina siciliana è un crogiolo storico e culturale in cui si fondono perfettamente le tradizioni culinarie greche, arabe, normanne e spagnole.</strong> Questa fusione unica ha fatto della Sicilia il nucleo e la base essenziale della cucina italiana, poiché molti piatti e sapori iconici hanno origine proprio dall\'isola. <strong>Ingredienti come l\'olio d\'oliva, la frutta secca (soprattutto pistacchi e mandorle), gli agrumi e il pesce fresco</strong>, insieme a piatti emblematici come la pasta alla Norma, la pasta con le sarde, gli arancini e il cous cous, riflettono la ricchezza e la complessità mediterranea della sua tradizione culinaria.\n\n<strong>Più di una semplice cucina regionale, la cucina siciliana racconta una storia di diversità</strong> in cui ogni dominatore ha lasciato la sua impronta nei sapori e nelle tecniche, offrendo un\'esperienza che va oltre il cibo per narrare il patrimonio mediterraneo dell\'isola. <strong>La cucina italiana deve gran parte della sua ricchezza e diversità alla Sicilia che ne rappresenta il cuore culinario e l’anima mediterranea.</strong>',
    typicalDishesHeading: 'Piatti tipici 🍽️',
    restaurantsHeading: 'Raccomandazioni gastronomiche 🍝',
    viewOnMapsLabel: 'Visualizza su Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rigatoni o maccheroni avvolti nel sugo di pomodoro, melanzane fritte e ricotta salata.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Coni di riso croccanti ripieni di ragù, mozzarella e piselli (o crema di pistacchio).',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Pesce spada scottato con capperi, olive, pomodoro e tanto olio d’oliva siciliano.',
      },
      granitaConBrioche: {
        name: 'Granita con Brioche',
        description:
          'Granita di mandorla o pistacchio accompagnata da brioche “col tuppo”, perfetta al mattino.',
      },
      cannolo: {
        name: 'Cannolo',
        description:
          'Tubo di pasta croccante ripieno di ricotta dolce e cremosa, spesso con gocce di cioccolato o frutta candita.',
      },
      scacciata: {
        name: 'Scacciata',
        description:
          'Focaccia ripiena con patate, salsiccia, broccoli o cavolfiore, specchio dei sapori locali autentici.',
      },
      caponata: {
        name: 'Caponata',
        description:
          'Contorno agrodolce con melanzane, zucchine, peperoni, sedano, olive, uvetta e capperi conditi con aceto e zucchero.',
      },
      horseMeatDishes: {
        name: 'Piatti di carne di cavallo',
        description:
          'Polpette e salsicce di cavallo, molto apprezzate nella tradizione culinaria catanese.',
      },
      seafoodSpecialties: {
        name: 'Specialità di mare',
        description:
          'Piatti come pesce spada con pomodori e olive, spaghetti alle vongole e altri frutti di mare freschi sono comuni nella cucina costiera.',
      },
      involtini: {
        name: 'Involtini',
        description:
          'Involtini di carne ripieni di formaggio, pangrattato ed erbe, tipicamente cotti alla brace.',
      },
      seltzLimoneSale: {
        name: 'Seltz Limone e Sale',
        description:
          'Bevanda dissetante tipica dei chioschi catanesi, preparata con acqua seltz, succo di limone fresco e un pizzico di sale.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'Trattoria amata vicino a Piazza del Duomo con pasta di mare e secondi sostanziosi.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'All’interno della Pescheria propone il pescato del giorno, crudi e calamari alla griglia.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Atmosfere retrò con ricette lente che esaltano il territorio vulcanico dell’Etna.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Chiosco vicino al mercato con arancini al nero di seppia e fritti vari.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'Buonissima anche qui la pizza e le birre. Pizza top quelle con le zucchine grigliate, pesto, granella di pistacchio e mozzarella.',
      },
      alVicoloPizzaVino: {
        name: 'Al Vicolo Pizza&Vino',
        description:
          'Cercate di chiamare prima per prenotare perché di solito è pieno. Prendete pizza con i bordi, la mortadella e il pistacchio 😍',
      },
      locandaCerami: {
        name: 'Locanda Cerami',
        description:
          'Anche questa ottima pizzeria, in una delle vie più suggestive che è Via Crociferi',
      },
      corteDeiMedici: {
        name: 'Corte dei medici',
        description:
          'Locale informale a Catania, noto soprattutto per le pizze e lo street food siciliano',
      },
      savia: {
        name: 'Savia',
        description:
          'Per la colazione le migliori pasticcerie sono Savia e Spinella in Via Etnea',
      },
      spinella: {
        name: 'Spinella',
        description:
          'Un\'altra pasticceria preferita in Via Etnea, conosciuta per i dolci e dessert siciliani tradizionali',
      },
      rixCatania: {
        name: 'Rix Catania',
        description:
          'Per aperitivo o drink post cena',
      },
      altaMira: {
        name: 'Alta Mira',
        description:
          'Piatti giornalieri originali, ampia varietà di insalate, panini e un\'ampia selezione di vini. Opzioni di cibo salutare, servizio cordiale e atmosfera piacevole, ideale per coppie, amici e famiglie',
      },
      nievski: {
        name: 'Nievski',
        description:
          'Pub storico di Catania, punto di ritrovo di generazioni di giovani e studenti. Si trova nel centro storico, vicino al Castello Ursino.',
      },
      iDolciDiNonnaVincenza: {
        name: 'I Dolci di Nonna Vincenza',
        description:
          'Altra pasticceria storica dove andare a cibarsi',
      },
      firstLoungeBar: {
        name: 'First Lounge Bar',
        description:
          'Un lounge bar moderno ed elegante, ideale per un aperitivo o un dopocena. Offre una vasta selezione di cocktail e vini.',
      },
      razmataz: {
        name: 'Razmataz | Wine Bar Catania',
        description:
          'Un\'enoteca accogliente e informale, con un\'ampia selezione di vini siciliani e nazionali. Propone anche taglieri con prodotti del territorio.',
      },
      camelot: {
        name: 'Camelot',
        description:
          'Locale popolare vicino al Castello Ursino con arredi medievali, propone piatti italiani vari, ambienti interni ed esterni ampi, servizio rapido e ottimo rapporto qualità-prezzo, specialmente per le carni.',
      },
      trattoriaDelCavaliere: {
        name: 'Trattoria del Cavaliere',
        description:
          'Trattoria tradizionale celebre per piatti siciliani con ingredienti freschi, dalla pasta al nero di seppia alla carne di cavallo, nota per porzioni generose e sapori classici.',
      },
      laTerrazzaDelBarone: {
        name: 'La Terrazza del Barone',
        description:
          'Trattoria con piacevole terrazza, ottimi piatti di pesce e carne siciliana e prezzi giusti, perfetta per mangiare all’aperto in centro città.',
      },
    },
    priceLabels: {
      economic: 'Economico',
      fair: 'Giusto',
      upscale: 'Elegante',
    },
  },
  fr: {
    title: 'Savourez la ville : où et quoi manger',
    description: 'Nos conseils gourmands pour les spécialités, cafés et douceurs incontournables de Catane.',
    heroAlt: 'Table traditionnelle d’un pranzo sicilien',
    cuisineHeading: 'Essentiels de la cuisine sicilienne 🍋',
    cuisineDescription:
      '<strong>La cuisine sicilienne est un creuset historique et culturel où se mêlent harmonieusement les traditions culinaires grecques, arabes, normandes et espagnoles.</strong> Cette fusion unique a fait de la Sicile le noyau et la base essentielle de la cuisine italienne, car de nombreux plats et saveurs emblématiques viennent de l’île. <strong>Des ingrédients comme l’huile d’olive, les fruits secs (notamment les pistaches et amandes), les agrumes et les poissons frais</strong>, ainsi que des plats emblématiques tels que les pâtes alla Norma, les pâtes aux sardines, les arancini et le couscous, reflètent la richesse et la complexité méditerranéenne de sa tradition culinaire.\n\n<strong>Plus qu’une simple cuisine régionale, la cuisine sicilienne raconte une histoire de diversité</strong> où chaque conquérant a laissé son empreinte sur les goûts et les techniques, offrant une expérience qui dépasse l’alimentaire pour narrer le patrimoine méditerranéen de l’île. <strong>La cuisine italienne doit une grande partie de sa richesse et diversité à la Sicile</strong>, qui constitue son cœur culinaire et son âme méditerranéenne.',
    typicalDishesHeading: 'Plats typiques 🍽️',
    restaurantsHeading: 'Recommandations gourmandes 🍝',
    viewOnMapsLabel: 'Voir sur Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rigatoni ou maccheroni enrobés de sauce tomate, aubergines frits et ricotta salée.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Cônes de riz croustillants farcis de ragù, mozzarella et petits pois.',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Espadon saisi avec câpres, olives, tomates et beaucoup d’huile sicilienne.',
      },
      granitaConBrioche: {
        name: 'Granita con Brioche',
        description:
          'Granita d’amande ou de pistache accompagnée d’un brioche “col tuppo”, parfaite le matin.',
      },
      cannolo: {
        name: 'Cannolo',
        description:
          'Tube de pâte croustillante garni de ricotta douce et crémeuse, souvent avec des pépites de chocolat ou des fruits confits.',
      },
      scacciata: {
        name: 'Scacciata',
        description:
          'Focaccia farcie de pommes de terre, saucisse, brocoli ou chou-fleur, reflet des saveurs locales authentiques.',
      },
      caponata: {
        name: 'Caponata',
        description:
          'Plat aigre-doux de légumes avec aubergine, courgette, poivrons, céleri, olives, raisins et câpres dans une sauce vinaigre-sucre.',
      },
      horseMeatDishes: {
        name: 'Plats à base de viande de cheval',
        description:
          'Boulettes et saucisses de cheval, très populaires dans la tradition culinaire catanaise.',
      },
      seafoodSpecialties: {
        name: 'Spécialités de fruits de mer',
        description:
          'Des plats comme l’espadon aux tomates et olives, les spaghetti alle vongole et d’autres fruits de mer frais sont courants dans la cuisine côtière.',
      },
      involtini: {
        name: 'Involtini',
        description:
          'Fines tranches de viande farcies de fromage, de chapelure et d\'herbes, puis finement grillées.',
      },
      seltzLimoneSale: {
        name: 'Seltz Limone e Sale',
        description:
          'Une boisson rafraîchissante typique des kiosques de Catane, composée d\'eau gazeuse, de jus de citron frais et d\'une pincée de sel.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'Trattoria prisée près de la Piazza del Duomo avec des pâtes de la mer et des plats copieux.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'Située dans La Pescheria, elle met en valeur les poissons du jour avec frutti di mare grillés.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Ambiance rétro et recettes lentes célébrant le terroir volcanique de l’Etna.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Tremplin de street-food près du marché avec arancini noirs et fritures variées.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'La pizza et les bières sont également très bonnes ici. Les meilleures pizzas sont celles avec des courgettes grillées, du pesto, des pistaches hachées et de la mozzarella.',
      },
      alVicoloPizzaVino: {
        name: 'Al Vicolo Pizza&Vino',
        description:
          'Essayez d\'appeler d\'abord pour réserver car il est généralement complet. Prenez une pizza avec les bords, de la mortadelle et de la pistache 😍',
      },
      locandaCerami: {
        name: 'Locanda Cerami',
        description:
          'Aussi cette excellente pizzeria, dans l\'une des rues les plus suggestives qui est la Via Crociferi',
      },
      corteDeiMedici: {
        name: 'Corte dei medici',
        description:
          'Surtout connu pour ses pizzas et sa cuisine de rue sicilienne',
      },
      savia: {
        name: 'Savia',
        description:
          'Pour le petit-déjeuner, les meilleures pâtisseries sont Savia et Spinella à Via Etnea',
      },
      spinella: {
        name: 'Spinella',
        description:
          'Une autre boulangerie favorite dans la Via Etnea, connue pour ses pâtisseries et desserts siciliens traditionnels',
      },
      rixCatania: {
        name: 'Rix Catania',
        description:
          'Pour un apéritif ou un verre après le dîner',
      },
      altaMira: {
        name: 'Alta Mira',
        description:
          'Plats quotidiens originaux, grande variété de salades, paninis et large sélection de vins. Options de nourriture saine, service amical et ambiance agréable idéale pour les couples, les amis et les familles',
      },
      nievski: {
        name: 'Nievski',
        description:
          'Pub historique de Catane, point de rencontre de générations de jeunes et d\'étudiants. Il est situé dans le centre historique, près du château d\'Ursino.',
      },
      iDolciDiNonnaVincenza: {
        name: 'I Dolci di Nonna Vincenza',
        description:
          'Une autre pâtisserie historique où aller manger',
      },
      firstLoungeBar: {
        name: 'First Lounge Bar',
        description:
          'Un bar lounge moderne et élégant, idéal pour un apéritif ou un verre après le dîner. Il propose une large sélection de cocktails et de vins.',
      },
      razmataz: {
        name: 'Razmataz | Wine Bar Catania',
        description:
          'Un bar à vin confortable et informel, avec une large sélection de vins siciliens et nationaux. Il propose également des planches de produits locaux.',
      },
      camelot: {
        name: 'Camelot',
        description:
          'Lieu populaire près du Castello Ursino avec décor médiéval, proposant une variété de plats italiens, de grands espaces intérieurs et extérieurs, un service rapide et un excellent rapport qualité-prix, surtout pour les viandes.',
      },
      trattoriaDelCavaliere: {
        name: 'Trattoria del Cavaliere',
        description:
          'Trattoria traditionnelle réputée pour ses plats siciliens à base d’ingrédients frais, dont une excellente pasta al nero di seppia et de la viande de cheval, très appréciée des locaux pour ses portions généreuses et ses saveurs classiques.',
      },
      laTerrazzaDelBarone: {
        name: 'La Terrazza del Barone',
        description:
          'Trattoria avec une terrasse agréable qui sert poissons et viandes siciliennes, excellente cuisine et prix justes, idéale pour dîner en plein air au centre de Catane.',
      },
    },
    priceLabels: {
      economic: 'Économique',
      fair: 'Juste',
      upscale: 'Gastronomique',
    },
  },
  pt: {
    title: 'Saboreie a cidade: onde e o que comer',
    description: 'Conheça mercados, trattorias e petiscos que revelam a essência de Catânia.',
    heroAlt: 'Mesa tradicional de um pranzo siciliano',
    cuisineHeading: 'Essenciais da culinária siciliana 🍋',
    cuisineDescription:
      '<strong>A culinária siciliana é um caldeirão histórico e cultural onde as tradições culinárias grega, árabe, normanda e espanhola se fundem perfeitamente.</strong> Essa fusão única fez da Sicília o núcleo e a base essencial da culinária italiana, pois muitos pratos e sabores icônicos têm origem na ilha. <strong>Ingredientes como azeite de oliva, frutas secas (especialmente pistaches e amêndoas), frutas cítricas e peixes frescos</strong>, junto com pratos emblemáticos como massa alla Norma, massa com sardinhas, arancini e couscous refletem a rica complexidade mediterrânea de sua tradição culinária.\n\n<strong>Mais do que uma simples culinária regional, a cozinha siciliana conta uma história de diversidade</strong> onde cada conquistador deixou sua marca nos sabores e técnicas, oferecendo uma experiência que vai além da comida para narrar a herança mediterrânea da ilha. <strong>A culinária italiana deve grande parte de sua riqueza e diversidade à Sicília</strong>, que é seu coração culinário e alma mediterrânea.',
    typicalDishesHeading: 'Pratos típicos 🍽️',
    restaurantsHeading: 'Recomendações gastronômicas 🍝',
    viewOnMapsLabel: 'Ver no Google Maps',
    typicalDishes: {
      pastaAllaNorma: {
        name: 'Pasta alla Norma',
        description:
          'Rigatoni ou maccheroni envolvidos em molho de tomate, berinjela frita e ricota salgada.',
      },
      arancini: {
        name: 'Arancini',
        description:
          'Cones crocantes de arroz recheados com ragù, mussarela e ervilhas.',
      },
      pesceSpadaAllaGhiotta: {
        name: 'Pesce Spada alla Ghiotta',
        description:
          'Peixe espada dourado com alcaparras, azeitonas e muito azeite siciliano.',
      },
      granitaConBrioche: {
        name: 'Granita com Brioche',
        description:
          'Granita de amêndoa ou pistache servida com brioche “col tuppo” quente.',
      },
      cannolo: {
        name: 'Cannolo',
        description:
          'Tubo de massa crocante recheado com ricota doce e cremosa, muitas vezes com gotas de chocolate ou frutas cristalizadas.',
      },
      scacciata: {
        name: 'Scacciata',
        description:
          'Focaccia recheada com batatas, linguiça, brócolos ou couve-flor, refletindo sabores locais autênticos.',
      },
      caponata: {
        name: 'Caponata',
        description:
          'Prato agridoce de legumes com berinjela, abobrinha, pimentões, aipo, azeitonas, passas e alcaparras em molho de vinagre e açúcar.',
      },
      horseMeatDishes: {
        name: 'Pratos de carne de cavalo',
        description:
          'Almôndegas e linguiças de cavalo, populares na tradição culinária de Catânia.',
      },
      seafoodSpecialties: {
        name: 'Especialidades de frutos do mar',
        description:
          'Pratos como espada com tomates e azeitonas, spaghetti alle vongole e outros frutos do mar frescos abundam na culinária costeira.',
      },
      involtini: {
        name: 'Involtini',
        description:
          'Rolinhos de carne finamente fatiados, recheados com queijo, pão ralado e ervas, perfeitamente grelhados.',
      },
      seltzLimoneSale: {
        name: 'Seltz Limone e Sale',
        description:
          'Uma bebida típica e refrescante dos quiosques de Catânia, feita com água com gás, sumo de limão fresco e uma pitada de sal.',
      },
    },
    restaurants: {
      trattoriaDaAntonio: {
        name: 'Trattoria da Antonio',
        description:
          'Trattoria querida perto da Piazza del Duomo com massas do mar e pratos principais generosos.',
      },
      osteriaAnticaMarina: {
        name: 'Osteria Antica Marina',
        description:
          'Dentro da Pescheria, menus baseados no peixe do dia, crudi e calamares grelhados.',
      },
      meCumpariTuriddu: {
        name: 'Me Cumpari Turiddu',
        description:
          'Vibrações retrô que exaltam receitas lentas do Etna vulcânico.',
      },
      sciroccoSicilianFishLab: {
        name: 'Scirocco Sicilian Fish Lab',
        description:
          'Ponto informal com arancini negros e frituras mistas.',
      },
      ilSaleArtCafe: {
        name: 'Il Sale Art Cafe',
        description:
          'A pizza e as cervejas também são muito boas aqui. As melhores pizzas são as com abobrinha grelhada, pesto, pistache picado e mussarela.',
      },
      alVicoloPizzaVino: {
        name: 'Al Vicolo Pizza&Vino',
        description:
          'Tente ligar primeiro para reservar, pois geralmente está cheio. Peça pizza com as bordas, mortadela e pistache 😍',
      },
      locandaCerami: {
        name: 'Locanda Cerami',
        description:
          'Também esta excelente pizzaria, em uma das ruas mais sugestivas que é a Via Crociferi',
      },
      corteDeiMedici: {
        name: 'Corte dei medici',
        description:
          'Conhecido especialmente por suas pizzas e comida de rua siciliana',
      },
      savia: {
        name: 'Savia',
        description:
          'Para o café da manhã, as melhores confeitarias são Savia e Spinella na Via Etnea',
      },
      spinella: {
        name: 'Spinella',
        description:
          'Outra padaria favorita na Via Etnea﻿, conhecida pelos tradicionais doces e sobremesas sicilianas',
      },
      rixCatania: {
        name: 'Rix Catania',
        description:
          'Para um aperitivo ou uma bebida depois do jantar',
      },
      altaMira: {
        name: 'Alta Mira',
        description:
          'Pratos diários originais, grande variedade de saladas, paninis e uma ampla seleção de vinhos. Opções de comida saudável, atendimento amigável e ambiente agradável, ideal para casais, amigos e famílias',
      },
      nievski: {
        name: 'Nievski',
        description:
          'Pub histórico em Catânia, ponto de encontro de gerações de jovens e estudantes. Está localizado no centro histórico, perto do Castelo Ursino.',
      },
      iDolciDiNonnaVincenza: {
        name: 'I Dolci di Nonna Vincenza',
        description:
          'Outra pastelaria histórica onde ir comer',
      },
      firstLoungeBar: {
        name: 'First Lounge Bar',
        description:
          'Um lounge bar moderno e elegante, ideal para um aperitivo ou uma bebida depois do jantar. Oferece uma vasta seleção de cocktails e vinhos.',
      },
      razmataz: {
        name: 'Razmataz | Wine Bar Catania',
        description:
          'Um wine bar acolhedor e informal, com uma vasta seleção de vinhos sicilianos e nacionais. Também oferece tábuas de frios com produtos locais.',
      },
      camelot: {
        name: 'Camelot',
        description:
          'Local popular perto do Castello Ursino com decoração medieval, oferecendo diversos pratos italianos, amplos espaços internos e externos, serviço rápido e ótimo custo-benefício, especialmente nas carnes.',
      },
      trattoriaDelCavaliere: {
        name: 'Trattoria del Cavaliere',
        description:
          'Trattoria tradicional famosa por pratos sicilianos com ingredientes frescos, incluindo excelente massa ao nero di seppia e carne de cavalo, conhecida pelos locais por porções generosas e sabores clássicos.',
      },
      laTerrazzaDelBarone: {
        name: 'La Terrazza del Barone',
        description:
          'Trattoria com agradável terraço que serve pratos de peixe e carne sicilianos, comida excelente e preços justos, ideal para quem quer comer ao ar livre no centro de Catânia.',
      },
    },
    priceLabels: {
      economic: 'Econômico',
      fair: 'Justo',
      upscale: 'Fino',
    },
  },
};

export const getCataniaEatContent = (language: Language): CataniaEatContent => {
  const locale = translations[language] ?? translations.en;

  const typicalDishes: TypicalDish[] = dishMetadata.map(({ key, image }) => ({
    name: locale.typicalDishes[key].name,
    description: locale.typicalDishes[key].description,
    image,
  }));

  const restaurants: RestaurantRecommendation[] = restaurantMetadata.map((restaurant) => ({
    name: locale.restaurants[restaurant.key].name,
    description: locale.restaurants[restaurant.key].description,
    priceCategory: restaurant.priceCategory,
    priceLabel: locale.priceLabels[restaurant.priceCategory],
    mapUrl: restaurant.mapUrl,
  }));

  return {
    title: locale.title,
    description: locale.description,
    heroImage,
    heroAlt: locale.heroAlt,
    cuisineHeading: locale.cuisineHeading,
    cuisineDescription: locale.cuisineDescription,
    typicalDishesHeading: locale.typicalDishesHeading,
    restaurantsHeading: locale.restaurantsHeading,
    typicalDishes,
    restaurants,
    viewOnMapsLabel: locale.viewOnMapsLabel,
  };
};
