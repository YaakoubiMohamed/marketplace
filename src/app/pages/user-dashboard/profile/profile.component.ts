import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UtilisateurService } from '../../../core/services/utilisateur.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ProfileForm!: FormGroup
  user: any;
  image!: string;

  constructor(private fb:FormBuilder, private service: UtilisateurService,private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userInfo')!);
    console.log(this.user);

    this.ProfileForm = this.fb.group({
      nom:[this.user.nom],
      prenom:[this.user.prenom],
      email:[this.user.email],
      telephone:[this.user.telephone],
      adresse:[this.user.adresse],
      photo:[this.user.photo],
      id:[this.user.id]
    })
  }

  get f() { return this.ProfileForm.controls }


  save(){
    console.log('ok');
    this.ProfileForm.controls['photo'].setValue(this.image)
    this.user = this.ProfileForm.value;
    localStorage.setItem('userInfo',JSON.stringify(this.ProfileForm.value));
    this.service.updateUser(this.ProfileForm.value)
  }

  upload(event: any) {
    console.log(event.target.files);
    const name = event.target.files[0].name
    const path = `/images/${name}`
    const storageRef = this.storage.ref('/images/' + name)
    console.log(storageRef)
    const uploadTask = this.storage.upload(path, event.target.files[0])
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log(downloadURL)
          this.image = downloadURL
        })
      })
    ).subscribe()
  }

}
