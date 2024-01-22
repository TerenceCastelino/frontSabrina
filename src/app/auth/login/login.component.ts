// Importation des modules nécessaires depuis Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Module pour récupérer les paramètres de l'URL
import { LoginService } from './_service/service.login.service'; // Service de gestion de l'authentification

// Définition du composant Angular
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Déclaration des variables membres
  loginForm: FormGroup; // Formulaire de connexion
  errorMessage: string = 'Veuillez confirmer votre email depuis votre boîte mail.'; // Message d'erreur
  booleanConfirmed: boolean = false; // Indicateur de confirmation d'email
  emailUtilisateur!: string | null; // Adresse email de l'utilisateur (initialisée à null)
  loading: boolean = false; // Indicateur de chargement

  // Constructeur du composant, injecte les dépendances nécessaires
  constructor(private fb: FormBuilder, private service: LoginService, private route: ActivatedRoute) {
    // Initialisation du formulaire avec des champs pour l'email et le mot de passe
    this.loginForm = this.fb.group({
      emailUtilisateur: [null, [Validators.required, Validators.email]],
      motsDePasse: [null, Validators.required],
    });
  }

  // Méthode du cycle de vie d'Angular, appelée à l'initialisation du composant
  ngOnInit(): void {
    // Récupération de l'email depuis les paramètres de l'URL
    this.emailUtilisateur = this.route.snapshot.paramMap.get('emailUtilisateur');
    console.log('Récupération de l\'email par paramètre', this.emailUtilisateur);
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value; // Récupération des données du formulaire

      console.log("l'adresse email", userData.emailUtilisateur);
      this.loading = true; // Activation de l'indicateur de chargement

      // Appel du service de connexion
      this.service.login(userData).subscribe(
        (response) => {
          const userId = response.idUtilisateur;

          console.log('id du user', userId);
          console.log('connexion réussie:', response);

          // Appel du service pour obtenir les détails de l'utilisateur
          this.service.userDetail(userId).subscribe(
            (userDetails) => {
              console.log('les détails', userDetails);
              console.log("la propriété de l'email confirmé", userDetails.emailConfirme);

              if (userDetails.emailConfirme === false) {
                this.booleanConfirmed = true;
                console.log("l'email n'est pas confirmé ", userDetails.emailConfirme);
              } else {
                this.booleanConfirmed = false;
                console.log('future redirection');
                // Redirection vers une autre page (à décommenter et personnaliser)
                // this.router.navigate(['/']);
              }

              this.loading = false; // Désactivation de l'indicateur de chargement
            }
          );
        },
        (error) => {
          console.error("Erreur lors de l'enregistrement:", error);
          this.loading = false; // Désactivation de l'indicateur de chargement en cas d'erreur
        }
      );
    }
  }

  // Méthode appelée lors du clic sur le bouton "Renvoyer le mail"
  click(): void {
    console.log(this.emailUtilisateur);

    if (this.emailUtilisateur) {
      this.loading = true; // Activation de l'indicateur de chargement

      // Appel du service pour renvoyer l'email
      this.service.renvoisMail(this.emailUtilisateur).subscribe(
        (response) => {
          console.log('Email renvoyé avec succès:', response);
          // Ajoutez ici la logique pour informer l'utilisateur que l'email a été renvoyé
          this.loading = false; // Désactivation de l'indicateur de chargement
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'email:", error);
          this.loading = false; // Désactivation de l'indicateur de chargement en cas d'erreur
        }
      );
    }
  }
}
