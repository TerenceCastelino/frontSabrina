
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashbordServiceService } from './_serviceDashbord/dashbord.service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  userId!: any;
  nom: string = '';
  prenom: string = '';
  role: string = ''

  constructor(private service: DashbordServiceService, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    // Utilisation de ActivatedRoute.params pour accéder aux paramètres de l'URL
    this.activated.params.subscribe(params => {
      this.userId = params['userId'];
      console.log(parseInt(this.userId));

      // Appel du service pour obtenir les détails de l'utilisateur
      this.service.userDetail(parseInt(this.userId)).subscribe(
        (userDetails) => {
          console.log('Détails de l\'utilisateur pour le tableau de bord', userDetails);
          this.nom = userDetails.nom;
          this.prenom = userDetails.prenom;
          this.role = userDetails.role
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
        }
      );
    });
  }
}
