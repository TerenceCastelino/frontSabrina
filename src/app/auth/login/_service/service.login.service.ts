import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiUrl}/authentification/login`;

  constructor(private http: HttpClient) { }

  login(loginData: any): Observable<any> {
    return this.http.post(this.apiUrl, loginData);
  }

  userDetail(userId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/utilisateur/${userId}`);
  }

  renvoisMail(emailUtilisateur: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/authentification/envoisMail/${emailUtilisateur}`, {});
  }
}
