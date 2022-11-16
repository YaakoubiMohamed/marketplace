import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../core/services/categorie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories: any[]=[];

  searchText: string='';
  category:string='';

  constructor(private service: CategorieService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.service.getCategories().subscribe(data =>{
      // console.log(data)
      this.categories = data.map(cat=>{
        // console.log(fav);
        return {

          uid: cat.payload.doc.id,

          ...cat.payload.doc.data() as {}
        }
      })
      console.log(this.categories);

    })
  }

  search(){}

}
