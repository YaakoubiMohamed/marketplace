import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { SousCategorie } from '../models/sous-categorie';

@Injectable({
  providedIn: 'root'
})
export class SousCategorieService {

  userRef!: AngularFirestoreCollection<SousCategorie>;

  constructor(private db: AngularFirestore) {

    this.userRef = db.collection('/sous-categorie');

  }



  CreateSousCategory(category: any) {

    return this.db.collection('/sous-categorie').add(category)

  }



  getSousCategories() {

    return this.userRef;

  }



  deleteSousCategory(id: string) {

    return this.db.collection('/sous-categorie').doc(id).delete();

  }



  modifySousCategory(id: string, category: any) {

    return this.db.collection('/sous-categorie').doc(id).update(category);

  }

}