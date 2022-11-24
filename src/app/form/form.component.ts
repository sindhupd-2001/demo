import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  submit(login:string)
  {
    
    console.log("reg successfull",login)
  }
  constructor() { }

  ngOnInit(): void {
  }

}


