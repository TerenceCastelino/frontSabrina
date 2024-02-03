import { Component, OnInit } from '@angular/core';
import { ModeltinyService } from '../modelTiny/_service/modeltiny.service';
import { Image } from '../modelTiny/_interface/image';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nom1!: string;
  nom2!: string;
  chemin: string = "http://localhost:3000/";
  url1!: string
  url2!: string

  constructor(private service: ModeltinyService) { }

  ngOnInit(): void {
    const idContenu = 4;  // Remplacez par l'ID de contenu approprié
    const idContenu2 = 5
    this.service.getImageModel1(idContenu).subscribe(
      (image) => {
        console.log('Image in component:', image);
        this.nom1 = image.nomImage;
        this.url1 = image.chemin

      }
    );
    this.service.getImageModel2(idContenu2).subscribe(
      (image) => {
        console.log('Image in component:', image);
        this.nom2 = image.nomImage;
        this.url2 = image.chemin

      }
    );


  }
}
