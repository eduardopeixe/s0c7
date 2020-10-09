import { Component, OnInit } from '@angular/core';
import { convertUnixToDuration } from '../../../../assets/helpers'

@Component({
  selector: 'app-avatarcell',
  templateUrl: './avatarcell.component.html',
  styleUrls: ['./avatarcell.component.scss']
})
export class AvatarcellComponent implements OnInit {

  public when: number = 11090400
  public questionDate: string = `${convertUnixToDuration(this.when)}`

  constructor() { }

  ngOnInit() {
    console.log("avatar", convertUnixToDuration(this.when))
  }

}
