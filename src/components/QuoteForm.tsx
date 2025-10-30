import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import maintenanceImage from "@/assets/maintenance.jpg";

const QuoteForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="cotizacion" className="py-24 bg-geometric-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 border-l-4 border-primary px-4 py-2">
              <p className="text-primary font-semibold">CONTÁCTANOS</p>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solicita tu{" "}
            <span className="text-gradient">Cotización Gratuita</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te enviaremos una cotización detallada sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary/20" />
            <img
              src={maintenanceImage}
              alt="Profesional de mantenimiento"
              className="relative rounded-sm shadow-2xl w-full h-full object-cover"
            />
          </div>

          {/* Form Side */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-sm border-2 border-border shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Juan Pérez"
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+57 300 123 4567"
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  required
                  className="border-2 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Servicio de Interés *</Label>
                <Select name="service" required>
                  <SelectTrigger className="border-2 focus:border-primary">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="obras-civiles">Obras Civiles</SelectItem>
                    <SelectItem value="mantenimiento">Mantenimiento General</SelectItem>
                    <SelectItem value="construccion">Construcción Residencial</SelectItem>
                    <SelectItem value="remodelacion">Remodelaciones</SelectItem>
                    <SelectItem value="pavimentos">Pavimentos</SelectItem>
                    <SelectItem value="consultoria">Diseño y Consultoría</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Descripción del Proyecto *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto, ubicación, plazos estimados, etc."
                  required
                  rows={5}
                  className="border-2 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-dark text-lg py-6 group"
              >
                {loading ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Solicitud
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Campos obligatorios. Responderemos en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
