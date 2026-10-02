import Image from "next/image";
import Link from "next/link";
import { FadeIn, SlideIn, Stagger, StaggerItem } from "@/components/ui/animate";
import { Container } from "@/components/layouts/container";
import { Section } from "@/components/layouts/section";
import { Shield, Building2, Briefcase, Heart, GraduationCap, Leaf } from "lucide-react";
import retrato2 from "@/public/imagenes/retrato2.jpeg"

const propuestas = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Seguridad Pública",
    desc: "Mayor presencia policial, cámaras de vigilancia y programas de prevención del delito para que vivas tranquilo.",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Infraestructura y Obras",
    desc: "Pavimentación, cloacas, agua corriente y modernización de espacios públicos para una ciudad digna.",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Economía Local y Empleo",
    desc: "Apoyo a Pymes, reducción de tasas municipales y capacitación laboral para generar empleo genuino.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Salud",
    desc: "Ampliación de centros de salud, ambulancias modernas y atención integral para todas las edades.",
    color: "bg-red-50 text-red-700 border-red-200",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Educación",
    desc: "Refacción de escuelas, becas municipales y conectividad en todas las aulas para el futuro.",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Medio Ambiente",
    desc: "Reciclaje, arbolado urbano y energías renovables para una ciudad sustentable y saludable.",
    color: "bg-green-50 text-green-700 border-green-200",
  },
];

const stats = [
  { number: "+25", label: "Años de servicio público" },
  { number: "+10.000", label: "Vecinos detrás del cambio" },
  { number: "6", label: "Propuestas concretas" },
  { number: "1", label: "Compromiso con tu ciudad" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/22639498/pexels-photo-22639498/free-photo-of-view-of-buenos-aires-at-night.jpeg"
            alt="Vista nocturna de la ciudad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2463]/80 via-[#0A2463]/70 to-[#0A2463]/90" />
        </div>
        <Container size="lg" className="relative z-10 text-center py-32">
          <FadeIn>
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
              Precandidato a Intendente
            </p>
          </FadeIn>
          <SlideIn from="bottom" delay={0.2}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
              Rafael Videla
            </h1>
          </SlideIn>
          <FadeIn delay={0.4}>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-4 font-light">
              El orden, la experiencia y el progreso que tu ciudad merece.
            </p>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Ex-Jefe de la Policía. Líder comprometido con la seguridad, el desarrollo y el bienestar de cada vecino.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/propuestas"
                className="px-8 py-4 bg-gold text-navy font-bold rounded-md hover:bg-yellow-400 transition-all hover:shadow-xl text-lg"
              >
                Conocé sus propuestas
              </Link>
              <Link
                href="/unete"
                className="px-8 py-4 bg-white/10 text-white border border-white/30 font-bold rounded-md hover:bg-white/20 transition-all text-lg backdrop-blur-sm"
              >
                Únete a la campaña
              </Link>
            </div>
          </FadeIn>
        </Container>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gold rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Bio section */}
      <Section id="bio" className="py-20 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideIn from="left">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl max-w-md mx-auto lg:mx-0">
              <Image 
                src={retrato2} 
                alt="Rafael Videla - Precandidato a Intendente" 
                fill 
                className="object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A2463] to-transparent p-6">
                  <p className="text-gold font-display font-bold text-xl">Rafael Videla</p>
                  <p className="text-white/80 text-sm">Ex-Jefe de la Policía</p>
                </div>
              </div>
            </SlideIn>
            <SlideIn from="right">
              <div>
                <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">Conozca al candidato</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-6">
                  ¿Quién es Rafael Videla?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Rafael Videla es un hombre forjado en el servicio público. Con más de 25 años de carrera en las fuerzas de seguridad, llegó a ser Jefe de la Policía, donde lideró operativos de prevención del delito, modernizó la fuerza y fortaleció el vínculo con la comunidad.
                  </p>
                  <p>
                    Hoy, como precandidato a Intendente por el partido de Luis Petri, pone su experiencia, liderazgo y compromiso al servicio de todos los vecinos. Su visión combina orden, progreso y cercanía para transformar la ciudad desde la gestión.
                  </p>
                  <p>
                    Padre de familia, vecino comprometido y líder natural, Rafael cree que una ciudad segura, moderna y con oportunidades es posible — y está decidido a construirla.
                  </p>
                </div>
                <div className="mt-6 flex gap-4">
                  <Link
                    href="/sobre"
                    className="px-6 py-3 bg-navy text-white font-bold rounded-md hover:bg-[#0d2f7a] transition-all"
                  >
                    Conocer más
                  </Link>
                </div>
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>

      {/* Propuestas */}
      <Section id="propuestas" className="py-20 bg-muted">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">Plataforma</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                Propuestas para tu ciudad
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Seis ejes de trabajo concretos para transformar nuestra ciudad con orden, inversión y compromiso social.
              </p>
            </div>
          </FadeIn>
          <Stagger staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {propuestas?.map((p: any, i: number) => (
                <StaggerItem key={p?.title ?? i}>
                  <Link href="/propuestas" className="block h-full">
                    <div
                      className={`p-6 rounded-lg border ${p?.color ?? ''} h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                    >
                      <div className="mb-4">{p?.icon}</div>
                      <h3 className="font-display font-bold text-lg mb-2">{p?.title ?? ''}</h3>
                      <p className="text-sm opacity-80">{p?.desc ?? ''}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
          <FadeIn delay={0.5}>
            <div className="text-center mt-10">
              <Link
                href="/propuestas"
                className="px-8 py-3 bg-navy text-white font-bold rounded-md hover:bg-[#0d2f7a] transition-all inline-block"
              >
                Ver todas las propuestas
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Stats */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1780672615006-a9f17d5c41a5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8"
            alt="Vista diurna de la ciudad"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0A2463]/90" />
        </div>
        <Container size="lg" className="relative z-10">
          <Stagger staggerDelay={0.15}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats?.map((s: any, i: number) => (
                <StaggerItem key={s?.label ?? i}>
                  <div className="text-center">
                    <p className="font-display text-4xl sm:text-5xl font-bold text-gold mb-2">{s?.number ?? ''}</p>
                    <p className="text-white/70 text-sm">{s?.label ?? ''}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </Container>
      </section>

      {/* Quote */}
      <Section className="py-20 bg-white">
        <Container size="lg">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 text-gold mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <blockquote className="font-display text-2xl sm:text-3xl text-navy font-bold tracking-tight leading-snug mb-6">
                &ldquo;No vengo a hacer promesas vacías. Vengo con experiencia, con un plan concreto y con las manos limpias. Juntos vamos a construir la ciudad que merecemos.&rdquo;
              </blockquote>
              <p className="text-gold font-semibold">— Rafael Videla</p>
              <p className="text-muted-foreground text-sm">Precandidato a Intendente</p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <Container size="lg">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Sumate al cambio
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                Tu participación es fundamental. Podés ser voluntario, difundir las propuestas o colaborar con la campaña. Cada aporte cuenta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/unete"
                  className="px-8 py-4 bg-gold text-navy font-bold rounded-md hover:bg-yellow-400 transition-all text-lg"
                >
                  Quiero ser voluntario
                </Link>
                <Link
                  href="/contacto"
                  className="px-8 py-4 bg-white/10 text-white border border-white/30 font-bold rounded-md hover:bg-white/20 transition-all text-lg"
                >
                  Contactanos
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
