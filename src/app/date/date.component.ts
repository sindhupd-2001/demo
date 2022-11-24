import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

    Date1: Date = new Date();
    LocalDate : string = new Date().toLocaleString();
  constructor() { }

  ngOnInit(): void {
  }

}
                                                                 