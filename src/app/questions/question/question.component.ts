import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { convertUnixToDuration } from '../../../assets/helpers'


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public voteCount: number = 123
  public answerCount: number = 4
  public viewCount: number = 123987
  public when: number = 123123123

  constructor() {
   }

  ngOnInit() {

  }


}
