import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../core/services/article.service';
import { Article } from '../../core/models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles :any[] =[];
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => {
      console.log(data)
      this.articles = data.map(article => {
        console.log(article.payload.doc.data());
        return {

          uid: article.payload.doc.id,

          ...article.payload.doc.data() as Article
        }

      })
    })
  }

}
