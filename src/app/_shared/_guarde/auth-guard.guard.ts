// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../_service/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private tokenService: TokenService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Vérifiez si l'utilisateur est authentifié en utilisant le TokenService
    const isAuthenticated = !!this.tokenService.getToken();
    console.log('Is Authenticated:', isAuthenticated);

    if (isAuthenticated) {
      // Si l'utilisateur est authentifié, autorisez l'accès à la route
      return true;
    } else {
      // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
      return this.router.createUrlTree(['/login']);
    }
  }
}

