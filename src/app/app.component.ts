import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayOfObjects: Array<any> = [
    {first: 'Kiran', last: 'Kumar'},
    {first: 'Jhon', last: 'Snow'},
    {first: 'Karteek', last: 'Kishore'},
  ]
}
