import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construcción"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="absolute top-40 right-20 w-32 h-32 border-4 border-slate-300 opacity-20 hidden lg:block" />
      <div className="absolute bottom-40 right-40 w-24 h-24 border-4 border-slate-300 opacity-10 hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in p-10">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Creando el futuro{" "}
            <span className="text-blue-600">un diseño a la vez</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl">
            Innovamos en cada proyecto, fusionando creatividad y sostenibilidad para un futuro mejor
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-lg px-8 py-6 transition-all group"
              onClick={() => scrollToSection("cotizacion")}
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 text-white bg-white/10 backdrop-blur-sm hover:bg-white/30 transition-all"
              onClick={() => scrollToSection("servicios")}
            >
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 md:gap-6 mt-16 max-w-2xl">
            <div className="text-center">
              <div className="md:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-gray-200">Años de Experiencia</div>
            </div>
            <div className="text-center border-l border-r border-border">
              <div className="md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-gray-200">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-gray-200">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
