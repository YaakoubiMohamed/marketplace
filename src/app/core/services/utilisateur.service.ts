import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  userRef!: AngularFirestoreCollection<Utilisateur>;

  constructor(private db: AngularFirestore) {

    this.userRef = db.collection('/users');

  }



  // CreateUser(users: any) {

  //   return this.db.collection('/users').add(users)

  // }



  getUsers() {

    return this.userRef;

  }



  deleteUser(id: string) {

    return this.db.collection('/users').doc(id).delete();

  }

  updateUser(user:any) {

    return this.db.collection('/users').doc(user.id).update(user);

  }



  acceptUser(id: string, users: any) {

    return this.db.collection('/users').doc(id).update(users);

  }


  bloqueUser(id: string, users: any) {

    return this.db.collection('/users').doc(id).update(users);

  }

  debloqueUser(id: string, users: any) {

    return this.db.collection('/users').doc(id).update(users);

  }



}
