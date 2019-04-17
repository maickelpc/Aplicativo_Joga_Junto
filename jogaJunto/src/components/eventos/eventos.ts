import { Component } from '@angular/core';

/**
 * Generated class for the EventosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'eventos',
  templateUrl: 'eventos.html'
})
export class EventosComponent {

  text: string;

  constructor() {
    console.log('Hello EventosComponent Component');
    this.text = 'Hello World';
  }

}
