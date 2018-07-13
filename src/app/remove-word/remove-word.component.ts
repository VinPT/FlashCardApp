import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import {database, initializeApp} from "firebase";
import { environment } from '../../environments/environment';
import { CardsService } from '../shared/model/cards.service';

@Component({
  selector: 'remove-word',
  templateUrl: './remove-word.component.html',
  styleUrls: ['./remove-word.component.css']
})
export class RemoveWordComponent implements OnInit {

  public text;

  public firebase;

  constructor(private cardsService: CardsService, private db: AngularFireDatabase) {
        this.firebase = this.db.list('/card');
  }

    ngOnInit() {
        initializeApp(environment.firebase);

        const coursesRef = database().ref('courses');
        const lessonsRef = database().ref('lessons');

        
  }

  addWord(question, answer, myButton){


     
        if(question.value==""){
            this.text = "Enter a Question";
        }
        else{ //if (question != "" && answer != "") { <-- probably not good to put function in else
            
        // this.db.database.ref.child(question.value).removeValue();
            
        //    alert("card Removed");
        // }

    }

}

}
