"use client";

import { useState } from "react";
import { FadeIn, SlideIn } from "@/components/ui/animate";
import { Container } from "@/components/layouts/container";
import { Section } from "@/components/layouts/section";
import { Users, Heart, Share2, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const formas = [
  { icon: <Users className="w-6 h-6" />, title: "Voluntario en el barrio", desc: "Recorré tu zona llevando las propuestas puerta a puerta." },
  { icon: <Share2 className="w-6 h-6" />, title: "Difusión en redes", desc: "Compartí contenidos de la campaña en tus redes sociales." },
  { icon: <Heart className="w-6 h-6" />, title: "Donaciones", desc: "Tu aporte económico ayuda a financiar la campaña de forma transparente." },
];

export default function UnirsePage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    barrio: "",
    colaboracion: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault?.();
    setSubmitted(true);
    toast?.success?.("¡Gracias por sumarte! Te contactaremos pronto.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e?.target?.name ?? '';
    const value = e?.target?.value ?? '';
    setFormData((prev: any) => ({ ...(prev ?? {}), [name]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <Container size="lg" className="relative z-10">
          <FadeIn>
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Participá</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Sumate a la campaña
            </h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Tu participación hace la diferencia. Hay muchas formas de colaborar.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Formas de participar */}
      <Section className="py-16 bg-muted">
        <Container size="lg">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-navy tracking-tight">
                ¿Cómo podés colaborar?
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formas?.map((f: any, i: number) => (
              <FadeIn key={f?.title ?? i} delay={i * 0.15}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 text-gold">
                    {f?.icon}
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-2">{f?.title ?? ''}</h3>
                  <p className="text-muted-foreground text-sm">{f?.desc ?? ''}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
