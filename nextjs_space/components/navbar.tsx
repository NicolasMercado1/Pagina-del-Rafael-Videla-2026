"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Importamos el componente de optimización de imágenes de Next.js
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import retrato1 from "@/public/imagenes/retrato1.jpeg";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre", label: "Sobre Rafael" },
  { href: "/propuestas", label: "Propuestas" },
  { href: "/unete", label: "Únete" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* Contenedor del avatar optimizado para la imagen con 'relative' y 'overflow-hidden' */}
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-bold text-navy text-lg overflow-hidden relative">
              <Image 
                src={retrato1}
                alt="Retrato de Rafael Videla"
                fill
                sizes="40px"
                className="object-cover"
                priority // Garantiza la carga inmediata por estar en el header principal
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-display font-bold text-lg leading-tight tracking-tight">
                Rafael Videla
              </p>
              <p className="text-gold text-xs font-semibold tracking-widest uppercase">
                Intendente
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks?.map((link: any) => (
              <Link
                key={link?.href ?? ''}
                href={link?.href ?? '/'}
                className="px-4 py-2 text-white/80 hover:text-gold transition-colors text-sm font-medium rounded-md hover:bg-white/10"
              >
                {link?.label ?? ''}
              </Link>
            ))}
            <Link
              href="/unete"
              className="ml-4 px-6 py-2.5 bg-gold text-navy font-bold text-sm rounded-md hover:bg-yellow-400 transition-all hover:shadow-lg"
            >
              ¡Sumate!
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks?.map((link: any) => (
                <Link
                  key={link?.href ?? ''}
                  href={link?.href ?? '/'}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-md transition-colors text-base"
                >
                  {link?.label ?? ''}
                </Link>
              ))}
              <Link
                href="/unete"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 bg-gold text-navy font-bold text-center rounded-md hover:bg-yellow-400 transition-all"
              >
                ¡Sumate!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
