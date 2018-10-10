import { Categorie } from './categorie';
import { Marque } from './marque';

export class Objet {
  _id: string;
  designation: string;
  categorie: Categorie;
  quantite: number;
  unite: string;
  seuil_alerte: number;
  dangers: string;
  localisation: string;
  commentaire: string;
  reference: string;
  marque: Marque;
  prix: number;
}