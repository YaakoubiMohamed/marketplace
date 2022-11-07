import { Component, OnInit } from '@angular/core';
import { FavorisService } from '../../../core/services/favoris.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  favoris: any[] =[];
  user:any;
  constructor( private favservice: FavorisService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userInfo')!);
    this.getFavoris(this.user.uid)
  }

  getFavoris(id: string){
    this.favservice.readFavoris(id).subscribe(data =>{
      // console.log(data)
      this.favoris = data.map(fav=>{
        // console.log(fav);
        return {

          uid: fav.payload.doc.id,

          ...fav.payload.doc.data() as {}
        }
      })
      console.log(this.favoris);

    })
  }

  delete(id: string){
    console.log(id);

    this.favservice.deleteFavoris(id)
  }

}
