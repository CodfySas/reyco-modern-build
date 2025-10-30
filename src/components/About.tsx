import { Target, Eye } from "lucide-react";
import blueprintImage from "@/assets/blueprint.jpg";

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 border-l-4 border-primary px-4 py-2">
              <p className="text-primary font-semibold">SOBRE NOSOTROS</p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conoce <span className="text-gradient">CPN Ingeniería</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative animate-slide-in-right">
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-primary/20 hidden md:block" />
            <img
              src={blueprintImage}
              alt="Planos de construcción"
              className="relative rounded-sm shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Nuestra Misión</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Proporcionar soluciones integrales en construcción y mantenimiento, 
                  garantizando calidad, seguridad y satisfacción del cliente mediante 
                  el uso de tecnología de vanguardia y un equipo altamente capacitado.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Nuestra Visión</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ser la empresa líder en construcción y mantenimiento en la región, 
                  reconocida por nuestra excelencia, innovación y compromiso con el 
                  desarrollo sostenible, creando el futuro un diseño a la vez.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-6 animate-scale-in">
          {[
            { title: "Calidad", description: "Excelencia en cada proyecto" },
            { title: "Seguridad", description: "Protocolos certificados" },
            { title: "Innovación", description: "Tecnología de punta" },
            { title: "Compromiso", description: "Cumplimiento garantizado" },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-6 border-2 border-border hover:border-primary transition-all rounded-sm group"
            >
              <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-4 group-hover:scale-150 transition-transform" />
              <h4 className="font-bold text-xl mb-2">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
