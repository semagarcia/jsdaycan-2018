import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array";

import { TalksProvider } from "./../providers/talks.service";

@Component({
    selector: "Agenda",
    moduleId: module.id,
    templateUrl: "./agenda.component.html"
})
export class AgendaComponent implements OnInit {
    private _dataItems;

    constructor(private routerSrv: RouterExtensions, private talksSrv: TalksProvider) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.talksSrv.getTalks().subscribe((data) => this._dataItems = data);
    }

    goToDetails(talk: any) {
        this.routerSrv.navigateByUrl(`talk-details/${talk.id}`);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    get dataItems(): ObservableArray<any> {
        return this._dataItems;
    }
}
