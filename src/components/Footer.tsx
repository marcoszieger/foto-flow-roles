import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-accent" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">bhfoto</span>
                <span className="text-xs text-muted-foreground">agência de imagens</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Especialistas em fotografia esportiva com mais de 10 anos de experiência. 
              Capturamos momentos únicos com excelência técnica.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Fotografia Esportiva</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cobertura de Eventos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Venda de Fotos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Álbuns Personalizados</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Impressão Profissional</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Portfólio</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Eventos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Suporte</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>contato@bhfoto.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>São Paulo - SP</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground mb-2">Horário de Atendimento:</p>
              <p className="text-sm">Seg à Sex: 9h às 18h</p>
              <p className="text-sm">Sáb: 9h às 14h</p>
            </div>
          </div>
        </div>

        <hr className="border-border my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground">
            © 2024 BH Foto. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;