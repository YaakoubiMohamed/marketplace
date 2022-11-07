import { Component, OnInit } from '@angular/core';
import { CommandesService } from '../../../core/services/commandes.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  user:any;
  commandes:any[]=[];

  constructor(private cmd: CommandesService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userInfo')!)
    this.getCommandes(this.user.id)
  }

  getCommandes(id: string){
    console.log(id);

    this.cmd.getCommandes(id).subscribe(data =>{
      // console.log(data)
      this.commandes = data.map(fav=>{
        // console.log(fav);
        return {

          uid: fav.payload.doc.id,

          ...fav.payload.doc.data() as {}
        }
      })
      console.log(this.commandes);

    })
  }

}
