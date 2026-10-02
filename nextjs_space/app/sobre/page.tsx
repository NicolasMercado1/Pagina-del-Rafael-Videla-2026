import Image from "next/image";
import { FadeIn, SlideIn, Stagger, StaggerItem } from "@/components/ui/animate";
import { Container } from "@/components/layouts/container";
import { Section } from "@/components/layouts/section";
import { Shield, Heart, TrendingUp, Users, Scale, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Rafael Videla | Su trayectoria y valores",
  description: "Conocé la trayectoria, los valores y la visión de Rafael Videla, precandidato a Intendente.",
};

const timeline = [
  {
    year: "1989",
    title: "Ingreso a la Fuerza Policial",
    desc: "omenzó su carrera en las fuerzas de seguridad con vocación de servicio y compromiso con la ley.",
  },
  {
    year: "2004",
    title: "Licensiatura en Seguridad Pública",
    desc: "Oriento la actividad academica hacia el plano de las emergencias.",
  },
  {
    year: "2018",
    title: "Ascenso a Comisario Inspector",
    desc: "Tras 32 años de Servicio cumpliendo con las exigencias academicas y de formacion, asciende a esta gerarquia obstentando funciones de jefe de policia",
  },
  {
    year: "2020",
    title: "Paso a Retiro",
    desc: "Despues de 2 años de servicio como jefe de la policia SE retiro cumpliendo la antiguedad necesaria",
  },
  {
    year: "2026",
    title: "Pre-Candidato",
    desc: "Luego de su trayectoria como policia decide involucrarse en politica como pre candidato a intendente de San rafael por el partido de Luis Petri",
  },
];

const valores = [
  { icon: <Shield className="w-7 h-7" />, title: "Seguridad", desc: "Proteger a cada vecino es la prioridad número uno." },
  { icon: <Scale className="w-7 h-7" />, title: "Honestidad", desc: "Transparencia en cada acción y cada peso invertido." },
  { icon: <TrendingUp className="w-7 h-7" />, title: "Progreso", desc: "Una ciudad que avanza con obras, empleo y desarrollo." },
  { icon: <Users className="w-7 h-7" />, title: "Comunidad", desc: "Gobernar escuchando a los vecinos, barrio por barrio." },
  { icon: <Home className="w-7 h-7" />, title: "Familia", desc: "Políticas que cuiden a las familias en todas sus formas." },
  { icon: <Heart className="w-7 h-7" />, title: "Compromiso", desc: "Dedicación total al servicio de los ciudadanos." },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <Container size="lg" className="relative z-10">
          <FadeIn>
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Sobre el candidato</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              La trayectoria de Rafael Videla
            </h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Una vida dedicada al servicio público, la seguridad y el bienestar de los vecinos.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <Section className="py-20 bg-white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">Trayectoria</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                Una carrera de servicio
              </h2>
            </div>
          </FadeIn>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gold/30" />
            <div className="space-y-12">
              {timeline?.map((item: any, i: number) => (
                <SlideIn key={item?.year ?? i} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-white shadow z-10 mt-1" />
                    <div className="ml-12 md:ml-0 md:w-1/2 bg-card p-6 rounded-lg shadow-md border border-border">
                      <span className="text-amber-600 font-bold text-sm">{item?.year ?? ''}</span>
                      <h3 className="font-display font-bold text-navy text-lg mt-1">{item?.title ?? ''}</h3>
                      <p className="text-muted-foreground text-sm mt-2">{item?.desc ?? ''}</p>
                    </div>
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Valores */}
      <Section className="py-20 bg-muted">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">Principios</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                Valores que guían su gestión
              </h2>
            </div>
          </FadeIn>
          <Stagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valores?.map((v: any, i: number) => (
                <StaggerItem key={v?.title ?? i}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4 text-navy">
                      {v?.icon}
                    </div>
                    <h3 className="font-display font-bold text-navy text-lg mb-2">{v?.title ?? ''}</h3>
                    <p className="text-muted-foreground text-sm">{v?.desc ?? ''}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Container>
      </Section>

      {/* Photo gallery */}
      <Section className="py-20 bg-white">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">En la comunidad</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                Siempre cerca de los vecinos
              </h2>
            </div>
          </FadeIn>
          <Stagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StaggerItem>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="https://www.taize.fr/media/variants/front_preview/1200/jpg/fffffffd10000000.jpg?v=56c82759"
                    alt="Reunión comunitaria con vecinos"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="https://static.independent.co.uk/2023/04/18/20/Argentina_Tasers_15826.jpg"
                    alt="Trabajo en seguridad pública"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src="https://www.azuremagazine.com/wp-content/uploads/2025/06/Azure-Ola-Palermo-Buenos-Aires-ODA-Hero.jpg"
                    alt="Espacios verdes de la ciudad"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </StaggerItem>
            </div>
          </Stagger>
        </Container>
      </Section>

      {/* Testimonios */}
      <Section className="py-20 bg-muted">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">Testimonios</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                Lo que dicen los vecinos
              </h2>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
