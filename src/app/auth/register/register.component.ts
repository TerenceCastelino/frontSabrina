import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './_service/register.service.service';
import { response } from 'express';
import { UserInterface } from './_interface/user.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  userData!: UserInterface;

  constructor(private fb: FormBuilder, private Service: RegisterService, private router: Router) {
    this.registerForm = this.fb.group({
      nom: [null, [Validators.required, Validators.minLength(2)]],
      prenom: [null, Validators.required],
      motsDePasse: [null, Validators.required],
      gsm: [null, [Validators.required]],
      telephone: [null, Validators.required],
      emailUtilisateur: [null, [Validators.required, Validators.email]],

      // ... ajoutez d'autres champs et validations si nécessaire
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value as UserInterface;
      // Appelez la méthode register de votre service
      this.Service.register(userData).subscribe(
        (response) => {
          console.log('Enregistrement réussi:', response);
          this.router.navigate(['/login'])
        }, (error) => {
          console.error('Erreur lors de l\'enregistrement:', error);
        }
      )


    }
  }

}


//verifier plus presisement les champs{
// le champs telephone et gsm ne peux prendre que des chiffre
// }

//rajouter des etape a mon observable ne fusque la redirection

//(creation d un message popup pour prevenir l utilisateur de la futur validation d email)
//styler la page
//cree un store et synchroniser avec le localstorage


//! question 
// pourquoi dois je typer mes variable et dois je typer mes observable 