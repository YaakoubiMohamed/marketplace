import { Component, OnInit } from '@angular/core';
import { CommandesService } from '../../core/services/commandes.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any;

  qte!:number[];
  sum: any;
  constructor(private cmdService: CommandesService) { }

  ngOnInit(): void {
    this.carts = JSON.parse(localStorage.getItem('cart')!) || [];
    console.log(this.carts);


  this.sum =0;
    for(let i=0;i< this.carts.length;i++){
      this.sum += this.carts[i].total
    }

  }

  updateQuantity(i:any){
    this.carts[i].total = this.carts[i].quantite * this.carts[i].article.prix
    console.log(this.carts);
    localStorage.setItem('cart',JSON.stringify(this.carts));
    this.sum =0;
    for(let i=0;i< this.carts.length;i++){
      this.sum += this.carts[i].total
    }
    // this.carts.quantite = this.qte

  }


  addCommande(){
    this.carts.forEach((element:any) => {
      this.cmdService.createCommande(element);
    });

  }

}
