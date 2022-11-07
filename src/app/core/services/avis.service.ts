import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Avis } from '../models/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  userRef!: AngularFirestoreCollection<Avis>;

  constructor(private db: AngularFirestore) {

    this.userRef = db.collection('/avis');

  }



  CreateAvis(avis: any) {

    return this.db.collection('/avis').add(avis)

  }



  getAvis() {

    return this.userRef;

  }



  deleteAvis(id: string) {

    return this.db.collection('/avis').doc(id).delete();

  }



  modifyAvis(id: string, avis: any) {

    return this.db.collection('/avis').doc(id).update(avis);

  }

}
