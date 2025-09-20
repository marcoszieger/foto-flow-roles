import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Heart, Search, Filter, Grid, List } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroPhoto from '@/assets/hero-photo.jpg';
import photo1 from '@/assets/photo-1.jpg';
import photo2 from '@/assets/photo-2.jpg';
import photo3 from '@/assets/photo-3.jpg';

const ClientDashboard = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const photos = [
    { id: 1, src: heroPhoto, title: "Momento Decisivo", category: "Futebol", date: "2024-09-15", downloaded: false, favorited: true },
    { id: 2, src: photo1, title: "Enterrada Espetacular", category: "Basketball", date: "2024-09-14", downloaded: true, favorited: false },
    { id: 3, src: photo2, title: "Saque Perfeito", category: "Tênis", date: "2024-09-13", downloaded: false, favorited: true },
    { id: 4, src: photo3, title: "Linha de Chegada", category: "Atletismo", date: "2024-09-12", downloaded: true, favorited: false },
  ];

  const filteredPhotos = photos.filter(photo => 
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Client Welcome Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">Bem-vindo, Cliente!</h1>
            <p className="text-lg opacity-90">
              Acesse suas fotos, gerencie downloads e organize seus momentos favoritos.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por título ou categoria..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button
                variant={viewMode === 'grid' ? 'accent' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'accent' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">Todas as Fotos</TabsTrigger>
            <TabsTrigger value="favorites">Favoritos</TabsTrigger>
            <TabsTrigger value="downloaded">Downloads</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
            }>
              {filteredPhotos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden hover:shadow-[var(--shadow-medium)] transition-shadow">
                  {viewMode === 'grid' ? (
                    <CardContent className="p-0">
                      <div className="relative group">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                          <Button size="icon" variant="secondary">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="secondary">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-accent text-accent-foreground">
                            {photo.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">{photo.title}</h3>
                        <p className="text-sm text-muted-foreground">{photo.date}</p>
                        <div className="flex items-center mt-3 space-x-2">
                          {photo.downloaded && (
                            <Badge variant="secondary" className="text-xs">
                              Baixado
                            </Badge>
                          )}
                          {photo.favorited && (
                            <Badge variant="secondary" className="text-xs">
                              ❤️ Favorito
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  ) : (
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">{photo.title}</h3>
                              <p className="text-sm text-muted-foreground">{photo.category} • {photo.date}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button size="sm" variant="accent">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                              <Button size="sm" variant="outline">
                                <Heart className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites">
            <div className="text-center py-12">
              <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Suas Fotos Favoritas</h3>
              <p className="text-muted-foreground">
                Suas fotos favoritas aparecerão aqui quando você marcar alguma como favorita.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="downloaded">
            <div className="text-center py-12">
              <Download className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Histórico de Downloads</h3>
              <p className="text-muted-foreground">
                Suas fotos baixadas aparecerão aqui para fácil acesso.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ClientDashboard;