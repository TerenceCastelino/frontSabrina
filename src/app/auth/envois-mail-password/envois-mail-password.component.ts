// envois-mail-password.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnvoisMailPerduService } from './_service/envois-mail-perdu.service';

@Component({
  selector: 'app-envois-mail-password',
  templateUrl: './envois-mail-password.component.html',
  styleUrls: ['./envois-mail-password.component.scss']
})
export class EnvoisMailPasswordComponent {
  envoisMailPasswordForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: EnvoisMailPerduService
  ) {
    this.envoisMailPasswordForm = this.fb.group({
      emailUtilisateur: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.envoisMailPasswordForm.valid) {
      const userData = this.envoisMailPasswordForm.value;

      this.service.envoisMail(userData).subscribe(
        (response) => {
          console.log(userData, 'les données de l\'utilisateur');
          // Ajoutez ici des actions supplémentaires après l'envoi du courriel, si nécessaire.

          // Redirection vers la page de login
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Erreur lors de l\'envoi :', error);
        }
      );
    }
  }
}
