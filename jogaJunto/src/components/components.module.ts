import { NgModule } from '@angular/core';
import { EventosComponent } from './eventos/eventos';
import {IonicPageModule} from "ionic-angular";
import { ConfirmacaoComponent } from './confirmacao/confirmacao';
import { EventoComponent } from './evento/evento';
import { PerfilComponent } from './perfil/perfil';
import { LogoutComponent } from './logout/logout';
@NgModule({
	declarations: [EventosComponent,
    ConfirmacaoComponent,
    EventoComponent,
    PerfilComponent,
    LogoutComponent],
  imports: [
    IonicPageModule
  ],
	exports: [EventosComponent,
    ConfirmacaoComponent,
    EventoComponent,
    PerfilComponent,
    LogoutComponent],
		entryComponents:[EventosComponent,
	    ConfirmacaoComponent,
	    EventoComponent,
	    PerfilComponent,
			LogoutComponent]
})
export class ComponentsModule {}
