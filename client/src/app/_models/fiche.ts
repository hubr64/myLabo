import { Categorie } from './categorie';
import { Ficheobjet } from './ficheobjet';

export class Fiche {
  _id: string;
  nom: string;
  description: string;
  protocole: string;
  categorie: Categorie;
  objets_professeur: Ficheobjet[];
  objets_eleve: Ficheobjet[];
}