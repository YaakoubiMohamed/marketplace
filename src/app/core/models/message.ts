import { Utilisateur } from './utilisateur';
export class Message {
    id !: string;
    text !: string;
    date !: string;
    emetteur !: Utilisateur;
    recepteur !: Utilisateur;

    constructor(
      texte:string,
      dateheure?:	string,
      emetteur?:	Utilisateur,
      recepteur?: Utilisateur
  ){
      this.text = texte
      this.date = dateheure
      this.emetteur = emetteur
      this.recepteur = recepteur
  }
}
