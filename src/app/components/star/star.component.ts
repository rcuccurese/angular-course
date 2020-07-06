import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
@Input() starSize: string;
@Input() isSelected: boolean;

  constructor() { }

  ngOnInit() { }

  getColor() {
    if (this.isSelected) {
      return 'amber-text';
    } else {
      return 'text-black-50';
    }
  }
}
