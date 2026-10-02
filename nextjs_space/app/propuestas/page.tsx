import { FadeIn, SlideIn, Stagger, StaggerItem } from "@/components/ui/animate";
import { Container } from "@/components/layouts/container";
import { Section } from "@/components/layouts/section";
import { Shield, Building2, Briefcase, Heart, GraduationCap, Leaf, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propuestas | Rafael Videla Intendente",
  description: "Conocé las 6 propuestas concretas de Rafael Videla para transformar tu ciudad: seguridad, infraestructura, economía, salud, educación y medio ambiente.",
};

const propuestas = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Seguridad Pública",
    color: "border-l-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    desc: "Como ex-Jefe de la Policía, Rafael conoce de primera mano los desafíos de la seguridad ciudadana. Su plan integral aborda la prevención, el uso correcto de la tecnología y la cercanía con los vecinos para construir un San Rafael mas seguro.",
    paragraph2: "La seguridad no es solo represión: es iluminación en cada esquina, cámaras inteligentes en puntos estratégicos y una policía comunitaria que conoce a cada vecino. Es prevenir antes que lamentar.",
    paragraph3: "Ademas se creara un cuerpo de preventores, sistema de alarmas comunitarias y otros elementos tecnologicos",
    points: [
      "Instalar nuevas cámaras de vigilancia con monitoreo 24/7",
      "Plan de iluminación LED en todas las calles y plazas",
      "Coordinación permanente con fuerzas provinciales y federales",
      "Desrramado de arboles para tener mayor visibilidad para las camaras",
      "Creacion de un cuerpo de preventores",
      "Creacion de un centro de monitoreo donde se organizaran los puntos anteriores"

    ],
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Infraestructura y Obras",
    color: "border-l-amber-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    desc: "Una ciudad moderna necesita infraestructura de calidad. El plan de obras contempla las necesidades urgentes de ciudad y distritos de San Rafael: desde el asfalto hasta las redes de agua, gas y cloacas que los vecinos esperan hace años.",
    paragraph2: "Cada obra será planificada con participación vecinal. Las zonas más postergados tendrán prioridad, porque es gobernar con equilibrar y ser justos con los recursos públicos.",
    paragraph3: "Se hara una modernización de los edificios municipales, parques y plazas y una digitalizacion de los tramites municipales",
    points: [
      "Plan de pavimentación segun necesidades",
      "Extensión de red de cloacas, agua corriente y gas",
      "Remodelación de plazas y espacios públicos",
      "Modernización de edificios municipales",
      "Nuevas luminarias LED en toda la ciudad y distritos",
    ],
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Economía Local y Empleo",
    color: "border-l-emerald-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    desc: "El motor de una ciudad son sus comercios, sus emprendedores y sus trabajadores. Vamos a crear las condiciones para que invertir, producir y trabajar en nuestra ciudad sea más fácil y más rentable como la Reducción Y eliminacion de algunas tasas municipales, epecialmente las que impiden el desarrollo comercial como el impuesto a las grandes marcas",
    paragraph2: "La reducción de tasas municipales, la simplificación de trámites y la modernizacion del parque industrial con servicios aduaneros y de transpoerte considerando que san rafael esta inserto en el corredor bioceanico serán los pilares de una economía local pujante que genere empleo de calidad.",
    paragraph3: "Los jóvenes tendrán acceso a programas de capacitación en nuevas tecnologias como Inteligencia Artificial,robotica y pre universitario para carreras como medicina y otras, porque el futuro del empleo se construye hoy.",
    points: [
      "Reducción Y eliminacion de algunas tasas municipales",
      "Modernizacion del parque industrial con servicios incluidos",
      "Ventanilla única digital para trámites municipales",
      "gestión de microcréditos para emprendedores y tecnificacion en el agro, en direccion a un polo horticola",
      "Ferias y mercados locales permanentes",
      "Centro de capacitación laboral y tecnológica",
    ],
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Salud",
    color: "border-l-red-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    desc: "La salud pública es un derecho fundamental. Vamos a fortalecer los centros de atención primaria, mejorar las ambulancias y garantizar que cada vecino tenga acceso a atención médica de calidad, cerca de su barrio.",
    paragraph2: "La salud mental será una prioridad: crearemos centros de escucha y acompañamiento psicológico, especialmente para jóvenes y adultos mayores, los sectores más vulnerables.",
    paragraph3: "Además, implementaremos un plan integral de vacunación y campañas de prevención de enfermedades crónicas, con un enfoque especial en los barrios más alejados.",
    points: [
      "Ampliación y mejora de 15 Centros de Atención Primaria (CAPS)",
      "Renovación de la flota de ambulancias",
      "Plan municipal de salud mental y adicciones",
      "Programa de atención domiciliaria para adultos mayores",
      "Campañas de vacunación y prevención permanentes",
      "Equipamiento tecnológico en centros de salud",
    ],
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Educación",
    color: "border-l-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    desc: "La educación es el camino más seguro al progreso. Desde el municipio vamos a trabajar para que cada escuela tenga las condiciones dignas que nuestros chicos merecen y que los docentes necesitan.",
    paragraph2: "El deporte escolar y las actividades artísticas serán fomentados como herramientas de inclusión y desarrollo integral de los jóvenes.",
    points: [
      "Becas municipales para estudiantes destacados",
      "Amplacion de programa de deporte escolar y actividades extraescolares",
      "Capacitación tecnológica para docentes",
    ],
  },
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "Medio Ambiente",
    color: "border-l-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    desc: "Una ciudad sustentable es una ciudad con futuro. Vamos a implementar políticas ambientales serias: desde el reciclaje hasta las energías renovables, pasando por el cuidado del arbolado urbano.",
    paragraph2: "La recolección de residuos será más eficiente y la separación en origen se promoverá con incentivos reales para los vecinos que colaboren con el reciclaje.",
    paragraph3: "El control de efluentes industriales y la protección de los recursos hídricos serán fiscalizados con transparencia y firmeza.",
    points: [
      "Sistema de recolección diferenciada en toda la ciudad",
      "Planta de reciclaje municipal moderna",
      "Plantación de 10.000 nuevos árboles en 4 años",
      "Instalación de paneles solares en edificios públicos",
      "Control estricto de efluentes industriales",
      "Creación de 5 nuevos parques y espacios verdes",
    ],
  },
];

export default function PropuestasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <Container size="lg" className="relative z-10">
          <FadeIn>
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Plataforma 2025</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Propuestas para tu ciudad
            </h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Seis ejes de trabajo concretos, medibles y realizables. Porque gobernar es hacer, no prometer.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Propuestas */}
      <Section className="py-16 bg-white">
        <Container size="lg">
          <div className="space-y-16">
            {propuestas?.map((p: any, i: number) => (
              <SlideIn key={p?.title ?? i} from={i % 2 === 0 ? "left" : "right"} delay={0.1}>
                <div
                  id={p?.title?.toLowerCase?.()?.replace?.(/\s+/g, '-') ?? `propuesta-${i}`}
                  className={`border-l-4 ${p?.color ?? ''} ${p?.bgColor ?? ''} rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${p?.iconColor ?? ''}`}>{p?.icon}</div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                      {p?.title ?? ''}
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                    <p>{p?.desc ?? ''}</p>
                    <p>{p?.paragraph2 ?? ''}</p>
                    <p>{p?.paragraph3 ?? ''}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-3">Medidas concretas:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(p?.points ?? [])?.map?.((point: string, j: number) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{point ?? ''}</span>
                        </li>
                      )) ?? []}
                    </ul>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
