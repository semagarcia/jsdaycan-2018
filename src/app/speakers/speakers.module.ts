import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./speakers-routing.module";
import { SpeakersComponent } from "./speakers.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule
    ],
    declarations: [
        SpeakersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SpeakersModule { }
