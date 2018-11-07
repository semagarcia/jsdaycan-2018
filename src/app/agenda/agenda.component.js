"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app = require("tns-core-modules/application");
var talks_service_1 = require("./../providers/talks.service");
var AgendaComponent = /** @class */ (function () {
    function AgendaComponent(routerSrv, talksSrv) {
        this.routerSrv = routerSrv;
        this.talksSrv = talksSrv;
        // Use the component constructor to inject providers.
    }
    AgendaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.talksSrv.getTalks().subscribe(function (data) { return _this._dataItems = data; });
    };
    AgendaComponent.prototype.goToDetails = function (talk) {
        this.routerSrv.navigateByUrl("talk-details/" + talk.id);
    };
    AgendaComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    Object.defineProperty(AgendaComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    AgendaComponent = __decorate([
        core_1.Component({
            selector: "Agenda",
            moduleId: module.id,
            templateUrl: "./agenda.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, talks_service_1.TalksProvider])
    ], AgendaComponent);
    return AgendaComponent;
}());
exports.AgendaComponent = AgendaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbmRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFnZW5kYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBRS9ELGtEQUFvRDtBQUdwRCw4REFBNkQ7QUFPN0Q7SUFHSSx5QkFBb0IsU0FBMkIsRUFBVSxRQUF1QjtRQUE1RCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDNUUscURBQXFEO0lBQ3pELENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxJQUFTO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGtCQUFnQixJQUFJLENBQUMsRUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDJDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBSSxzQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUF0QlEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FJaUMseUJBQWdCLEVBQW9CLDZCQUFhO09BSHZFLGVBQWUsQ0F1QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuXG5pbXBvcnQgeyBUYWxrc1Byb3ZpZGVyIH0gZnJvbSBcIi4vLi4vcHJvdmlkZXJzL3RhbGtzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQWdlbmRhXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FnZW5kYS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFnZW5kYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJTcnY6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgdGFsa3NTcnY6IFRhbGtzUHJvdmlkZXIpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YWxrc1Nydi5nZXRUYWxrcygpLnN1YnNjcmliZSgoZGF0YSkgPT4gdGhpcy5fZGF0YUl0ZW1zID0gZGF0YSk7XG4gICAgfVxuXG4gICAgZ29Ub0RldGFpbHModGFsazogYW55KSB7XG4gICAgICAgIHRoaXMucm91dGVyU3J2Lm5hdmlnYXRlQnlVcmwoYHRhbGstZGV0YWlscy8ke3RhbGsuaWR9YCk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxufVxuIl19