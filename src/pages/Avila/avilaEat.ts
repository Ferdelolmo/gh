import type { Language } from '@/types/i18n';

export interface Dish {
  title: string;
  content: string;
  imageUrl?: string;
}

export interface Restaurant {
  name: string;
  description: string;
}

export interface AvilaEatContent {
  cuisineEssentialsTitle: string;
  cuisineEssentialsDescription: string;
  typicalDishesTitle: string;
  typicalDishes: Dish[];
  restaurantsTitle: string;
  restaurantsDescription: string;
  restaurants: Restaurant[];
}

export const getAvilaEatContent = (language: Language): AvilaEatContent => {
  const dishImages = {
    chuleton: "https://www.carnedeavila.org/blog/wp-content/uploads/2015/12/chulet%C3%B3n_de_%C3%A1vila_carne_de_%C3%81vila.jpg",
    patatas: "https://imag.bonviveur.com/patatas-revolconas-o-meneas.jpg",
    judias: "https://cdn3.myrealfood.app/recipes%2Fi1tVQ9xDmI9An8NVBigQ%2Fmain.jpg?alt=media&token=2cdab2a2-1e46-4308-8f5b-b958aedcd490",
    yemas: "https://www.espanafascinante.com/asset/thumbnail,1280,720,center,center/media/espanafascinante/images/2020/12/16/20201216093446334191.jpg"
  };

  const content = {
    es: {
      cuisineEssentialsTitle: "Esenciales de la cocina abulense",
      cuisineEssentialsDescription: "La cocina abulense destaca por sus carnes de ternera y cordero, las judías del Barco de Ávila, y las famosas yemas de Santa Teresa. Los vinos de la región complementan perfectamente esta rica tradición culinaria.",
      typicalDishesTitle: "Platos Típicos",
      typicalDishes: [
        { title: "Chuletón de Ávila 🥩", content: "Marca emblema gastronómico de la ciudad. Carne de ternera de calidad excepcional de la zona.", imageUrl: dishImages.chuleton },
        { title: "Patatas revolconas 🥔🔥", content: "Un puré de patatas con pimentón, ajo y coronado con torreznos crujientes. Plato humilde y típico de Ávila, perfecto para días fríos.", imageUrl: dishImages.patatas },
        { title: "Judías del Barco 🫘", content: "Legumbres con Denominación de Origen, famosas por su textura y sabor únicos.", imageUrl: dishImages.judias },
        { title: "Yemas de Santa Teresa 🍮", content: "Dulce tradicional hecho con yema de huevo y azúcar desde el siglo XVI.", imageUrl: dishImages.yemas }
      ],
      restaurantsTitle: "Restaurantes recomendados",
      restaurantsDescription: "Una de las cosas que te sorprenderán de Ávila, es que cuando pidas una bebida, te pondrán un pincho sin haberlo pedirlo. Sí, tenemos esta cultura como otras ciudades en España, así que aprovéchalo 😋",
      restaurants: [
        { name: "Catacafé ☕", description: "Cafeteros, estáis de suerte. Este café de especialidad ofrece exactamente lo que buscas si eres exigente (como nosotros lo somos) con el café." },
        { name: "El Jardín Secreto 🥐", description: "El sitio perfecto para hacer brunch" },
        { name: "El Pórtico 🍲", description: "Lugar que destaca por sus tapas variadas, entre ellas: Combinado, lomo adobado o champiñón, además de su bocadillo de calamares." },
        { name: "Palacio de los Sofraga 🍖", description: "Destaca más bien por su lugar y sus vistas a la muralla" },
        { name: "La Lola Gastrobar 🍳", description: "Tapas caseras con toque moderno" },
        { name: "Dvinos 🍷", description: "Local moderno especializado en vinos y tapas creativas con productos locales, ambiente ideal para picoteo nocturno." },
        { name: "La Oca Cocktail Bar 🍸", description: "Gastro coctelería y tapas variadas" },
        { name: "La Rotonda del Ancla 🥟", description: "Croquetas, clásicos bien hechos" },
        { name: "El almacén 🍳", description: "Ya estamos hablando de restaurantes, aquí vas a encontrar un producto de calidad a precios no exageradamente altos. Muy recomendable" },
        { name: "Surco 🥘", description: "Cocina castellana accesible y sabrosa en un antiguo almacén con vistas espectaculares a la muralla. Tiene fama por sus raviolis de conejo o sus ostras a la brasa." },
        { name: "Vereda 🍅", description: "Cocina seria y honesta de producto local, destaca por platos como el socarrat de panceta, setas y codorniz." },
        { name: "Bococo 🥩", description: "Uno de los lugares más populares últimamente, con una cocina que mezcla tradición e innovación" },
        { name: "Los Candiles 🍗", description: "Tradición castellana cuidada" }
      ]
    },
    en: {
      cuisineEssentialsTitle: "Ávila Cuisine Essentials",
      cuisineEssentialsDescription: "Abulense cuisine stands out for its beef and lamb, the beans from Barco de Ávila, and the famous yemas de Santa Teresa. Regional wines perfectly complement this rich culinary tradition.",
      typicalDishesTitle: "Typical dishes",
      typicalDishes: [
        { title: "Ávila T-bone Steak 🥩", content: "Emblematic gastronomic brand of the city. Exceptional quality beef from the area.", imageUrl: dishImages.chuleton },
        { title: "Patatas revolconas 🥔🔥", content: "A potato puree with paprika, garlic and topped with crispy pork cracklings. Humble and typical dish from Ávila, perfect for cold days.", imageUrl: dishImages.patatas },
        { title: "Barco Beans 🫘", content: "Legumes with Designation of Origin, famous for their unique texture and flavor.", imageUrl: dishImages.judias },
        { title: "Yemas de Santa Teresa 🍮", content: "Traditional sweet made with egg yolk and sugar since the 16th century.", imageUrl: dishImages.yemas }
      ],
      restaurantsTitle: "Restaurants recommended",
      restaurantsDescription: "When you order a drink in Ávila, you'll be surprised that they'll bring you a small tapa without asking for it. Yes, we have this culture like other cities in Spain, so enjoy it! 😋",
      restaurants: [
        { name: "Catacafé ☕", description: "Coffee lovers, you're in luck. This specialty coffee shop offers exactly what you're looking for if you're demanding (like us) about your coffee." },
        { name: "El Jardín Secreto 🥐", description: "Very nice and fancy place for brunch" },
        { name: "El Pórtico 🍲", description: "A place that stands out for its varied tapas, including: mixed platter, marinated pork loin, or mushrooms, as well as its calamari sandwich" },
        { name: "Palacio de los Sofraga 🍖", description: "Stands out more for its location and its views of the wall" },
        { name: "La Lola Gastrobar 🍳", description: "Homemade tapas with modern touch" },
        { name: "Dvinos 🍷", description: "Modern venue specialized in wines and creative tapas with local products, ideal atmosphere for nighttime snacking." },
        { name: "La Oca Cocktail Bar 🍸", description: "Gastro‑cocktails with assorted tapas" },
        { name: "La Rotonda del Ancla 🥟", description: "Croquettes, well-made classics" },
        { name: "El Almacén 🥚", description: "Now wer're talking about restaurants; here you'll find quality products at prices that are not excessively high" },
        { name: "Surco 🥘", description: "Accessible and tasty Castilian cuisine in an old warehouse with spectacular views of the walls. Famous for its rabbit ravioli or grilled oysters." },
        { name: "Vereda 🍅", description: "Serious and honest local produce cooking, without tasting menus, in a manageable space run by a discreet chef. Stands out for dishes like \"socarrat\" with bacon, mushrooms, and quail." },
        { name: "Bococo 🥩", description: "One of the most popular places in town lately, with cuisine that blends tradition and innovation" },
        { name: "Los Candiles 🍗", description: "Careful Castilian tradition" }
      ]
    },
    it: {
      cuisineEssentialsTitle: "Essenziali della cucina abulense",
      cuisineEssentialsDescription: "La cucina abulense si distingue per le sue carni di vitello e agnello, i fagioli del Barco de Ávila, e i famosi yemas de Santa Teresa. I vini della regione completano perfettamente questa ricca tradizione culinaria.",
      typicalDishesTitle: "Piatti Tipici",
      typicalDishes: [
        { title: "Bistecca di Ávila 🥩", content: "Emblema gastronomico della città. Carne bovina di qualità eccezionale della zona.", imageUrl: dishImages.chuleton },
        { title: "Patate revolconas 🥔🔥", content: "Un purè di patate con paprika, aglio e coronato con ciccioli croccanti. Piatto umile e tipico di Ávila, perfetto per i giorni freddi.", imageUrl: dishImages.patatas },
        { title: "Fagioli del Barco 🫘", content: "Legumi con Denominazione d'Origine, famosi per la loro consistenza e sapore unici.", imageUrl: dishImages.judias },
        { title: "Yemas de Santa Teresa 🍮", content: "Dolce tradizionale fatto con tuorlo d'uovo e zucchero dal XVI secolo.", imageUrl: dishImages.yemas }
      ],
      restaurantsTitle: "Ristoranti consigliati",
      restaurantsDescription: "Una cosa che ti sorprenderà di Ávila è che quando ordini una bevanda, ti porteranno un pincho senza averlo chiesto. Sì, abbiamo questa cultura come altre città in Spagna, quindi approfittane! 😋",
      restaurants: [
        { name: "Catacafé ☕", description: "Amanti del caffè, siete fortunati. Questo caffè di specialità offre esattamente ciò che cercate se siete esigenti (come noi) con il caffè." },
        { name: "El Jardín Secreto 🥐", description: "Un posto molto popolare per fare brunch" },
        { name: "El Pórtico 🍲", description: "Locale che si distingue per le sue tapas varie, tra cui: Combinado, lonza marinata o funghi, oltre al suo panino ai calamari." },
        { name: "Palacio de los Sofraga 🍖", description: "Si distingue più per il suo luogo e le sue viste sulla muraglia" },
        { name: "La Lola Gastrobar 🍳", description: "Tapas casalinghe con tocco moderno" },
        { name: "Dvinos 🍷", description: "Locale moderno specializzato in vini e tapas creative con prodotti locali, ambiente ideale per il picoteo notturno." },
        { name: "La Oca Cocktail Bar 🍸", description: "Gastro cocktail e tapas varie" },
        { name: "La Rotonda del Ancla 🥟", description: "Crocchette, classici ben fatti" },
        { name: "El Almacén 🥚", description: "Stiamo già parlando di ristoranti, qui troverai un prodotto di qualità a prezzi non eccessivamente alti. Molto raccomandabile" },
        { name: "Surco 🥘", description: "Cucina castigliana accessibile e gustosa in un antico magazzino con vista spettacolare sulle mura. Famoso per i ravioli di coniglio o le ostriche alla brace." },
        { name: "Vereda 🍅", description: "Cucina seria e onesta di prodotto locale, si distingue per piatti come il \"socarrat\" di pancetta, funghi e quaglia." },
        { name: "Bococo 🥩", description: "Uno dei posti più popolari ultimamente, con una cucina che mescola tradizione e innovazione" },
        { name: "Los Candiles 🍗", description: "Tradizione castigliana curata" }
      ]
    },
    scn: {
      cuisineEssentialsTitle: "Essenziali dâ cucina abulensi",
      cuisineEssentialsDescription: "La cucina abulensi si distingui pi li so carni di vitellu e agnellu, li fasola dû Barco de Ávila, e li famusi yemas de Santa Teresa. Li vini dâ riggioni cumplitanu perfettamenti sta ricca tradizioni culinaria.",
      typicalDishesTitle: "Piatti Tìpici",
      typicalDishes: [
        { title: "Bistecca di Ávila 🥩", content: "Emblema gastronomicu dâ città. Carni di vitellu di qualità eccezziunali dâ zona.", imageUrl: dishImages.chuleton },
        { title: "Patati revolconas 🥔🔥", content: "Nu purè di patati cu paprica, agghiu e curunatu cu ciccioli croccanti. Chibbu umili e tipicu di Ávila, perfettu pi li jorna friddi.", imageUrl: dishImages.patatas },
        { title: "Fasola dû Barco 🫘", content: "Ligumi cu Dinuminazioni d'Origini, famusi pi la so cunsistenza e sapuri unichi.", imageUrl: dishImages.judias },
        { title: "Yemas de Santa Teresa 🍮", content: "Durci tradiziunali fattu cu rùsulu d'ovu e zuccaru dû XVI sèculu.", imageUrl: dishImages.yemas }
      ],
      restaurantsTitle: "Ristoranti cunsigghiati",
      restaurantsDescription: "Na cosa ca ti maravigghierà di Ávila è ca quannu addumanni na vivanda, ti portanu nu pinchu senza averlu addumandatu. Sì, avemu sta cultura comu autri città di Spagna, accussì approfittanu! 😋",
      restaurants: [
        { name: "Catacafé ☕", description: "Amanti dû cafè, siti furtunati. Stu cafè spiciali offri esattamenti chiddu ca circati si siti esiggenti (comu semu nuatri) cû cafè." },
        { name: "El Jardín Secreto 🥐", description: "U locu beddu ppi fare u brunch" },
        { name: "El Pórtico 🍲", description: "Locu chi si distingui pi li so tapas varii, ntra cui: Cumbinatu, lonzu marrinatu o funghi, 'nzè mu lu so paninu cu calamari." },
        { name: "Palacio di li Sofraga 🍖", description: "Si distingui cchiù pi lu so locu e li so visti â muraglia" },
        { name: "La Lola Gastrobar 🍳", description: "Tapas casalinghi cu toccu mudernu" },
        { name: "Dvinos 🍷", description: "Luocu mudernu spetzjalizzatu nn vini e tapassi kreativi cu prututti locali, ambinte iddeale pi picutea notturna." },
        { name: "La Oca Cocktail Bar 🍸", description: "Gastru cocktail e tapas varii" },
        { name: "La Rotonda del Ancla 🥟", description: "Cruchetti, classici beni fatti" },
        { name: "El Almacén 🥚", description: "Sta già parrannu di ristoranti, ccà trovi nu pruduttu di qualità a prezzi nun eccessivamenti auti. Assai racumandàbbili" },
        { name: "Surco 🥘", description: "Cucina castigliana accessìbili e sapurita 'n un anticu magazzinu cu visti spittaculari supra li mura. Famusu pi li ravioli di cunigghiu o l'ostriche â braci." },
        { name: "Vereda 🍅", description: "Cucina seria e onesta di prututti locali, disaca pi piatti comu u \"socarrat\" di pancetta, fungghi e quaglija." },
        { name: "Bococo 🥩", description: "Unu di li posti cchiù populari ultimamente, cu na cucina chi mischia tradizioni e 'nnovazioni" },
        { name: "Los Candiles 🍗", description: "Tradizioni castigliana curata" }
      ]
    },
    pt: {
      cuisineEssentialsTitle: "Essenciais da culinária de Ávila",
      cuisineEssentialsDescription: "A culinária abulense destaca-se pelas suas carnes de vitela e cordeiro, os grãos do Barco de Ávila, e as famosas yemas de Santa Teresa. Os vinhos da região complementam perfeitamente esta rica tradição culinária.",
      typicalDishesTitle: "Pratos Típicos",
      typicalDishes: [
        { title: "Chuletón de Ávila 🥩", content: "Marca emblema gastronômica da cidade. Carne de vitela de qualidade excepcional da região.", imageUrl: dishImages.chuleton },
        { title: "Patatas revolconas 🥔🔥", content: "Um purê de batatas com páprica, alho e coroado com torresmos crocantes. Prato humilde e típico de Ávila, perfeito para dias frios.", imageUrl: dishImages.patatas },
        { title: "Judías del Barco 🫘", content: "Leguminosas com Denominação de Origem, famosas por sua textura e sabor únicos.", imageUrl: dishImages.judias },
        { title: "Yemas de Santa Teresa 🍮", content: "Doce tradicional feito com gema de ovo e açúcar desde o século XVI.", imageUrl: dishImages.yemas }
      ],
      restaurantsTitle: "Restaurantes recomendados",
      restaurantsDescription: "Uma das coisas que o surpreenderá em Ávila é que, ao pedir uma bebida, vão lhe servir um pincho sem você ter pedido. Sim, temos essa cultura como outras cidades da Espanha, então aproveite! 😋",
      restaurants: [
        { name: "Catacafé ☕", description: "Amantes de café, vocês estão com sorte. Este café de especialidade oferece exatamente o que você procura se for exigente (como nós) com o café." },
        { name: "El Jardín Secreto 🥐", description: "O lugar perfeito para um brunch" },
        { name: "El Pórtico 🍲", description: "Lugar que se destaca por suas tapas variadas, entre elas: Combinado, lombo marinado ou cogumelos, além de seu sanduíche de lula." },
        { name: "Palacio de los Sofraga 🍖", description: "Destaca-se mais por sua localização e suas vistas da muralha" },
        { name: "La Lola Gastrobar 🍳", description: "Tapas caseiras com toque moderno" },
        { name: "Dvinos 🍷", description: "Local moderno especializado em vinhos e tapas criativas com produtos locais, ambiente ideal para petiscos à noite." },
        { name: "La Oca Cocktail Bar 🍸", description: "Gastro coquetelaria e tapas variadas" },
        { name: "La Rotonda del Ancla 🥟", description: "Croquetes, clássicos bem feitos" },
        { name: "El almacén 🍳", description: "Já estamos falando de restaurantes, aqui você encontrará produtos de qualidade a preços não exageradamente altos. Muito recomendável" },
        { name: "Surco 🥘", description: "Cozinha castelhana acessível e saborosa num antigo armazém com vistas espetaculares para a muralha. Famoso por seus raviólis de coelho ou ostras na brasa." },
        { name: "Vereda 🍅", description: "Cozinha séria e honesta de produtos locais, destaca-se por pratos como o socarrat de barriga de porco, cogumelos e codorna." },
        { name: "Bococo 🥩", description: "Um dos lugares mais populares ultimamente, com uma culinária que mistura tradição e inovação" },
        { name: "Los Candiles 🍗", description: "Tradição castelhana bem cuidada" }
      ]
    },
    fr: {
      cuisineEssentialsTitle: "Les essentiels de la cuisine d'Ávila",
      cuisineEssentialsDescription: "La cuisine d'Ávila se distingue par ses viandes de bœuf et d'agneau, les haricots du Barco de Ávila, et les fameuses yemas de Santa Teresa. Les vins de la région complètent parfaitement cette riche tradition culinaire.",
      typicalDishesTitle: "Plats Typiques",
      typicalDishes: [
        { title: "Côte de bœuf d'Ávila 🥩", content: "Emblème gastronomique de la ville. Viande de bœuf d'une qualité exceptionnelle de la région.", imageUrl: dishImages.chuleton },
        { title: "Patatas revolconas 🥔🔥", content: "Une purée de pommes de terre au paprika, à l'ail et garnie de craquelins de porc croustillants. Plat humble et typique d'Ávila, parfait pour les jours froids.", imageUrl: dishImages.patatas },
        { title: "Haricots du Barco 🫘", content: "Légumineuses sous Appellation d'Origine, célèbres pour leur texture et leur saveur uniques.", imageUrl: dishImages.judias },
        { title: "Yemas de Santa Teresa 🍮", content: "Gourmandise traditionnelle faite avec du jaune d'œuf et du sucre depuis le XVIe siècle.", imageUrl: dishImages.yemas }
      ],
      restaurantsTitle: "Restaurants recommandés",
      restaurantsDescription: "Une des choses qui vous surprendra à Ávila, c'est que lorsque vous commandez une boisson, on vous servira un tapas sans l'avoir demandé. Oui, nous avons cette culture comme d'autres villes d'Espagne, alors profitez-en ! 😋",
      restaurants: [
        { name: "Catacafé ☕", description: "Amateurs de café, vous avez de la chance. Ce café de spécialité offre exactement ce que vous cherchez si vous êtes exigeant (comme nous le sommes) avec le café." },
        { name: "El Jardín Secreto 🥐", description: "L'endroit idéal pour un brunch" },
        { name: "El Pórtico 🍲", description: "Endroit qui se distingue par ses tapas variées, parmi lesquelles : Assiette mixte, filet de porc mariné ou champignons, ainsi que son sandwich aux calamars." },
        { name: "Palacio de los Sofraga 🍖", description: "Se distingue plutôt par son emplacement et sa vue sur les remparts" },
        { name: "La Lola Gastrobar 🍳", description: "Tapas faites maison avec une touche moderne" },
        { name: "Dvinos 🍷", description: "Lieu moderne spécialisé dans les vins et les tapas créatives avec des produits locaux, atmosphère idéale pour les collations nocturnes." },
        { name: "La Oca Cocktail Bar 🍸", description: "Gastro-cocktails et tapas variées" },
        { name: "La Rotonda del Ancla 🥟", description: "Croquettes, des classiques bien faits" },
        { name: "El almacén 🍳", description: "Nous parlons de vrais restaurants ici, vous y trouverez des produits de qualité à des prix qui ne sont pas exagérément élevés. Hautement recommandé" },
        { name: "Surco 🥘", description: "Cuisine castillane accessible et savoureuse dans un ancien entrepôt avec une vue spectaculaire sur les murailles. Célèbre pour ses raviolis au lapin ou ses huîtres grillées." },
        { name: "Vereda 🍅", description: "Cuisine sérieuse et honnête à partir de produits locaux, elle se distingue par des plats comme le socarrat à la poitrine de porc, champignons et caille." },
        { name: "Bococo 🥩", description: "L'un des endroits les plus populaires dernièrement, avec une cuisine qui mêle tradition et innovation" },
        { name: "Los Candiles 🍗", description: "La tradition castillane bien entretenue" }
      ]
    }
  };

  return content[language as keyof typeof content] || content.en;
};
