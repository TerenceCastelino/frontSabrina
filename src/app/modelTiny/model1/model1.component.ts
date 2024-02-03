// model1.component.ts
import { Component, OnInit } from '@angular/core';
import { ModeltinyService } from '../_service/modeltiny.service';
import { Image } from '../_interface/image';

@Component({
  selector: 'app-model1',
  templateUrl: './model1.component.html',
  styleUrls: ['./model1.component.scss']
})
export class Model1Component implements OnInit {

  constructor(private service: ModeltinyService) { }

  nom!: string;
  chemin: string = "http://localhost:3000/";
  images: Image[] = [];
  cheminUrls: string[] = []

  ngOnInit(): void {
    const idContenu = 3;  // Remplacez par l'ID de contenu approprié

    this.service.getImageModel1(idContenu).subscribe(
      (image) => {
        console.log('Image in component:', image);
        this.nom = image.nomImage;
        // this.chemin = this.chemin + image.chemin; // Modification ici
        console.log(this.chemin);
      }
    );

    // Récupérer toutes les images
    this.service.getAllImagemodel1().subscribe(
      (images) => {
        // console.log(images);
        this.images = images;
        // console.log(this.images);

        this.cheminUrls = this.images.map(images => images.chemin); // Modification ici
        console.log(this.cheminUrls);


      }
    );
  }
}
