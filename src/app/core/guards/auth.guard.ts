import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private authFackservice: AuthfakeauthenticationService
    ) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.authService.isLoggedIn);
      if (this.authService.isLoggedIn == false) {
        window.alert('Accès refusé, connexion requise pour accéder à cette page !');
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
      }
      return true;
    }
}
