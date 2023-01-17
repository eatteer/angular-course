import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  public name: string = 'JuAn';

  public showName(): void {
    console.log(this.name);
  }
}
