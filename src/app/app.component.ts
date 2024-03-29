import { Component, OnInit } from '@angular/core';
import { ICardItem } from 'projects/cards/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jesus-lib';

  public elements: ICardItem[] = [
    {
      title: '#title 1',
      description: 'descroption 1',
      image: 'https://picsum.photos/500/300/?image=10',
    },
    {
      title: '#title 2',
      description: 'descroption 2',
      image: 'https://picsum.photos/500/300/?image=5',
    },
    {
      title: '#title 3',
      description: 'descroption 3',
      image: 'https://picsum.photos/500/300/?image=11',
    },
    {
      title: '#title 4',
      description: 'descroption 4',
      image: 'https://picsum.photos/500/300/?image=14',
    },
    {
      title: '#title 5',
      description: 'descroption 5',
      image: 'https://picsum.photos/500/300/?image=17',
    },
    {
      title: '#title 6',
      description: 'descroption 6',
      image: 'https://picsum.photos/500/300/?image=2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
