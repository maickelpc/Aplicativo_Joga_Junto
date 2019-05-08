import { Component } from '@angular/core';

/**
 * Generated class for the PerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html'
})
export class PerfilComponent {

  text: string;

  constructor() {
    console.log('Hello PerfilComponent Component');
    this.text = 'Hello World';
  }

}
