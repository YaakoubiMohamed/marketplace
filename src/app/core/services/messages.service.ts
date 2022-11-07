import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  userRef!: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore) {

    this.userRef = db.collection('/message');

  }



  CreateMessage(message: any) {

    return this.db.collection('/message').add(message)

  }



  getMessages() {

    return this.userRef;

  }



  deleteMessage(id: string) {

    return this.db.collection('/message').doc(id).delete();

  }
}
