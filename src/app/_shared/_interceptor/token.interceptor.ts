// token.interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../_service/jwt.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) { }

  // Fonction pour intercepter les requêtes sortantes
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupérer le token depuis le service AuthService
    const token = this.tokenService.getToken();

    // Si un token est disponible, l'ajouter aux entêtes de la requête
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Poursuivre le traitement de la requête
    return next.handle(request);
  }
}

