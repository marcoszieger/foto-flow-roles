import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, Heart } from 'lucide-react';
import heroPhoto from '@/assets/hero-photo.jpg';
import photo1 from '@/assets/photo-1.jpg';
import photo2 from '@/assets/photo-2.jpg';
import photo3 from '@/assets/photo-3.jpg';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const photos = [
    {
      id: 1,
      src: heroPhoto,
      title: "Momento Decisivo",
      category: "Futebol",
      price: "R$ 25,00",
      description: "Jogada que definiu o resultado da partida"
    },
    {
      id: 2,
      src: photo1,
      title: "Enterrada Espetacular",
      category: "Basketball",
      price: "R$ 30,00",
      description: "Lance espetacular durante o último quarto"
    },
    {
      id: 3,
      src: photo2,
      title: "Saque Perfeito",
      category: "Tênis",
      price: "R$ 20,00",
      description: "Técnica impecável em momento crucial"
    },
    {
      id: 4,
      src: photo3,
      title: "Linha de Chegada",
      category: "Atletismo",
      price: "R$ 35,00",
      description: "Emoção pura ao cruzar a linha de chegada"
    }
  ];

  const currentPhoto = photos[selectedPhoto];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Últimos Destaques</h2>
          <p className="text-muted-foreground">Momentos únicos capturados com excelência profissional</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Photo */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-shadow">
              <div className="relative">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-[var(--gradient-overlay)] opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Eye className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-accent text-accent-foreground">
                    {currentPhoto.category}
                  </Badge>
                  <span className="text-2xl font-bold text-accent">
                    {currentPhoto.price}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{currentPhoto.title}</h3>
                <p className="text-muted-foreground mb-4">{currentPhoto.description}</p>
                <div className="flex gap-2">
                  <Button variant="accent" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Comprar Foto
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Visualizar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Photo Thumbnails */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Galeria de Fotos</h3>
            {photos.map((photo, index) => (
              <Card
                key={photo.id}
                className={`cursor-pointer transition-all hover:shadow-[var(--shadow-medium)] ${
                  selectedPhoto === index ? 'ring-2 ring-accent' : ''
                }`}
                onClick={() => setSelectedPhoto(index)}
              >
                <CardContent className="p-3">
                  <div className="flex space-x-3">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{photo.title}</h4>
                      <Badge variant="secondary" className="text-xs mb-2">
                        {photo.category}
                      </Badge>
                      <p className="text-accent font-bold text-sm">{photo.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;