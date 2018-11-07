import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AgendaRoutingModule } from "./agenda-routing.module";
import { AgendaComponent } from "./agenda.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AgendaRoutingModule
    ],
    declarations: [
        AgendaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AgendaModule { }
