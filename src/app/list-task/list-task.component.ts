import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CardsService } from '../shared/model/cards.service';
import { Card } from '../shared/model/card';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  @Input() public cards:Card[];

  constructor(private cardsService: CardsService) { 

  }

  ngOnInit() {
    this.cardsService.findAllCards()
    .subscribe(
      cards => this.cards = cards
    );
  }

  onClickRemove(currentCardKey){
    this.cardsService.removeCard(currentCardKey);
  }

}
