import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  constructor(private afs: AngularFirestore) { }

  readFavoris(id:string){
    return this.afs.collection('favoris', (ref) => ref.where("client.id", "==", id)).snapshotChanges();
  }

  createFavoris(article: any){
    return this.afs.collection('favoris').add(article);
  }

  deleteFavoris(id: any){
    return this.afs.collection('favoris').doc(id).delete();
  }
}
