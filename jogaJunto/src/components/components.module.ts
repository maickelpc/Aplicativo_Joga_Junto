import { NgModule } from '@angular/core';
import { EventosComponent } from './eventos/eventos';
import {IonicPageModule} from "ionic-angular";
import { ConfirmacaoComponent } from './confirmacao/confirmacao';
import { EventoComponent } from './evento/evento';
import { PerfilComponent } from './perfil/perfil';
import { LogoutComponent } from './logout/logout';
import { MapsComponent } from './maps/maps';
import { CriarEventoComponent } from './criar-evento/criar-evento';
import { IonicSelectableModule } from  'ionic-selectable';
import { ConfirmaParticipacaoComponent } from './confirma-participacao/confirma-participacao';


@NgModule({
	declarations: [EventosComponent,
    ConfirmacaoComponent,
    EventoComponent,
    PerfilComponent,
    LogoutComponent,
    MapsComponent,
    CriarEventoComponent,
    ConfirmaParticipacaoComponent],
  imports: [
    IonicPageModule,
		IonicSelectableModule
  ],
	exports: [EventosComponent,
    ConfirmacaoComponent,
    EventoComponent,
    PerfilComponent,
    LogoutComponent,
    MapsComponent,
    CriarEventoComponent,
    ConfirmaParticipacaoComponent],
		entryComponents:[EventosComponent,
	    ConfirmacaoComponent,
	    EventoComponent,
	    PerfilComponent,
			LogoutComponent,
			CriarEventoComponent]
})
export class ComponentsModule {}
