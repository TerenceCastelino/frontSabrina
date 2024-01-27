import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPassewordService {
  private apiUrl = 'http://localhost:3000/api/authentification/resetPassword';

  constructor(private http: HttpClient) { }

  // Modification pour prendre en compte le paramètre urlResetPasswordHash
  resetPassword(urlResetPasswordHash: string, passeword: string): Observable<any> {
    console.log('je suis la 1');

    // Ajoute le paramètre urlResetPasswordHash à l'URL de l'API
    const apiUrlWithParam = `${this.apiUrl}/${urlResetPasswordHash}`;
    console.log('je suis la 2', apiUrlWithParam);

    // Crée un objet payload avec les informations nécessaires
    const payload = { passeword };
    console.log('je suis la 3', payload);



    // Utilise le service HttpClient pour envoyer une requête HTTP PUT à l'URL de l'API avec le payload
    return this.http.put(apiUrlWithParam, payload);
  }
}
