// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './_service/service.login.service';
import { Router } from '@angular/router';
import { TokenService } from '../../_shared/_service/jwt.service';
import { EtatConnexionService } from 'src/app/_shared/_service/etat-connexion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = 'Veuillez confirmer votre email depuis votre boîte mail.';
  booleanConfirmed: boolean = false;
  emailUtilisateur!: string | null;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    private etatConnexion: EtatConnexionService
  ) {
    this.loginForm = this.fb.group({
      emailUtilisateur: [null, [Validators.required, Validators.email]],
      motsDePasse: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.emailUtilisateur = this.route.snapshot.paramMap.get('emailUtilisateur');
    console.log('Récupération de l\'email par paramètre', this.emailUtilisateur);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
      this.loading = true;

      this.service.login(userData).subscribe(
        (response) => {
          const userId = response.idUtilisateur;
          console.log(userId);

          const token = response.token;
          console.log(token);


          // Stockez le token dans le service TokenService
          this.tokenService.setToken(token);

          // Mettez à jour l'état de connexion
          this.etatConnexion.login(token);



          // Ajoutez un délai de 1 seconde avant de poursuivre
          setTimeout(() => {
            this.service.userDetail(userId).subscribe(
              (userDetails) => {
                if (userDetails.emailConfirme === false) {
                  this.booleanConfirmed = true;
                  console.log("l'email n'est pas confirmé ", userDetails.emailConfirme);
                } else {
                  this.booleanConfirmed = false;

                  // Redirection vers une autre page (à décommenter et personnaliser)
                  this.router.navigate([`dashboard/${userId}`]);
                }

                this.loading = false;
              }
            );
          }, 1000); // 1000 millisecondes équivalent à 1 seconde
        },
        (error) => {
          console.error("Erreur lors de l'enregistrement:", error);
          this.loading = false;
        }
      );
    }
  }

  click(): void {
    console.log(this.emailUtilisateur);

    if (this.emailUtilisateur) {
      this.loading = true;

      this.service.renvoisMail(this.emailUtilisateur).subscribe(
        (response) => {
          console.log('Email renvoyé avec succès:', response);
          // Ajoutez ici la logique pour informer l'utilisateur que l'email a été renvoyé
          this.loading = false;
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'email:", error);
          this.loading = false;
        }
      );
    }
  }
  forgotPassword(): void {
    // Logique pour gérer le "Mot de passe oublié"
    // Vous pouvez rediriger l'utilisateur vers une page de réinitialisation du mot de passe, par exemple
    // Ou afficher un modèle de réinitialisation du mot de passe, selon vos besoins
  }
}
