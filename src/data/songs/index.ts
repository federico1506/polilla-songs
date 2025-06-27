import type { Song } from './te-encontrare';
import { teEncontrare } from './te-encontrare';
import { polilla } from './polilla';
import { desEncontrar } from './des-encontrar';
import { nexo } from './nexo';
import { elEcoDeTuVoz } from './el-eco-de-tu-voz';
import { floresRojas } from './flores-rojas';
import { abismos } from './abismos';

export type { Song };
export { teEncontrare, polilla, desEncontrar, nexo, elEcoDeTuVoz, floresRojas, abismos };

export const allSongs = [
  teEncontrare,
  polilla,
  desEncontrar,
  nexo,
  elEcoDeTuVoz,
  floresRojas,
  abismos
]; 