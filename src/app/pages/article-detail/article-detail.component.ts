import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../core/services/article.service';
import { FavorisService } from '../../core/services/favoris.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  id_article?: string;
  article?: any;
  user: any;
  carts:any[]=[];
  constructor(private route: ActivatedRoute, private router: Router, private service: ArticleService, private favservice: FavorisService) {
    this.route.params.subscribe(params =>
      {this.id_article = params['id']}
      )
    console.log(this.id_article);
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userInfo')!);
    this.carts = JSON.parse(localStorage.getItem('cart')!) || [];
    console.log(this.carts);

    console.log(this.user);

    this.getArticle();
  }

  getArticle(){
    this.service.getArticle(this.id_article).subscribe((doc)=>{
      console.log(doc.payload.data());
      this.article = doc.payload.data();
  });
    console.log(this.article);
  }

  addtoCart(){

    let cart:any={};
    cart.article= this.article;
    cart.quantite= 1;
    cart.total= cart.quantite * cart.article.prix;
    // cart.client = this.user;
    cart.etat = 'en attente';
    cart.date = new Date();
    this.carts.push(cart);
    localStorage.setItem('cart', JSON.stringify(this.carts));
    this.router.navigate(['cart']);
  }

  addtoFavoris(){
    console.log(this.article);

    let fav:any ={};
    fav.article = this.article;
    fav.client = this.user;
    this.favservice.createFavoris(fav);

  }

}
