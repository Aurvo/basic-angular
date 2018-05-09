import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayParagraph = true;
  clicks = [];
    
  constructor() { }

  ngOnInit() {
  }

  toggleDetails() {
    this.clicks.push(this.clicks.length + 1);
    this.displayParagraph = !this.displayParagraph;
  }

  getBackground(n) {
    return n > 4 ? 'lightblue' : 'none';
  }

}
