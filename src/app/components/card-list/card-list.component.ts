import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Output() onNewFilmValutation = new EventEmitter<number>();
  listaObj:Array<Card>= [
    { id: 1, titolo:'Titolo1', body:'body', footer:'footer' },
    { id: 2, titolo:'Titolo2', body:'body', footer:'footer' },
    { id: 3, titolo:'Titolo3', body:'body', footer:'footer' },
    { id: 4, titolo:'Titolo4', body:'body', footer:'footer' },
    { id: 5, titolo:'Titolo5', body:'body', footer:'footer' },
    { id: 6, titolo:'Titolo6', body:'body', footer:'footer' }
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

  trackById(obj:Card) {
    return obj.id;
  }

  newFilmValutation(value: number) {
    this.onNewFilmValutation.emit(value);
  }
}