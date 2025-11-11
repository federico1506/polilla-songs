export interface Recital {
  id: number;
  fecha: string; // formato YYYY-MM-DD
  lugar: string;
  direccion: string;
  descripcion?: string;
  imagen?: string;
  tickets_button?: boolean;
}

export const RECITALES: Recital[] = [
  {
    id: 1,
    fecha: "2025-11-15",
    lugar: "Niceto Club",
    direccion: "Pedro Pico 1654",
    descripcion: "Presentación del nuevo disco 'Polilla Cósmica'.",
    imagen: "/images/recital1.jpg",
    tickets_button: true,
  },
  {
    id: 2,
    fecha: "2025-12-02",
    lugar: "Club Paraguay",
    direccion: "Córdoba",
    descripcion: "Show íntimo con versiones acústicas.",
    imagen: "/images/recital2.jpg",
    tickets_button: true,
  },
  {
    id: 3,
    fecha: "2026-01-20",
    lugar: "La Trastienda",
    direccion: "Montevideo",
    descripcion: "Gira verano rioplatense.",
    imagen: "/images/recital3.jpg",
  },
];
