import { NgModule } from '@angular/core';
import { EventosComponent } from './eventos/eventos';
import {IonicPageModule} from "ionic-angular";
@NgModule({
	declarations: [EventosComponent],
  imports: [
    IonicPageModule
  ],
	exports: [EventosComponent]
})
export class ComponentsModule {}
