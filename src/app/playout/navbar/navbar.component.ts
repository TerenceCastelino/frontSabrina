import { Component, OnInit } from '@angular/core';
import { EtatConnexionService } from '../../_shared/_service/etat-connexion.service';
import { TokenService } from '../../_shared/_service/jwt.service';
import { jwtDecode } from 'jwt-decode'; // Importez la bibliothèque jwt-decode
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private etatConnexionService: EtatConnexionService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.etatConnexionService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.isLoggedIn = isAuthenticated;
    });
  }

  logout(): void {
    this.etatConnexionService.logout();

    this.tokenService.removeToken()
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }

  redirectToDashboard(): void {
    const token = this.tokenService.getToken();

    if (token) {
      // Utilisez jwt-decode pour déchiffrer le jeton et obtenir les informations
      const decodedToken: any = jwtDecode(token);
      console.log(decodedToken, 'le decoded token');


      // Obtenez l'ID de l'utilisateur à partir du jeton décodé
      const userId = decodedToken.userId


        ; // Remplacez idUser avec la clé appropriée dans votre jeton
      console.log(userId, 'l id qui se trouve dans la navbar');

      if (userId) {
        // Redirigez vers la route du tableau de bord avec l'ID de l'utilisateur
        this.router.navigate([`dashboard/${userId}`]);
      }
    }
  }
}
