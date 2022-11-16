import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  userRef!: AngularFirestoreCollection<Categorie>;

  constructor(private db: AngularFirestore) {

    this.userRef = db.collection('/categorie');

  }



  CreateCategory(category: any) {

    return this.db.collection('/categorie').add(category)

  }



  getCategories() {

    return this.db.collection('/categorie').snapshotChanges();

  }



  deleteCategory(id: string) {

    return this.db.collection('/categorie').doc(id).delete();

  }



  modifyCategory(id: string, category: any) {

    return this.db.collection('/categorie').doc(id).update(category);

  }

}
