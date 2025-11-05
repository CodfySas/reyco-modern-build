import { Target, Eye } from "lucide-react";
import blueprintImage from "@/assets/blueprint.jpg";

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-[#050527] border-y-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-white/10 border-l-4 border-white px-4 py-2">
              <p className="text-white font-semibold">SOBRE NOSOTROS</p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Conoce <span className="">CPN Ingeniería S.A.S</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative animate-slide-in-right">
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-white/20 hidden md:block" />
            <img
              src={blueprintImage}
              alt="Planos de construcción"
              className="relative rounded-sm shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600/10 rounded-sm flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Nuestra Misión</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  CPN ingeniería s.a.s se compromete a generar un impacto positivo en la ejecución de obras y proyectos, con un enfoque de responsabilidad social y productiva, a través de la búsqueda de la calidad en cada proyecto, teniendo en cuenta los valores corporativos y la organización empresarial que son sus socios y funcionarios apliquen para tal fin, su beneficio de sus clientes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600/10 rounded-sm flex items-center justify-center">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Nuestra Visión</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  CPN ingenierías s.a.s tiene como objetivo para el año 2032, ser reconocidos como una empresa líder en la costa atlántica, por sus servicios de consultoría, construcciones, asesorías, interventorías en ingeniería, por su alta calidad y en la búsqueda de la innovación que permita el desarrollo de la región.
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
              className="text-center p-6 border-2 border-border hover:border-primary transition-all rounded-sm group text-white"
            >
              <div className="w-8 h-8 bg-primary rounded-full mx-auto mb-4 group-hover:scale-150 transition-transform flex items-center justify-center font-bold">{index+1}</div>
              <h4 className="font-bold text-xl mb-2">{value.title}</h4>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
