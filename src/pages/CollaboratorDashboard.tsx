import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Upload, Camera, Users, TrendingUp, Calendar, Plus, Edit, Trash2, ExternalLink, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroPhoto from '@/assets/hero-photo.jpg';
import photo1 from '@/assets/photo-1.jpg';
import photo2 from '@/assets/photo-2.jpg';
import photo3 from '@/assets/photo-3.jpg';

const CollaboratorDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);

  const events = [
    {
      id: 1,
      title: "OHANA RUNNING - POSSE GOIAS 2025",
      type: "Corrida de Rua",
      date: "20 Setembro 2025",
      location: "Posse / GO",
      hasPhotos: true,
      hasVideos: false,
      commission: {
        official: "70% fotógrafo",
        unofficial: "60% fotógrafo"
      },
      minResolution: "3450x2300",
      launchTime: "20/09/2025 21:00",
      athleteId: "Número e Várias Galerias",
      registrationLimit: "(não definido)",
      officialCoverage: "Não",
      prices: {
        high: "R$ 19,90",
        medium: "R$ 16,90",
        low: "R$ 11,90"
      },
      points: "100 pontos",
      credits: "100 pontos",
      whatsapp: "Foco Pires - PJ",
      photographers: "0"
    },
    {
      id: 2,
      title: "TREINO ALAMEDA RICARDO PARANHOS - SÁBADO 20/09/25",
      type: "Treinos",
      date: "20 Setembro 2025",
      location: "Goiânia / GO",
      hasPhotos: true,
      hasVideos: true,
      commission: {
        official: "70% fotógrafo",
        unofficial: "60% fotógrafo"
      },
      minResolution: "3450x2300",
      launchTime: "20/09/2025 19:00",
      athleteId: "Número e Várias Galerias",
      registrationLimit: "(não definido)",
      officialCoverage: "Sim",
      prices: {
        high: "R$ 19,90",
        medium: "R$ 16,90",
        low: "R$ 11,90"
      },
      points: "100 pontos",
      credits: "100 pontos",
      whatsapp: "Foco Pires - PJ",
      photographers: "2"
    },
    {
      id: 3,
      title: "TREINO AVENIDA RIO VERDE SÁBADO 20/09/25",
      type: "Treinos",
      date: "20 Setembro 2025",
      location: "Aparecida de Goiânia / GO",
      hasPhotos: true,
      hasVideos: true,
      commission: {
        official: "70% fotógrafo",
        unofficial: "60% fotógrafo"
      },
      minResolution: "3450x2300",
      launchTime: "20/09/2025 18:00",
      athleteId: "Número e Várias Galerias",
      registrationLimit: "(não definido)",
      officialCoverage: "Não",
      prices: {
        high: "R$ 19,90",
        medium: "R$ 16,90",
        low: "R$ 11,90"
      },
      points: "100 pontos",
      credits: "100 pontos",
      whatsapp: "Foco Pires - PJ",
      photographers: "1"
    }
  ];

  const openEventDialog = (event) => {
    setSelectedEvent(event);
    setIsEventDialogOpen(true);
  };

  const stats = [
    { title: "Total de Fotos", value: "1,247", icon: Camera, change: "+12%" },
    { title: "Vendas este Mês", value: "R$ 3,240", icon: TrendingUp, change: "+8%" },
    { title: "Clientes Ativos", value: "89", icon: Users, change: "+15%" },
    { title: "Eventos Cobertos", value: "23", icon: Calendar, change: "+3%" },
  ];

  const recentPhotos = [
    { id: 1, src: heroPhoto, title: "Final do Campeonato", status: "Aprovada", sales: 15 },
    { id: 2, src: photo1, title: "Liga de Basketball", status: "Pendente", sales: 8 },
    { id: 3, src: photo2, title: "Torneio de Tênis", status: "Aprovada", sales: 22 },
    { id: 4, src: photo3, title: "Maratona da Cidade", status: "Em Revisão", sales: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Collaborator Welcome Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold mb-4">Painel do Colaborador</h1>
              <p className="text-lg opacity-90">
                Gerencie suas fotos, acompanhe vendas e organize eventos.
              </p>
            </div>
            <Button variant="secondary" size="lg" className="mt-4 md:mt-0">
              <Upload className="w-5 h-5 mr-2" />
              Fazer Upload
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="photos">Minhas Fotos</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
            <TabsTrigger value="sales">Vendas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-accent">{stat.change} vs mês anterior</p>
                      </div>
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Atividade Recente</CardTitle>
                  <CardDescription>Suas fotos mais recentes e seus status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPhotos.map((photo) => (
                    <div key={photo.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{photo.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge 
                            className={
                              photo.status === 'Aprovada' ? 'bg-green-100 text-green-800' :
                              photo.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }
                          >
                            {photo.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {photo.sales} vendas
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upload Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Status de Uploads</CardTitle>
                  <CardDescription>Progresso dos seus uploads recentes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Evento Basketball Finals</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Torneio de Tênis</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Maratona da Cidade</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <Button variant="accent" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Upload
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="photos">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Minhas Fotos</h2>
              <Button variant="accent">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Fotos
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recentPhotos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                        <Button size="icon" variant="secondary">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="secondary">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{photo.title}</h3>
                      <div className="flex items-center justify-between">
                        <Badge className={
                          photo.status === 'Aprovada' ? 'bg-green-100 text-green-800' :
                          photo.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }>
                          {photo.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {photo.sales} vendas
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Eventos Disponíveis</h2>
              </div>

              {/* Filters */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Filtre por aqui</h3>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button variant="default" size="sm" className="bg-black text-white hover:bg-black/90">
                    Todas
                  </Button>
                  <Button variant="outline" size="sm" className="bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500">
                    Foco Radical
                  </Button>
                  <Button variant="outline" size="sm" className="bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500">
                    Fotos By
                  </Button>
                  <div className="flex items-center space-x-2 ml-4">
                    <input type="checkbox" id="oficiais" className="rounded" />
                    <label htmlFor="oficiais" className="text-sm font-medium">
                      Somente Oficiais
                    </label>
                  </div>
                </div>
              </div>

              {/* Search and Filters Row */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <Input 
                    type="text" 
                    placeholder="Pesquisar evento" 
                    className="pl-10"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="px-3 py-2 border rounded-md text-sm">
                    <option>09/2025</option>
                    <option>10/2025</option>
                    <option>11/2025</option>
                  </select>
                  <select className="px-3 py-2 border rounded-md text-sm">
                    <option>Goiás</option>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                  </select>
                </div>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.type}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        {event.hasPhotos && (
                          <div className="flex items-center gap-1">
                            <Camera className="w-4 h-4" />
                            Fotos
                          </div>
                        )}
                        {event.hasVideos && (
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2v8a2 2 0 002 2z" />
                            </svg>
                            Vídeos
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {event.location}
                        <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date.split(' ').slice(-1)[0]}
                      </div>
                      <Button 
                        className="w-full bg-black text-yellow-400 hover:bg-black/90"
                        onClick={() => openEventDialog(event)}
                      >
                        Ver Evento
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sales">
            <div className="text-center py-12">
              <TrendingUp className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Relatório de Vendas</h3>
              <p className="text-muted-foreground">
                Acompanhe suas vendas, comissões e performance de fotos.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={isEventDialogOpen} onOpenChange={setIsEventDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className="text-xl font-bold text-yellow-400">
              {selectedEvent?.title}
            </DialogTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Link Externo
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsEventDialogOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogHeader>
          
          {selectedEvent && (
            <div className="space-y-6 mt-4">
              {/* Event Info */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                  </svg>
                  {selectedEvent.date}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {selectedEvent.location}
                </div>
              </div>

              {/* Register Button */}
              <div className="flex justify-end">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2">
                  Me Cadastrar
                </Button>
              </div>

              {/* Main Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Comissões:</h4>
                    <div className="bg-yellow-400 text-black p-3 rounded-lg font-medium">
                      Oficial: {selectedEvent.commission.official}; Não Oficial: {selectedEvent.commission.unofficial}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Identificação dos Atletas:</h4>
                    <div className="bg-muted p-3 rounded-lg">
                      {selectedEvent.athleteId}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Preços de venda</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 bg-muted p-2 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                        <span className="text-sm">Alta: {selectedEvent.prices.high}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted p-2 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="text-sm">Média: {selectedEvent.prices.medium}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted p-2 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <span className="text-sm">Baixa: {selectedEvent.prices.low}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Pontos:</h4>
                      <div className="bg-muted p-3 rounded-lg text-center">
                        {selectedEvent.points}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Créditos:</h4>
                      <div className="bg-muted p-3 rounded-lg text-center">
                        {selectedEvent.credits}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle Column */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mínima resolução de upload:</h4>
                    <div className="bg-muted p-3 rounded-lg">
                      {selectedEvent.minResolution}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Data limite para Registro:</h4>
                    <div className="bg-muted p-3 rounded-lg">
                      {selectedEvent.registrationLimit}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Whatsapp</h4>
                    <div className="bg-muted p-3 rounded-lg">
                      <span>{selectedEvent.whatsapp}</span>
                      <span className="ml-2 text-blue-600 text-sm">Tel: 61985332204</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Fotógrafos:</h4>
                    <div className="bg-muted p-3 rounded-lg">
                      {selectedEvent.photographers}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Lançamento:</h4>
                    <div className="bg-muted p-3 rounded-lg">
                      {selectedEvent.launchTime}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Cobertura Oficial:</h4>
                    <div className="bg-muted p-3 rounded-lg">
                      {selectedEvent.officialCoverage}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default CollaboratorDashboard;