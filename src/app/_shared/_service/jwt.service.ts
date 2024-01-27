// // token.service.ts

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenKey = 'auth_token';

  // Méthode pour définir le token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Méthode pour récupérer le token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Méthode pour supprimer le token
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}

