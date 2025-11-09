export interface Recital {
  id: number;
  fecha: string; // formato YYYY-MM-DD
  lugar: string;
  ciudad: string;
  descripcion?: string;
  imagen?: string;
}

export const RECITALES: Recital[] = [
  {
    id: 1,
    fecha: "2025-11-15",
    lugar: "Niceto Club",
    ciudad: "Buenos Aires",
    descripcion: "Presentación del nuevo disco 'Polilla Cósmica'.",
    imagen: "/images/recital1.jpg",
  },
  {
    id: 2,
    fecha: "2025-12-02",
    lugar: "Club Paraguay",
    ciudad: "Córdoba",
    descripcion: "Show íntimo con versiones acústicas.",
    imagen: "/images/recital2.jpg",
  },
  {
    id: 3,
    fecha: "2026-01-20",
    lugar: "La Trastienda",
    ciudad: "Montevideo",
    descripcion: "Gira verano rioplatense.",
    imagen: "/images/recital3.jpg",
  },
    {
    id: 3,
    fecha: "2026-01-20",
    lugar: "La Trastienda",
    ciudad: "Montevideo",
    descripcion: "Gira verano rioplatense.",
    imagen: "/images/recital3.jpg",
  },

];
