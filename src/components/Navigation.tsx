import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-[#02021a]/95 backdrop-blur-sm shadow-md"

          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="CPN Ingeniería" className={`h-12 w-auto`} />
            <div className="">
              <h2 className="font-bold text-lg text-white">CPN INGENIERÍA S.A.S</h2>
              <p className="text-xs text-gray-300">Construcción y Mantenimiento</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-white hover:text-primary-light transition-colors font-medium"
            >
              Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("cotizacion")}
              size="lg"
              className={`bg-primary hover:bg-primary-dark transition-all`}
            >
              Solicitar Cotización
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-white hover:text-primary transition-colors font-medium text-left"
              >
                Nosotros
              </button>
              <Button
                onClick={() => scrollToSection("cotizacion")}
                size="lg"
                className="bg-primary hover:bg-primary-dark transition-all w-full"
              >
                Solicitar Cotización
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
