import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

interface Star {
  id: number;
  value: number;
  selected: boolean;
}

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
@Input() length : number;
@Input() starsSize: string;
@Output() value = new EventEmitter();
stars: Star[] = [];
starSize : string;

  constructor() { }

  ngOnInit() {
    this.createStars();
    this.setStarSize();
  }
 
  createStars() {
    for (let index = 0; index < this.length; index++) {
      this.stars[index] = { id: index, value: index + 1, selected: false };
    }    
  }

  trackById(index, star: Star) {
    return star.id;
  }

  setStarSize() {
    switch (this.starsSize) {
      case 'small':
        this.starSize='lg';
        break;
      case 'medium':
        this.starSize='3x';
        break;
      case 'large':
        this.starSize='5x';
        break;
          
      default:
        this.starSize='lg';
        break;
    }
  }

  starsColor(star:Star) {
    this.createStars();
    for (let index = 0; index < star.value; index++) {
      this.stars[index].selected = true;
    }
    this.value.emit(star.value);
  }
}