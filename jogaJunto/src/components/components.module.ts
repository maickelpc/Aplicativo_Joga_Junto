import { NgModule } from '@angular/core';
import { EventosComponent } from './eventos/eventos';
import {IonicPageModule} from "ionic-angular";
import { ConfirmacaoComponent } from './confirmacao/confirmacao';
@NgModule({
	declarations: [EventosComponent,
    ConfirmacaoComponent],
  imports: [
    IonicPageModule
  ],
	exports: [EventosComponent,
    ConfirmacaoComponent]
})
export class ComponentsModule {}
