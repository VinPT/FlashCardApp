import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CardsService } from '../shared/model/cards.service';
import { Card } from '../shared/model/card';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input() public cards:Card[];

  constructor(private cardsService: CardsService) { 

  }

  ngOnInit() {
    this.cardsService.findAllCards()
    .subscribe(
      cards => this.cards = cards
    );
  }

  

}
