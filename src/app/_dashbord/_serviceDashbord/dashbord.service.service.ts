import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashbordServiceService {

  private Url = `${environment.apiUrl}/utilisateur/`;

  constructor(private http: HttpClient) { }


  userDetail(userId: number): Observable<any> {
    return this.http.get(`${this.Url}${userId}`);


  }
}
