export interface Recital {
  id: number;
  fecha: string; // formato YYYY-MM-DD
  lugar: string;
  direccion: string;
  descripcion?: string;
  link_pago: string;
  imagen?: string;
  tickets_button?: boolean;
}

export const RECITALES: Recital[] = [
  {
    id: 1,
    fecha: "2025-06-27",
    lugar: "Casa Marx",
    direccion: "Berutti 902",
    descripcion: "Los temas de siempre y sorpresitas.",
    link_pago: "https://mpago.la/24hVMrk",
    imagen: "/images/recital1.jpg",
    tickets_button: true,
  },
  {
    id: 2,
    fecha: "2025-06-14",
    lugar: "Patio Espiral",
    direccion: "Bolivia 650",
    descripcion: "POLILLA y MARGINADOS. 3 bandas para llenarte de riffs.",
    link_pago: "https://mpago.la/24hVMrk",
    imagen: "/images/recital2.jpg",
    tickets_button: true,
  },
  {
    id: 3,
    fecha: "2024-12-06",
    lugar: "Crisálida Fest",
    direccion: "Moreno 223",
    link_pago: "https://mpago.la/24hVMrk",
    descripcion: "Noche de Máscaras",
    imagen: "/images/recital3.jpg",
  },
];

export const glitchRecitalesTitle = {
  timing: {
    duration: 4000,
    easing: "linear",
  },
  shake: {
    amplitudeX: 0.02,
    amplitudeY: 0.02,
  },
  slice: {
    count: 2,
    velocity: 10,
    minHeight: 0.05,
    maxHeight: 0.05,
  },
};
