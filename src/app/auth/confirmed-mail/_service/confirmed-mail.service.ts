import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ConfirmedMailService {
  private apiUrl = `${environment.apiUrl}/authentification/confirmation-email/`

  constructor(private http: HttpClient) { }

  confirmEmail(confirmationHash: string): Observable<any> {
    const url = `${this.apiUrl}${confirmationHash}`;
    return this.http.put(url, {});
  }
}

