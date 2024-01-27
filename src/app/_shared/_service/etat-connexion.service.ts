import { Injectable } from '@angular/core';
import { TokenService } from './jwt.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode'; // Importez la bibliothèque jwt-decode

@Injectable({
  providedIn: 'root',
})
export class EtatConnexionService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private tokenService: TokenService) { }

  get isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  login(token: string): void {
    this.tokenService.setToken(token);
    this.isAuthenticatedSubject.next(true); // Mettre à jour l'état de connexion
  }

  logout(): void {
    this.tokenService.removeToken();
    this.isAuthenticatedSubject.next(false); // Mettre à jour l'état de connexion
  }

  getUserId(): number | null {
    const token = this.tokenService.getToken();

    if (token) {
      // Ajoutez la logique pour extraire l'ID de l'utilisateur depuis le token
      try {
        const decodedToken: any = jwtDecode(token);
        console.log(decodedToken.role, 'role');

        return decodedToken && decodedToken.userId ? +decodedToken.userId : null;
      } catch (error) {
        console.error('Erreur lors du décodage du token :', error);
        return null;
      }
    }

    return null;
  }
}
