import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencyconvertor',
  templateUrl: './currencyconvertor.component.html',
  styleUrls: ['./currencyconvertor.component.css']
})
export class CurrencyconvertorComponent implements OnInit {

  constructor() { }
  result!:number;
  task(val1:string, val2:string, val3:string)
  {
    if(val1=='india'&& val2=='usa')
    {
      this.result= parseFloat(val3)*(0.012);
    }
    if(val1=='usa'&& val2=='india')
    {
      this.result= parseFloat(val3)*(82.21);
    }
    if(val1=='india'&& val2=='euro')
    {
      this.result= parseFloat(val3)*(0.012);
    }
    if(val1=='euro'&& val2=='india')
    {
      this.result= parseFloat(val3)*(80.21);
    }
    if(val1=='usa'&& val2=='euro')
    {
      this.result= parseFloat(val3)*(1.03);
    }
    if(val1=='euro'&& val2=='usa')
    {
      this.result= parseFloat(val3)*(0.98);
    }
    if(val1=='india'&& val2=='india')
    {
      this.result= parseFloat(val3);
    }
    if(val1=='euro'&& val2=='euro')
    {
      this.result= parseFloat(val3);
    }
    if(val1=='usa'&& val2=='usa')
    {
      this.result= parseFloat(val3);
    }

  }
  ngOnInit(): void {
  }

}
