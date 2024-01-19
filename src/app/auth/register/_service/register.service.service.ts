import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../_interface/user.interface';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})

export class RegisterService {



  private apiUrl = `${environment.apiUrl}/authentification/register`

  constructor(private http: HttpClient) { }

  register(userData: UserInterface): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
