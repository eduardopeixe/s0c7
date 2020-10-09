import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statuscell',
  templateUrl: './statuscell.component.html',
  styleUrls: ['./statuscell.component.scss']
})
export class StatuscellComponent implements OnInit {

  public voteCount: number = 123
  public answerCount: number = 4
  public viewCount: number = 321654

  constructor() { }

  ngOnInit() {
  }

}
