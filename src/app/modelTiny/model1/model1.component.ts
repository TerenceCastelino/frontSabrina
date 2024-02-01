import { Component, OnInit } from '@angular/core';
import { ModeltinyService } from '../_service/modeltiny.service';

@Component({
  selector: 'app-model1',
  templateUrl: './model1.component.html',
  styleUrls: ['./model1.component.scss']
})

export class Model1Component implements OnInit {
  nom!: string;
  chemin!: any



  constructor(private service: ModeltinyService) { }

  ngOnInit(): void {
    const idContenu = 1;  // Remplacez par l'ID de contenu approprié

    this.service.getImage(idContenu).subscribe(
      (image) => {
        this.nom = image.nomImage;
        this.chemin = image.chemin
        console.log(this.chemin);

      }
    );
  }

}
