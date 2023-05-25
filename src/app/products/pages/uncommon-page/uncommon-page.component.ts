import { Component } from '@angular/core';
import { interval, Observable, tap } from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  // i18n Select

  public name:string = 'Alexander';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    'male' : 'invitarlo',
    'female': 'invitarla'
  }


  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  // i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Eduardo', 'Cesar', 'Alex', 'Daniel', 'Natalia', 'Melissa', 'Luis', 'Juan'];
  public clientsMap = {
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos 2 personas esperando.',
    'other' : 'tenemos # clientes esperando.',
  }
  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Alexander',
    age: 36,
    address: 'Lima, Peru'
  }

  // Sync Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap', value))
  );

  public promiseValue : Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa.');
    }, 3500 )
  })
}
