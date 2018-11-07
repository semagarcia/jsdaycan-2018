import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    //{ path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "", redirectTo: "/agenda", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "agenda", loadChildren: "~/app/agenda/agenda.module#AgendaModule" },
    { path: "talk-details/:id", loadChildren: "~/app/talk-details/talk-details.module#TalkDetailsModule" },
    { path: "speakers", loadChildren: "~/app/speakers/speakers.module#SpeakersModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
