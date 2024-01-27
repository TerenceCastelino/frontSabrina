import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPassewordService } from './_service/reset-passeword.service';

@Component({
  selector: 'app-reset-passeword',
  templateUrl: './reset-passeword.component.html',
  styleUrls: ['./reset-passeword.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup; // Formulaire réactif pour la réinitialisation du mot de passe
  isLoading = false; // Indicateur de chargement
  errorMessage: string = ''; // Message d'erreur affiché en cas d'échec
  urlResetPasswordHash!: string; // Paramètre d'URL contenant le hash de réinitialisation

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private resetPasswordService: ResetPassewordService
  ) {
    // Initialisation du formulaire dans le constructeur
    this.resetForm = this.formBuilder.group({
      newPassword: [null, [Validators.required, Validators.minLength(6)]],
      newPassword2: [null, [Validators.required, Validators.minLength(6)]],
    }, { validator: this.passwordMatchValidator }); // Utilisation d'un validateur personnalisé
  }

  ngOnInit(): void {
    // Récupération du paramètre d'URL contenant le hash de réinitialisation
    this.urlResetPasswordHash = this.route.snapshot.params['urlResetPasswordHash'];


  }

  onSubmit(): void {
    if (this.resetForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';



      const { newPassword, newPassword2 } = this.resetForm.value;

      console.log(newPassword);


      // Vérification de la correspondance des deux champs de mot de passe
      if (newPassword !== newPassword2) {
        this.errorMessage = 'Les champs du mot de passe ne correspondent pas.';
        this.isLoading = false;
        return;
      }


      this.resetPasswordService.resetPassword(this.urlResetPasswordHash, newPassword)
        .subscribe(
          (response) => {


            console.log('Mot de passe réinitialisé avec succès!', response);
            this.router.navigate(['/login']);
          },
          (error) => {
            console.error('Erreur lors de la réinitialisation du mot de passe', error);
            this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer.';
          }
        )
        .add(() => this.isLoading = false);
    }
    console.log('coucou');
  }

  // Fonction de validation personnalisée pour vérifier la correspondance des mots de passe
  private passwordMatchValidator(formGroup: FormGroup): null | { mismatch: boolean } {
    const password = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('newPassword2')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }
}
