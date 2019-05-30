import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives-and-pipes';
  ageRequied: boolean = true;

  users: Array<any> = [
    {name: 'John', age: 40},
    {name: 'Kiran', age: 13},
    {name: 'Phani', age: 18},
  ]


  persons: Array<any> = [
    {name: 'John', salary: 40},
    {name: 'Kiran', salary: 13},
    {name: 'Phani', salary: 18},
  ]
}
