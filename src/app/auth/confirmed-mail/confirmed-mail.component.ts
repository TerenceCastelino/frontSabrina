import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmedMailService } from './_service/confirmed-mail.service';

@Component({
  selector: 'app-confirmed-mail',
  templateUrl: './confirmed-mail.component.html',
  styleUrls: ['./confirmed-mail.component.scss']
})
export class ConfirmedMailComponent implements OnInit {

  urlHache: any

  constructor(private route: ActivatedRoute, private service: ConfirmedMailService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) => {
        const urlHache: any = data
        console.log(urlHache.confirmationHash);



        this.service.confirmEmail(urlHache.confirmationHash).subscribe(
          (response) => {
            console.log('Confirmation successful:', response);
            // Ajoutez ici la logique pour rediriger l'utilisateur ou afficher un message de confirmation

            // Redirigez l'utilisateur vers la page de connexion
            this.router.navigate(['/login']);
          },
          (error) => {
            console.error('Confirmation failed:', error);
            // Ajoutez ici la logique pour afficher un message d'erreur à l'utilisateur
          }
        );

      }
    )


  }

  confirmEmail(): void {
    console.log('recuperation de l email par parametre', this.urlHache);

    if (this.urlHache) {
      console.log('uuuuuuuuuuuuuuuuuuuuuu');


    }
  }

}
//$2b$04$3vYOY5Quby1e5JVjJPYh9.xlOTavohwmRMI.Ap99ccLcOUISeQeKG 
//$2b$04$3vYOY5Quby1e5JVjJPYh9.xlOTavohwmRMI.Ap99ccLcOUISeQeKG