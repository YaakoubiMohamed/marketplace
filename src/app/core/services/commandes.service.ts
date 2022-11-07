import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  userRef!: AngularFirestoreCollection<Commande>;

  constructor(private db: AngularFirestore) {

    this.userRef = db.collection('/commandes');

  }

  getCommandes(id:string) {

    return this.db.collection('commandes', (ref) => ref.where("client.id", "==", id)).snapshotChanges();

  }

  createCommande(commande:any){
    this.db.collection('commandes').add(commande)
  }
}
