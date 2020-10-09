import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questioncell',
  templateUrl: './questioncell.component.html',
  styleUrls: ['./questioncell.component.scss']
})
export class QuestioncellComponent implements OnInit {

  public questionTitle: string = "Question title"
  public wholeQuestion: string = `I have a little problem with a dropdown button. I am trying to adjust my website to mobile. What I want is to have a button that will dropdown to left-hand side of it. Her is my html code;
  <!-- A div element for the button that will contain the nav-bar buttons -->
  <div style="position: absolute; ; right: 0px; margin-top: 40px;" ngbDropdown class="btn-group dropleft">
  <button class="btn adjustbtn dropdown-toggle" style="width: auto; height: 20px;" ngbDropdownToggle></button>
  <div ngbDropdownMenu class="dropdown-menu">
  <button ngbDropdownItem>All Sports</button>
  <button ngbDropdownItem>Basketball</button>
  <button ngbDropdownItem>Football</button>
  </div>
  </div>
  But the problem is this button is still dropping down to the right-hand side of it, althoug the arrow at my dropdown button points to left. How can I fix this?

  `
  public questionBody: string = this.wholeQuestion.substring(0,200)

  constructor() { }

  ngOnInit() {
  }

}
