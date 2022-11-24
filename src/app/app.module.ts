import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdditionComponent } from './addition/addition.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CurrencyconvertorComponent } from './currencyconvertor/currencyconvertor.component';
import { DateComponent } from './date/date.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent,
    AdditionComponent,
    CalculatorComponent,
    DropdownComponent,
    CurrencyconvertorComponent,
    DateComponent,
    FormComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
