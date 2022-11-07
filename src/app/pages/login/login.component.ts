import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  error: string = '';


  constructor(private fb: FormBuilder, private authservice: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm=      new FormGroup({
      email:new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
    })
  }

  login(){
    this.authservice.login(this.loginForm?.value).then(data =>{
      this.router.navigate(['/']);
    }
    ).catch(err=>{

      this.error = 'email or password incorrect'
    })
  }

}
