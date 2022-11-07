import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    constructor(
        public afAuth: AngularFireAuth,
        private router : Router,
        private db: AngularFirestore
        // public http: HttpClient
    ) {
        afAuth.authState.subscribe(user =>{
            if(user){
                localStorage.setItem('user', JSON.stringify(user))
                // console.log(JSON.stringify(user)!)
                // console.log(user);
                // localStorage.setItem('nom', 'ahmed')
            }
            else {
              localStorage.removeItem('user');
            }
        })
    }

    get isLoggedIn(): boolean {
      // const a=5;
      // console.log("a")
      // const nom = localStorage.getItem('nom');
      const user = JSON.parse(localStorage.getItem('user')!);
      console.log(localStorage.setItem('user', JSON.stringify(user)))
      console.log(user);
      if(user)
        return true
      else
        return false
      // return user !== 'null' ? true : false;
    }


    login(user: any) {
        return this.afAuth.signInWithEmailAndPassword(user.email, user.password).then((result) =>{
            this.setUser(result.user?.uid)
        })
    }

    setUser(uid: any){
        console.log(uid);
        return this.db.collection('users').doc(uid).get().subscribe((doc)=>{
            console.log(doc.data());
            // let user:any;
            // user = doc.data();
            // user.id = uid;
            localStorage.setItem('userInfo',JSON.stringify(doc.data()))
        });

    }


    logout(){
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('userInfo');
            localStorage.clear();
            this.router.navigate(['/'])
        })
    }


    resetPassword(email: string){
        console.log(email)
        return this.afAuth.sendPasswordResetEmail(email);
    }


    changePassword(token : string, newpassword: string){
        return this.afAuth.confirmPasswordReset(token,newpassword)
    }

    register(user:any){
        return this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then((result) =>{
            this.createUser(user,result?.user?.uid)
        })
    }

    createUser(data:any,uid:any){
      let user:any;
            user = data;
            user.id = uid;
        this.db.collection('users').doc(uid).set(user);
    }


}

