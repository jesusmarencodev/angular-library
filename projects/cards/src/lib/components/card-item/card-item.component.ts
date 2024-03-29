import { Component, Input, OnInit } from '@angular/core';
import { ICardItem } from '../../interfaces/card.interface';

@Component({
  selector: 'tng-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() item: ICardItem = null;;

  constructor() { }

  ngOnInit(): void {
  }

}
