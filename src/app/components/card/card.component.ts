import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:Card;
  @Output() newValutation= new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  setRating(valore: number) {
    this.newValutation.emit(valore);
  }
}
