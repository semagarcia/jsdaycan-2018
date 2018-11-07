"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    //{ path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "", redirectTo: "/agenda", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "agenda", loadChildren: "~/app/agenda/agenda.module#AgendaModule" },
    { path: "talk-details/:id", loadChildren: "~/app/talk-details/talk-details.module#TalkDetailsModule" },
    { path: "speakers", loadChildren: "~/app/speakers/speakers.module#SpeakersModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQix1REFBdUQ7SUFDdkQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUseUNBQXlDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLDBEQUEwRCxFQUFFO0lBQ3RHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtDQUN0RixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIC8veyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2FnZW5kYVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImFnZW5kYVwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvYWdlbmRhL2FnZW5kYS5tb2R1bGUjQWdlbmRhTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwidGFsay1kZXRhaWxzLzppZFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvdGFsay1kZXRhaWxzL3RhbGstZGV0YWlscy5tb2R1bGUjVGFsa0RldGFpbHNNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJzcGVha2Vyc1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc3BlYWtlcnMvc3BlYWtlcnMubW9kdWxlI1NwZWFrZXJzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=