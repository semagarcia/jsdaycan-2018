import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";

import { TalksProvider } from "./../providers/talks.service";

@Component({
    selector: "TalkDetails",
    moduleId: module.id,
    templateUrl: "./talk-details.component.html"
})
export class TalkDetailsComponent implements OnInit {
    talkData;

    constructor(
        private route: ActivatedRoute,
        private routerExtSrv: RouterExtensions,
        private talksSrv: TalksProvider
    ) {
        this.route.params.subscribe((params) => this.talkData = this.talksSrv.getTalkById(params.id)[0]);
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    goBack(): void {
        this.routerExtSrv.backToPreviousPage();
    }
}
