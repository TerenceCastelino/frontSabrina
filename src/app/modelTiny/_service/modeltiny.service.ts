import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeltinyService {

  private Url = `${environment.apiUrl}/image/idContenu/`;

  constructor(private http: HttpClient) { }

  getImage(idContenu: number): Observable<any> {
    // Ajoutez le modèle comme paramètre de requête
    return this.http.get(`${this.Url}${idContenu}`);
  }

}