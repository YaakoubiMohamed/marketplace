import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  userRef!: AngularFirestoreCollection<Article>;


  constructor(private db: AngularFirestore) {

    // this.userRef = db.collection('/article').snapshotChanges();

  }



  CreateArticle(article: any) {

    return this.db.collection('/article').add(article)

  }


  getArticlesByCategory(id:string){
    return this.db.collection('article',(ref) => ref.where("id_category", "==", id)).snapshotChanges();
  }

  getArticles() {

    return this.db.collection('/article').snapshotChanges();

  }


  getArticle(id: any){
    return this.db.collection('article').doc(id).snapshotChanges();
  }



  deleteArticle(id: string) {

    return this.db.collection('/article').doc(id).delete();

  }

  modifyArticle(id: string, souscategory: any) {

    return this.db.collection('/article').doc(id).update(souscategory);

  }
}
