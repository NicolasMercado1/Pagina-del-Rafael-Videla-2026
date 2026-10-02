"use client";

import { useState } from "react";
import { FadeIn, SlideIn } from "@/components/ui/animate";
import { Container } from "@/components/layouts/container";
import { Section } from "@/components/layouts/section";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e?.preventDefault?.();
    setSubmitted(true);
    toast?.success?.("¡Mensaje enviado! Te responderemos a la brevedad.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">Hablemos</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Contacto
            </h1>
            <p className="text-white/70 max-w-2xl text-lg">
              Tenemos las puertas abiertas. Escribinos por correo o whatsapp.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Contacto */}
      <Section className="py-16 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SlideIn from="right">
              <div className="space-y-6">
                <div>
                  <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">Información</p>
                  <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
                    Datos de contacto
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">Teléfono</h3>
                      <p className="text-muted-foreground text-sm" suppressHydrationWarning>+54 260 457-2682</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">Email</h3>
                      <p className="text-muted-foreground text-sm" suppressHydrationWarning>rafaelvidela.candidato@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
