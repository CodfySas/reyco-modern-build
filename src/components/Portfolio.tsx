import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import warehouseImage from "@/assets/project1.png";
import warehouse2Image from "@/assets/project2.png";
import residentialImage from "@/assets/project4.jpg";
import pavementImage from "@/assets/project3.png";
import renovationImage from "@/assets/project-renovation.jpg";

const projects = [
  {
    title: "Vivienda Residencial Belamar",
    description: "Construcción de vivienda de 2 pisos con diseño moderno y funcional.",
    category: "Construcción Residencial",
    location: "Tubara, Atlántico",
    year: "2025",
    image: residentialImage,
  },
  {
    title: "Bodega Maxiagro Baranoa",
    description: "Construcción de estructura de bodega para empresa Maxiagro en la via de la cordialidad",
    category: "Obras Civiles",
    location: "Baranoa, Atlántico",
    year: "2022-2023",
    image: warehouseImage,
  },
  {
    title: "Bodega Industrial EKI",
    description: "Construcción de estructura de bodega para empresa EKI en el Parque Industrial La Floresta.",
    category: "Obras Civiles",
    location: "Galapa, Atlántico",
    year: "2022-2023",
    image: warehouse2Image,
    featured: false,
  },
  {
    title: "Pavimento Parque La Floresta",
    description: "Construcción de pavimentos vía interior del parque industrial con materiales de alta resistencia.",
    category: "Pavimentos",
    location: "Galapa, Atlántico",
    year: "2023",
    image: pavementImage,
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
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
