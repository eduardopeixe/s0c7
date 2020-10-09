import { Component, OnInit } from '@angular/core';
import { convertUnixToDuration } from '../../../assets/helpers'

@Component({
  selector: 'app-question-summary',
  templateUrl: './question-summary.component.html',
  styleUrls: ['./question-summary.component.scss']
})
export class QuestionSummaryComponent implements OnInit {

  public voteCount: number = 2
  public answerCount: number = 1
  public viewCount: number = 101
  public title: string = "Question title"
  public body: string = "This is the body of the question where one can use MarkDownm to code snipet. Please use this space as you will."
  public tags: string[] = ["go", "swagger", "docker"]
  public dateAsked = "2020-10-08 18:24:10"
  public when  = new Date().getTime() - new Date(this.dateAsked).getTime();

  constructor() { }

  ngOnInit() {
    console.log("duration", convertUnixToDuration(this.when))
    console.log(new Date(this.dateAsked))
  }



}
