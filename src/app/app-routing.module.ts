import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentComponent} from './department/department.component'
import {EmployeeComponent} from './employee/employee.component'
import {AdditionComponent} from './addition/addition.component'
import {CalculatorComponent} from './calculator/calculator.component'
import {DropdownComponent} from './dropdown/dropdown.component'
import {CurrencyconvertorComponent} from './currencyconvertor/currencyconvertor.component'
import {DateComponent} from './date/date.component'
import {FormComponent} from './form/form.component'
const routes: Routes = [
  {path: 'department', component: DepartmentComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'addition', component: AdditionComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'dropdown', component: DropdownComponent },
  {path: 'currencyconvertor', component: CurrencyconvertorComponent},
  {path: 'date', component: DateComponent},
  {path: 'form', component: FormComponent}
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }