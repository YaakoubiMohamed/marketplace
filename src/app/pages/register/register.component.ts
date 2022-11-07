import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm!: FormGroup;
  error: string ='';

  constructor(private authService: AuthenticationService, private router: Router, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      password: ['', Validators.required],
      cnfpassword: ['', Validators.required],
      adresse: ['', Validators.required],
      grade: ['client'],
      etat: ['actif'],
    })
  }


  register(){
    this.authService.register(this.RegisterForm.value).then(data =>{
      this.router.navigate(['/']);
    }).
    catch(err =>{
        this.error =" email already exist";
    })
  }

}
