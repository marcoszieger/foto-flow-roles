import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Upload, Camera, Users, TrendingUp, Calendar, Plus, Edit, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroPhoto from '@/assets/hero-photo.jpg';
import photo1 from '@/assets/photo-1.jpg';
import photo2 from '@/assets/photo-2.jpg';
import photo3 from '@/assets/photo-3.jpg';

const CollaboratorDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

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
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Gerenciar Eventos</h3>
              <p className="text-muted-foreground mb-6">
                Organize e gerencie suas coberturas fotográficas de eventos esportivos.
              </p>
              <Button variant="accent">
                <Plus className="w-4 h-4 mr-2" />
                Criar Novo Evento
              </Button>
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

      <Footer />
    </div>
  );
};

export default CollaboratorDashboard;