import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Card } from './card';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase, AngularFireAction } from "angularfire2/database";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private db: AngularFireDatabase){

  }

  findAllCards(): Observable<Card[]> {
      return this.db.list<Card>('card')
      .snapshotChanges()
      .pipe(map( cardDataList => { 
        return cardDataList.map( cardData => {
          const key = cardData.key;
          const card = cardData.payload.val();
          return{
            key,
            ...card
          }
        })
      }));//word because card not decided on yet 
  }
  removeCard(cardKey){
    console.log(cardKey);

    
    this.db.object('card/'+cardKey).remove().then(function(cardKey){
      console.log("success");
    },function (error){
      console.log("Failed");
    });
    

  }
}
