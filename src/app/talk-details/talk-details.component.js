"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var talks_service_1 = require("./../providers/talks.service");
var TalkDetailsComponent = /** @class */ (function () {
    function TalkDetailsComponent(route, routerExtSrv, talksSrv) {
        var _this = this;
        this.route = route;
        this.routerExtSrv = routerExtSrv;
        this.talksSrv = talksSrv;
        this.route.params.subscribe(function (params) { return _this.talkData = _this.talksSrv.getTalkById(params.id)[0]; });
    }
    TalkDetailsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    TalkDetailsComponent.prototype.goBack = function () {
        this.routerExtSrv.backToPreviousPage();
    };
    TalkDetailsComponent = __decorate([
        core_1.Component({
            selector: "TalkDetails",
            moduleId: module.id,
            templateUrl: "./talk-details.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.RouterExtensions,
            talks_service_1.TalksProvider])
    ], TalkDetailsComponent);
    return TalkDetailsComponent;
}());
exports.TalkDetailsComponent = TalkDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsay1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhbGstZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUcvRCw4REFBNkQ7QUFPN0Q7SUFHSSw4QkFDWSxLQUFxQixFQUNyQixZQUE4QixFQUM5QixRQUF1QjtRQUhuQyxpQkFNQztRQUxXLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBRS9CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF2RCxDQUF1RCxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELHFDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0MsQ0FBQztJQWpCUSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1NBQy9DLENBQUM7eUNBS3FCLHVCQUFjO1lBQ1AseUJBQWdCO1lBQ3BCLDZCQUFhO09BTjFCLG9CQUFvQixDQWtCaEM7SUFBRCwyQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBUYWxrc1Byb3ZpZGVyIH0gZnJvbSBcIi4vLi4vcHJvdmlkZXJzL3RhbGtzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVGFsa0RldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFsay1kZXRhaWxzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgVGFsa0RldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRhbGtEYXRhO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dFNydjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSB0YWxrc1NydjogVGFsa3NQcm92aWRlclxuICAgICkge1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4gdGhpcy50YWxrRGF0YSA9IHRoaXMudGFsa3NTcnYuZ2V0VGFsa0J5SWQocGFyYW1zLmlkKVswXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRTcnYuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxufVxuIl19