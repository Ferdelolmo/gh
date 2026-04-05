import type { Language } from '@/types/i18n';
import { getTranslations } from '@/data/translations';

export interface ParkingLocation {
  name: string;
  description: string;
}

export interface ParkingCategory {
  title: string;
  description: string;
  locations: ParkingLocation[];
}

export interface AvilaParkContent {
  title: string;
  description: string;
  categories: ParkingCategory[];
}

export const getAvilaParkContent = (language: Language): AvilaParkContent => {
  const { avila } = getTranslations(language);

  const entries: Record<Language, ParkingCategory[]> = {
    es: [
      {
        title: 'Parkings Gratuitos',
        description: 'Zonas blancas en calles exteriores, sin límite de tiempo y seguras para estancias largas (10-20 min caminando al centro).',
        locations: [
          {
            name: 'Parque de San Antonio y aledaños (Zona Norte)',
            description: 'Amplio, sombreado, junto a parque y playground; ideal para familias o autocaravanas. Tranquilo y a 10-15 min del centro histórico.',
          },
          {
            name: 'Vecindad detrás del Paseo del Rastro y Calle Empedrada',
            description: 'Espacios gratuitos amplios, cerca de Puerta del Alcázar; buena para vehículos grandes (sur de la muralla).',
          }
        ]
      },
      {
        title: 'Parkings de Pago en Calle (Zonas ORA)',
        description: 'Reguladas en horario laboral, pero gratuitas sábados tarde, domingos y festivos. Usa la app Telpark para pago fácil.',
        locations: [
          {
            name: 'Zona Azul (centro)',
            description: 'Horario: L-V 10:00-14:00 y 16:30-20:00; sáb 10:00-14:00. Gratuito dom/fest. Precios: 20 min 0,20 €; 1h 0,60 €; máx 2h 1,10 €.',
          },
          {
            name: 'Zona Verde (disuasoria, periferia)',
            description: 'Mismo horario. Precios: 1h 0,15 €; mañana (4h) 0,45 €; completa (7,5h) 0,90 €. Sin límite de tiempo.',
          }
        ]
      },
      {
        title: 'Parkings Privados',
        description: 'Cubiertos, 24h, vigilados; perfectos para alta temporada o lluvia. Reserva vía Telpark.',
        locations: [
          {
            name: 'El Grande Empark (Plaza Mercado Grande)',
            description: '1,75 €/1ª hora; 25,15 €/día. Top ubicación junto a la muralla/Catedral, cubierto, carga VE, gran capacidad.',
          },
          {
            name: 'El Rastro (Paseo del Rastro)',
            description: '0,85 €/1ª hora; 20,40 €/día. Céntrico (lienzo sur), vistas panorámicas, ascensor directo al paseo.',
          }
        ]
      }
    ],
    en: [
      {
        title: 'Free Parking',
        description: 'White zones on outer streets, no time limits and safe for long stays (10-20 min walk to the center).',
        locations: [
          {
            name: 'San Antonio Park and surroundings (North Zone)',
            description: 'Spacious, shaded, next to a park and playground; ideal for families or motorhomes. Quiet and 10-15 min from the historic center.',
          },
          {
            name: 'Neighborhood behind Paseo del Rastro and Calle Empedrada',
            description: 'Wide free spaces, near Alcázar Gate; good for large vehicles (south of the wall).',
          }
        ]
      },
      {
        title: 'Paid On-Street Parking (Blue/Green Zones)',
        description: 'Regulated during working hours, but free Saturday afternoons, Sundays and holidays. Use the Telpark app for easy payment.',
        locations: [
          {
            name: 'Blue Zone (center)',
            description: 'Hours: Mon-Fri 10:00-14:00 & 16:30-20:00; Sat 10:00-14:00. Free Sun/Holidays. Prices: 20 min €0.20; 1h €0.60; max 2h €1.10.',
          },
          {
            name: 'Green Zone (deterrent, outskirts)',
            description: 'Same hours. Prices: 1h €0.15; morning (4h) €0.45; full (7.5h) €0.90. No time limit.',
          }
        ]
      },
      {
        title: 'Private Parkings',
        description: 'Covered, 24h, guarded; perfect for high season or rain. Reserve via Telpark.',
        locations: [
          {
            name: 'El Grande Empark (Plaza Mercado Grande)',
            description: '€1.75/1st hour; €25.15/day. Top location by the walls/Cathedral, covered, EV charging, large capacity.',
          },
          {
            name: 'El Rastro (Paseo del Rastro)',
            description: '€0.85/1st hour; €20.40/day. Central (south wall), panoramic views, direct elevator to the promenade.',
          }
        ]
      }
    ],
    fr: [
      {
        title: 'Parkings Gratuits',
        description: 'Zones blanches dans les rues extérieures, sans limite de temps et sûres pour les longs séjours (10-20 min à pied du centre).',
        locations: [
          {
            name: 'Parc de San Antonio et environs (Zone Nord)',
            description: 'Spacieux, ombragé, à côté du parc de jeux ; idéal pour les familles ou camping-cars. Calme et à 10-15 min du centre historique.',
          },
          {
            name: 'Quartier derrière Paseo del Rastro et Calle Empedrada',
            description: 'Grands espaces gratuits, près de la Porte d\'Alcazar ; bon pour les gros véhicules.',
          }
        ]
      },
      {
        title: 'Stationnement Payant dans la Rue (Zones Bleue/Verte)',
        description: 'Réglementé pendant les heures de travail, mais gratuit samedi après-midi, dimanches et jours fériés. Utilisez l\'application Telpark.',
        locations: [
          {
            name: 'Zone Bleue (centre)',
            description: 'Horaires: Lun-Ven 10:00-14:00 & 16:30-20:00; Sam 10:00-14:00. Gratuit dim/fêtes. Prix: 20 min 0,20€; 1h 0,60€; max 2h 1,10€.',
          },
          {
            name: 'Zone Verte (dissuasion, périphérie)',
            description: 'Mêmes horaires. Prix: 1h 0,15€; matin (4h) 0,45€; complet (7,5h) 0,90€. Pas de limite de temps.',
          }
        ]
      },
      {
        title: 'Parkings Privés',
        description: 'Couverts, 24h/24, gardés ; parfait pour la haute saison ou la pluie. Réservez via Telpark.',
        locations: [
          {
            name: 'El Grande Empark (Plaza Mercado Grande)',
            description: '1,75€/1ère heure; 25,15€/jour. Emplacement idéal près des murs/Cathédrale, couvert, recharge VE, grande capacité.',
          },
          {
            name: 'El Rastro (Paseo del Rastro)',
            description: '0,85€/1ère heure; 20,40€/jour. Central (mur sud), vues panoramiques, ascenseur direct vers la promenade.',
          }
        ]
      }
    ],
    it: [
      {
        title: 'Parcheggi Gratuiti',
        description: 'Zone bianche nelle strade esterne, senza limiti di tempo e sicure per lunghi soggiorni (10-20 min a piedi dal centro).',
        locations: [
          {
            name: 'Parco di San Antonio e dintorni (Zona Nord)',
            description: 'Spazioso, ombreggiato, vicino al parco giochi; ideale per famiglie o camper. Adiacente al centro storico (10-15 min).',
          },
          {
            name: 'Quartiere dietro Paseo del Rastro e Calle Empedrada',
            description: 'Ampi spazi gratuiti, vicino alla Puerta del Alcazar; ottimo per veicoli di grandi dimensioni.',
          }
        ]
      },
      {
        title: 'Parcheggio a Pagamento in Strada (Zone Blu/Verde)',
        description: 'Regolamentato negli orari lavorativi, gratuito sabato pomeriggio, domeniche e festivi. Usa l\'app Telpark per pagare facilmente.',
        locations: [
          {
            name: 'Zona Blu (centro)',
            description: 'Orari: Lun-Ven 10:00-14:00 e 16:30-20:00; Sab 10:00-14:00. Gratis Dom/Festivi. Prezzi: 20 min 0,20€; 1h 0,60€; max 2h 1,10€.',
          },
          {
            name: 'Zona Verde (dissuasione, periferia)',
            description: 'Stessi orari. Prezzi: 1h 0,15€; mattina (4h) 0,45€; completo (7,5h) 0,90€. Nessun limite di tempo.',
          }
        ]
      },
      {
        title: 'Parcheggi Privati',
        description: 'Coperti, 24h, custoditi; perfetti per l\'alta stagione o la pioggia. Prenota tramite Telpark.',
        locations: [
          {
            name: 'El Grande Empark (Plaza Mercado Grande)',
            description: '1,75€/1ª ora; 25,15€/giorno. Posizione top vicino alle mura/Cattedrale, coperto, ricarica veicoli elettrici, ampia capacità.',
          },
          {
            name: 'El Rastro (Paseo del Rastro)',
            description: '0,85€/1ª ora; 20,40€/giorno. Centrale (mura sud), vista panoramica, ascensore diretto alla passeggiata.',
          }
        ]
      }
    ],
    pt: [
      {
        title: 'Estacionamentos Gratuitos',
        description: 'Zonas brancas em ruas exteriores, sem limite de tempo e seguras para estadias longas (10-20 min a pé do centro).',
        locations: [
          {
            name: 'Parque de San Antonio e arredores (Zona Norte)',
            description: 'Espaçoso, sombreado, junto a um parque infantil; ideal para famílias ou autocaravanas. Tranquilo e a 10-15 min do centro histórico.',
          },
          {
            name: 'Bairro atrás do Paseo del Rastro e Calle Empedrada',
            description: 'Amplo espaço gratuito, perto da Porta do Alcázar; bom para veículos grandes.',
          }
        ]
      },
      {
        title: 'Estacionamento na Rua Pago (Zonas Azul/Verde)',
        description: 'Regulado em horário de trabalho, mas gratuito ao sábado à tarde, domingos e feriados. Use a aplicação Telpark.',
        locations: [
          {
            name: 'Zona Azul (centro)',
            description: 'Horário: Seg-Sex 10:00-14:00 e 16:30-20:00; Sáb 10:00-14:00. Grátis Dom/Feriados. Preços: 20 min 0,20€; 1h 0,60€; máx 2h 1,10€.',
          },
          {
            name: 'Zona Verde (dissuasória, periferia)',
            description: 'Mesmo horário. Preços: 1h 0,15€; manhã (4h) 0,45€; completo (7,5h) 0,90€. Sem limite de tempo.',
          }
        ]
      },
      {
        title: 'Parques Privados',
        description: 'Cobertos, 24h, vigiados; perfeitos para época alta ou chuva. Reserve via Telpark.',
        locations: [
          {
            name: 'El Grande Empark (Plaza Mercado Grande)',
            description: '1,75€/1ª hora; 25,15€/dia. Localização de topo junto à muralha/Catedral, coberto, carregamento VE, grande capacidade.',
          },
          {
            name: 'El Rastro (Paseo del Rastro)',
            description: '0,85€/1ª hora; 20,40€/dia. Central (muralha sul), vistas panorâmicas, elevador direto para o passeio.',
          }
        ]
      }
    ]
  };

  return {
    title: avila.parkAndGoTitle,
    description: avila.parkAndGoDescription,
    categories: entries[language] || entries['en']
  };
};
