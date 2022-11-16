import { Component, OnInit } from '@angular/core';
import { CommandesService } from '../../core/services/commandes.service';
import { AuthenticationService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any;

  qte!: number[];
  sum: any;
  user: any;
  nbr: any;
  constructor(private cmdService: CommandesService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.carts = JSON.parse(localStorage.getItem('cart')!) || [];
    this.nbr = this.carts.length
    console.log(this.carts);
    this.user = JSON.parse(localStorage.getItem('userInfo')!);


    this.sum = 0;
    for (let i = 0; i < this.carts.length; i++) {
      this.sum += this.carts[i].total
    }

  }

  updateQuantity(i: any) {
    this.carts[i].total = this.carts[i].quantite * this.carts[i].article.prix
    console.log(this.carts);
    localStorage.setItem('cart', JSON.stringify(this.carts));
    this.sum = 0;
    for (let i = 0; i < this.carts.length; i++) {
      this.sum += this.carts[i].total
    }
    // this.carts.quantite = this.qte

  }


  addCommande() {
    if (this.user == null) {
      this.router.navigate(['login'])
    }
    else {
      this.carts.forEach((element: any) => {
        let commande= element;
        commande.client = this.user

        this.cmdService.createCommande(commande);
      });
      localStorage.removeItem('cart')
      this.router.navigate([''])
    }
  }

}
