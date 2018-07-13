import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import {database, initializeApp} from "firebase";
import { environment } from '../../environments/environment';
import { CardsService } from '../shared/model/cards.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  public qtext;
  public atext;
  public buttonText;
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
            this.qtext = "Enter Question";
        }
        else if(answer.value==""){
            this.atext = "Enter Answer";
        }
        else{ //if (question != "" && answer != "") { <-- probably not good to put function in else
            
            this.firebase.push({
                question: question.value,
                answer: answer.value,
                createdDate: (new Date()).getTime()
                
            });
            this.firebase.
           alert("card added");
        }

    }

}
