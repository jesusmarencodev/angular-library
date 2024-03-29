import { NgModule } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';
import { CardItemModule } from './components/card-item/card-item.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CardItemModule,
    BrowserModule
  ],
  exports: [CardsComponent]
})
export class CardsModule { }
