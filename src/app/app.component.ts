import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '*ngIf - Demo';

  myCustomArray: Array<number> = [1, 2, 3];

}
