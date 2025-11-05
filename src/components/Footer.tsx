import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="CPN Ingeniería" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-bold text-xl">CPN INGENIERÍA S.A.S</h3>
                <p className="text-sm opacity-80">Construcción y Mantenimiento</p>
              </div>
            </div>
            <p className="opacity-80 mb-4">
              Creando el futuro un diseño a la vez. Más de 5 años transformando ideas en realidades sólidas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="opacity-80 hover:opacity-100 transition-opacity">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="opacity-80 hover:opacity-100 transition-opacity">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="opacity-80 hover:opacity-100 transition-opacity">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="opacity-80 hover:opacity-100 transition-opacity">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#cotizacion" className="opacity-80 hover:opacity-100 transition-opacity">
                  Cotización
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="opacity-80">+57 305 362 9682</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="opacity-80">cpn.ing.sas@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="opacity-80">Carrera 21 No. 18-42, Baranoa, Atlántico, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="opacity-80">
            &copy; {new Date().getFullYear()} CPN Ingeniería S.A.S. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
