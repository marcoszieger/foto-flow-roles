import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Camera, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-[var(--shadow-medium)] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-accent" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">bhfoto</span>
              <span className="text-xs text-muted-foreground">agência de imagens</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-accent transition-colors">Eventos</a>
            <a href="#" className="hover:text-accent transition-colors">Quem Somos</a>
            <a href="#" className="hover:text-accent transition-colors">Contato</a>
          </nav>

          {/* Login Section */}
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="hidden md:flex bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <User className="w-4 h-4 mr-2" />
                  Login | Cadastro
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[480px]">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl">Acesso ao Sistema</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="client" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="client">Sou Cliente</TabsTrigger>
                    <TabsTrigger value="collaborator">Sou Colaborador</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="client" className="space-y-4">
                    <Card>
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-lg">Área do Cliente</CardTitle>
                        <CardDescription>
                          Acesse suas fotos e faça download das suas imagens
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex gap-2">
                        <Button variant="accent" className="flex-1">
                            Entrar
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Cadastrar-me
                          </Button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="client-email">Email</Label>
                            <Input id="client-email" type="email" placeholder="seu@email.com" />
                          </div>
                          <div>
                            <Label htmlFor="client-password">Senha</Label>
                            <Input id="client-password" type="password" placeholder="••••••••" />
                          </div>
                        </div>
                        <Link to="/cliente">
                          <Button className="w-full" variant="accent">
                            Entrar como Cliente
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="collaborator" className="space-y-4">
                    <Card>
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-lg">Área do Colaborador</CardTitle>
                        <CardDescription>
                          Gerencie fotos, eventos e clientes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex gap-2">
                        <Button variant="accent" className="flex-1">
                            Entrar
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Cadastrar-me
                          </Button>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="collab-email">Email</Label>
                            <Input id="collab-email" type="email" placeholder="colaborador@email.com" />
                          </div>
                          <div>
                            <Label htmlFor="collab-password">Senha</Label>
                            <Input id="collab-password" type="password" placeholder="••••••••" />
                          </div>
                        </div>
                        <Link to="/colaborador">
                          <Button className="w-full" variant="accent">
                            Entrar como Colaborador
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-accent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover:text-accent transition-colors">Eventos</a>
              <a href="#" className="hover:text-accent transition-colors">Quem Somos</a>
              <a href="#" className="hover:text-accent transition-colors">Contato</a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground mt-2">
                    <User className="w-4 h-4 mr-2" />
                    Login | Cadastro
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;