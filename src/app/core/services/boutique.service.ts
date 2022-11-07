import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  constructor(private db: AngularFirestore) { }



  createBoutique(boutique){
    return this.db.collection('boutiques').add(boutique);
  }

  getBoutique(){
    return this.db.collection('boutiques').snapshotChanges();
  }
  
}
