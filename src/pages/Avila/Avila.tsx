import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { avilaPoints } from '@/pages/Avila/avilaPoints';
import { useGeolocation } from '@/hooks/useGeolocation';
import { calculateDistance } from '@/utils/distance';
import { POICard } from '@/components/POICard';
import { MapView } from '@/components/MapView';
import { BottomNav } from '@/components/BottomNav';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, Castle, ArrowLeft, Car, UtensilsCrossed, Sparkles } from 'lucide-react';
import { PointOfInterest } from '@/types/tour';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/data/translations';
import { guideData } from '@/data/guideData';
import { getAvilaParkContent } from '@/pages/Avila/avilaPark';
import { getAvilaEatContent } from '@/pages/Avila/avilaEat';
import { getAvilaFunFactsContent } from '@/pages/Avila/AvilaFunFacts';

const AvilaPage = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'places' | 'park' | 'eat' | 'info' | 'fun-facts'>('places');
  const { location, error, isLoading } = useGeolocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const copy = getTranslations(language);
  const spain = guideData.find((country) => country.countrySlug === 'spain');
  const totalDuration = avilaPoints.reduce((sum, p) => sum + p.duration, 0);
  const parkContent = getAvilaParkContent(language);
  const eatContent = getAvilaEatContent(language);
  const funFactsContent = getAvilaFunFactsContent(language);


  const handlePOIClick = (poi: PointOfInterest) => {
    if (poi.customLink) {
      navigate(poi.customLink);
      return;
    }

    navigate(`/spain/avila/poi/${poi.id}`);
  };

  const sortedPoints = location
    ? [...avilaPoints].sort((a, b) => {
        const distA = calculateDistance(location.latitude, location.longitude, a.coordinates[0], a.coordinates[1]);
        const distB = calculateDistance(location.latitude, location.longitude, b.coordinates[0], b.coordinates[1]);
        return distA - distB;
      })
    : avilaPoints;

  const renderContent = () => {
    if (activeTab === 'map') {
      return (
        <div className="h-[calc(100vh-8rem)]">
          <MapView 
            points={avilaPoints} 
            userLocation={location} 
            onPOISelect={handlePOIClick}
            translationKey="avila"
          />
        </div>
      );
    }

    if (activeTab === 'fun-facts') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="bg-card rounded-xl border border-border overflow-hidden" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <div className="h-48 w-full overflow-hidden">
              <img
                src={funFactsContent.heroImage}
                alt="Avila Fun Facts"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">{funFactsContent.title}</h2>
                  <p className="text-sm text-muted-foreground">{funFactsContent.description}</p>
                </div>
              </div>
            </div>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {funFactsContent.facts.map((fact, index) => (
              <AccordionItem key={index} value={`fact-${index}`} className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <AccordionTrigger className="text-left text-lg font-semibold">{fact.title}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: fact.content }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      );
    }

    if (activeTab === 'park') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="bg-card rounded-lg p-6 border border-border space-y-4 text-center" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">{parkContent.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{parkContent.description}</p>
            </div>
          </div>

          <Accordion type="multiple" className="space-y-4 pt-2">
            {parkContent.categories.map((category, index) => (
              <AccordionItem key={`park-${index}`} value={`park-${index}`} className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <AccordionTrigger className="text-left text-lg font-semibold">{category.title}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-4">
                  <p className="mb-4">{category.description}</p>
                  <div className="space-y-4">
                    {category.locations.map((loc, i) => (
                      <div key={i} className="bg-muted/50 p-3 rounded-md border border-border/50">
                        <strong className="block text-foreground mb-1">{loc.name}</strong>
                        <span>{loc.description}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      );
    }

    if (activeTab === 'eat') {
      return (
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
          <div className="bg-card rounded-lg p-6 border border-border space-y-4 text-center" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">{eatContent.cuisineEssentialsTitle}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {eatContent.cuisineEssentialsDescription}
              </p>
            </div>
          </div>
          
          {/* Typical Dishes */}
          <h3 className="text-xl font-semibold px-2">{eatContent.typicalDishesTitle}</h3>
          <Accordion type="multiple" className="space-y-4">
            {eatContent.typicalDishes.map((dish, index) => (
              <AccordionItem key={`dish-${index}`} value={`dish-${index}`} className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <AccordionTrigger className="text-left text-lg font-semibold">{dish.title}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-4">
                  {dish.imageUrl && (
                    <img
                      src={dish.imageUrl}
                      alt={dish.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                  )}
                  {dish.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Recommended Restaurants */}
          <h3 className="text-xl font-semibold px-2 mt-8">{eatContent.restaurantsTitle}</h3>
          <p className="text-sm text-muted-foreground px-2">{eatContent.restaurantsDescription}</p>
          <Accordion type="multiple" className="space-y-4 pt-2">
            {eatContent.restaurants.map((restaurant, index) => (
              <AccordionItem key={`rest-${index}`} value={`rest-${index}`} className="border border-border rounded-lg px-4" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <AccordionTrigger className="text-left text-lg font-semibold">{restaurant.name}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-4">
                  {restaurant.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">{copy.avila.listHeading}</h1>
          {isLoading && (
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">{copy.avila.loading}</span>
            </div>
          )}
          {location && (
            <p className="text-sm text-primary font-medium">
              📍 {copy.avila.locationActive}
            </p>
          )}
          {error && (
            <p className="text-sm text-destructive">
              {copy.avila.locationError}
              <span className="block text-xs text-muted-foreground mt-1">{error}</span>
            </p>
          )}
        </div>

        <div className="space-y-4">
          {sortedPoints.map((poi) => {
            const distance = location
              ? calculateDistance(location.latitude, location.longitude, poi.coordinates[0], poi.coordinates[1])
              : undefined;
            
            return (
              <POICard
                key={poi.id}
                poi={poi}
                distance={distance}
                onClick={() => handlePOIClick(poi)}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="fixed top-0 left-0 z-40 p-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/spain')}
          className="px-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {spain?.name[language] ?? 'Spain'}
        </Button>
      </div>
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default AvilaPage;
