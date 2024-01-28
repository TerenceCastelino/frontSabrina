import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvoisMailPerduService {
  private apiUrl = `${environment.apiUrl}/authentification/resetPassword`;
  constructor(private http: HttpClient) { }

  envoisMail(userData: any): Observable<any> {
    return this.http.put(this.apiUrl, userData)
  }
}
