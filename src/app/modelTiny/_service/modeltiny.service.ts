import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Image } from '../_interface/image';

// Définissez un type pour l'objet image


@Injectable({
  providedIn: 'root'
})
export class ModeltinyService {

  private Url = `${environment.apiUrl}/image/model1/idContenu/`;
  private Url2 = `${environment.apiUrl}/image/model2/idContenu/`;
  private urlBase1 = `${environment.apiUrl}/image/model1`;
  private urlBase2 = `${environment.apiUrl}/image/model2`;

  constructor(private http: HttpClient) { }

  getImageModel1(idContenu: number): Observable<Image> {
    return this.http.get<Image>(`${this.Url}${idContenu}`).pipe(
      map(image => {
        console.log(image.chemin);

        // Normalisez le chemin de l'image en utilisant des barres obliques normales
        // image.chemin = image.chemin.replace(/\\/g, '/');
        console.log('Image from service:', image);
        return image;
      })
    );
  }



  getImageModel2(idContenu: number): Observable<Image> {
    return this.http.get<Image>(`${this.Url2}${idContenu}`).pipe(
      map(image => {
        // Normalisez le chemin de l'image en utilisant des barres obliques normales
        // image.chemin = image.chemin.replace(/\\/g, '/');
        console.log('Image from service:', image);
        return image;
      })
    );
  }




  getAllImagemodel1(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.urlBase1}`)
  }
  getAllImagemodel2(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.urlBase2}`)
  }
}




