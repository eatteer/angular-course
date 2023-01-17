import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  public lowercaseName: string = 'juan';
  public uppercaseName: string = 'JUAN';
  public fullname: string = 'jUan eSteBan';
  public currentDate: Date = new Date();
}
