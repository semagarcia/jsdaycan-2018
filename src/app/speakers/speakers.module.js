"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var speakers_routing_module_1 = require("./speakers-routing.module");
var speakers_component_1 = require("./speakers.component");
var SpeakersModule = /** @class */ (function () {
    function SpeakersModule() {
    }
    SpeakersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                speakers_routing_module_1.SearchRoutingModule
            ],
            declarations: [
                speakers_component_1.SpeakersComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SpeakersModule);
    return SpeakersModule;
}());
exports.SpeakersModule = SpeakersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYWtlcnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlYWtlcnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBZ0U7QUFDaEUsMkRBQXlEO0FBY3pEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBWjFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDZDQUFtQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFNlYXJjaFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zcGVha2Vycy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgU3BlYWtlcnNDb21wb25lbnQgfSBmcm9tIFwiLi9zcGVha2Vycy5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgU2VhcmNoUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNwZWFrZXJzQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNwZWFrZXJzTW9kdWxlIHsgfVxuIl19