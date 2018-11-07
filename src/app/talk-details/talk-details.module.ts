import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TalkDetailsRoutingModule } from "./talk-details-routing.module";
import { TalkDetailsComponent } from "./talk-details.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TalkDetailsRoutingModule
    ],
    declarations: [
        TalkDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TalkDetailsModule { }
