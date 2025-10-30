import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import warehouseImage from "@/assets/project-warehouse.jpg";
import residentialImage from "@/assets/project-residential.jpg";
import pavementImage from "@/assets/project-pavement.jpg";
import renovationImage from "@/assets/project-renovation.jpg";

const projects = [
  {
    title: "Bodega Industrial EKI",
    description: "Construcción de estructura de bodega para empresa EKI en el Parque Industrial La Floresta.",
    category: "Obras Civiles",
    location: "Galapa, Atlántico",
    year: "2022-2023",
    image: warehouseImage,
    featured: true,
  },
  {
    title: "Pavimento Parque La Floresta",
    description: "Construcción de pavimentos vía interior del parque industrial con materiales de alta resistencia.",
    category: "Pavimentos",
    location: "Galapa, Atlántico",
    year: "2023",
    image: pavementImage,
  },
  {
    title: "Vivienda Unifamiliar Villa Olímpica",
    description: "Construcción de vivienda unifamiliar de 3 niveles con diseño moderno y funcional.",
    category: "Construcción Residencial",
    location: "Villa Olímpica, Galapa",
    year: "2021",
    image: residentialImage,
  },
  {
    title: "Remodelación Villa Campestre",
    description: "Ampliación y remodelación de 3 niveles, transformación completa de espacios.",
    category: "Remodelaciones",
    location: "Villa Campestre",
    year: "2020",
    image: renovationImage,
  },
];

const Portfolio = () => {
  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 border-l-4 border-primary px-4 py-2">
              <p className="text-primary font-semibold">PORTAFOLIO</p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos{" "}
            <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoce algunos de nuestros proyectos más recientes que demuestran
            nuestra experiencia y compromiso con la excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-scale-in">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`grid ${
                  project.featured ? "md:grid-cols-2" : "grid-cols-1"
                } gap-0`}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      project.featured ? "h-full min-h-[400px]" : "h-[300px]"
                    }`}
                  />
                  {/* Geometric overlay on hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-primary-foreground p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-lg font-semibold">Ver Proyecto</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent
                  className={`p-6 flex flex-col justify-center ${
                    project.featured ? "md:p-12" : ""
                  }`}
                >
                  <h3
                    className={`font-bold mb-3 group-hover:text-primary transition-colors ${
                      project.featured ? "text-3xl" : "text-2xl"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-muted-foreground mb-6 ${
                      project.featured ? "text-lg" : ""
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Geometric corner decoration */}
                  <div className="mt-6 relative">
                    <div className="w-12 h-12 border-4 border-primary/20 absolute -bottom-3 -right-3" />
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "50+", label: "Proyectos Completados" },
            { number: "5+", label: "Años de Experiencia" },
            { number: "100%", label: "Proyectos Exitosos" },
            { number: "24/7", label: "Soporte Técnico" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border-2 border-border hover:border-primary transition-all rounded-sm group"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
