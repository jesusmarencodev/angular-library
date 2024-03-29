import { Component, Input, OnInit } from '@angular/core';
import { ICardItem } from '../../interfaces/card.interface';

@Component({
  selector: 'tng-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() cardItems: ICardItem[] = [];

  constructor() {
   
  }

  ngOnInit(): void {
    console.log(this.cardItems);
  }
}
