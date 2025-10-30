import { Building2, Wrench, HardHat, Paintbrush, Hammer, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Obras Civiles",
    description: "Construcción de estructuras, bodegas industriales y edificaciones con los más altos estándares de calidad.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento General",
    description: "Servicios integrales de mantenimiento preventivo y correctivo para todo tipo de instalaciones.",
    featured: true,
  },
  {
    icon: HardHat,
    title: "Construcción Residencial",
    description: "Diseño y construcción de viviendas unifamiliares y multifamiliares a medida.",
  },
  {
    icon: Paintbrush,
    title: "Remodelaciones",
    description: "Transformamos espacios existentes con diseños modernos y funcionales.",
  },
  {
    icon: Hammer,
    title: "Pavimentos",
    description: "Construcción de pavimentos y vías con materiales de alta resistencia.",
  },
  {
    icon: ClipboardCheck,
    title: "Diseño y Consultoría",
    description: "Asesoría técnica y diseño arquitectónico para proyectos de construcción.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-geometric-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 border-l-4 border-primary px-4 py-2">
              <p className="text-primary font-semibold">NUESTROS SERVICIOS</p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluciones Integrales en{" "}
            <span className="text-gradient">Construcción</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados para satisfacer todas sus necesidades
            de construcción y mantenimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  service.featured
                    ? "border-primary border-2 bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-sm flex items-center justify-center mb-4 transition-all group-hover:scale-110 ${
                      service.featured
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl">
                    {service.title}
                    {service.featured && (
                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        DESTACADO
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
