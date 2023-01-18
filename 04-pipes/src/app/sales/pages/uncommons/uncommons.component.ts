import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

type Genre = 'male' | 'female';

@Component({
  selector: 'app-uncommons',
  templateUrl: './uncommons.component.html',
  styles: [],
})
export class UncommonsComponent {
  public name: string = 'Juan';
  public genre: Genre = 'male';
  public welcomeMap = {
    male: 'Bienvenido',
    female: 'Bienvenida',
  };
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public clients: string[] = ['Pepito', 'Fulanito', 'Mizuhara', 'Ruka'];
  public queueMap = {
    '=0': 'clientes',
    '=1': 'cliente',
    other: 'clientes',
  };

  public literalObject = {
    name: 'Juan',
    age: 22,
    address: 'Pereira, Risaralda, Colombia',
  };

  public intervalObservable: Observable<number> = interval(1000);
  public timeoutPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise resolved'), 2000);
  });

  public changeClient(): void {
    this.name = this.name == 'Juan' ? 'Mizuhara' : 'Juan';
    this.genre = this.genre === 'male' ? 'female' : 'male';
  }

  public removeClient(): void {
    this.clients.pop();
  }
}
