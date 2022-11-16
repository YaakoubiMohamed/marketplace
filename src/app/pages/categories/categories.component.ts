import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../core/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  articles: any[]=[];
  id_categorie!: string;

  constructor(private service: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      {this.id_categorie = params['id']}
      )
    console.log(this.id_categorie);
    this.getArticle(this.id_categorie);
  }

  getArticle(id:string){
    this.service.getArticlesByCategory(id).subscribe(data =>{
      // console.log(data)
      this.articles = data.map(cat=>{
        // console.log(fav);
        return {

          uid: cat.payload.doc.id,

          ...cat.payload.doc.data() as {}
        }
      })
      console.log(this.articles);

    })
  }

}
