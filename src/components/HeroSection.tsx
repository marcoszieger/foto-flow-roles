import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Users, Award, Zap } from 'lucide-react';
import heroPhoto from '@/assets/hero-photo.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-accent text-accent-foreground px-4 py-2">
                Fotografia Esportiva Profissional
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Momentos
                <span className="block text-accent">Únicos</span>
                em Cada Lance
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Capturamos a emoção, a técnica e a paixão do esporte em cada foto. 
                Qualidade profissional para reviver seus melhores momentos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero">
                <Camera className="w-5 h-5 mr-2" />
                Explorar Galeria
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Contratar Cobertura
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Eventos Cobertos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm text-muted-foreground">Entrega Rápida</div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-[var(--shadow-strong)] transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={heroPhoto}
                    alt="Fotografia esportiva profissional"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--gradient-overlay)] opacity-20"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="font-semibold text-primary mb-2">Lance Decisivo</h3>
                      <p className="text-sm text-muted-foreground">
                        Momento que definiu a partida, capturado com perfeição
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <Badge className="bg-accent text-accent-foreground">
                          Futebol Profissional
                        </Badge>
                        <span className="font-bold text-accent">R$ 25,00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;