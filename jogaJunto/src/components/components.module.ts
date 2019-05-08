import { NgModule } from '@angular/core';
import { EventosComponent } from './eventos/eventos';
import {IonicPageModule} from "ionic-angular";
import { ConfirmacaoComponent } from './confirmacao/confirmacao';
import { EventoComponent } from './evento/evento';
import { PerfilComponent } from './perfil/perfil';
@NgModule({
	declarations: [EventosComponent,
    ConfirmacaoComponent,
    EventoComponent,
    PerfilComponent],
  imports: [
    IonicPageModule
  ],
	exports: [EventosComponent,
    ConfirmacaoComponent,
    EventoComponent,
    PerfilComponent]
})
export class ComponentsModule {}
