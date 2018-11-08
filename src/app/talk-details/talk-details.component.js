"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_camera_1 = require("nativescript-camera");
var talks_service_1 = require("./../providers/talks.service");
var TalkDetailsComponent = /** @class */ (function () {
    function TalkDetailsComponent(route, routerExtSrv, talksSrv) {
        var _this = this;
        this.route = route;
        this.routerExtSrv = routerExtSrv;
        this.talksSrv = talksSrv;
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = 300;
        this.height = 300;
        this.imageTaken = [];
        this.route.params.subscribe(function (params) {
            console.log('Params: ', params);
            _this.talkData = _this.talksSrv.getTalkById(params.id);
            console.log('TalkData: ', _this.talkData);
        });
    }
    TalkDetailsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    TalkDetailsComponent.prototype.goBack = function () {
        this.routerExtSrv.backToPreviousPage();
    };
    TalkDetailsComponent.prototype.onTap = function ($event) {
        var _this = this;
        nativescript_camera_1.requestPermissions();
        var options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };
        nativescript_camera_1.takePicture(options)
            .then(function (imageAsset) {
            _this.imageTaken.push(imageAsset);
            _this.imageTaken.push(imageAsset);
            _this.imageTaken.push(imageAsset);
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    TalkDetailsComponent = __decorate([
        core_1.Component({
            selector: "TalkDetails",
            moduleId: module.id,
            templateUrl: "./talk-details.component.html",
            styleUrls: ["./talk-details.styles.scss"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.RouterExtensions,
            talks_service_1.TalksProvider])
    ], TalkDetailsComponent);
    return TalkDetailsComponent;
}());
exports.TalkDetailsComponent = TalkDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsay1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhbGstZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUMvRCwyREFBbUY7QUFJbkYsOERBQTZEO0FBUTdEO0lBUUksOEJBQ1ksS0FBcUIsRUFDckIsWUFBOEIsRUFDOUIsUUFBdUI7UUFIbkMsaUJBV0M7UUFWVyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQVJuQyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFPakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0NBQUssR0FBTCxVQUFNLE1BQU07UUFBWixpQkFtQkM7UUFsQkcsd0NBQWtCLEVBQUUsQ0FBQztRQUVyQixJQUFNLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNwQyxDQUFDO1FBRUYsaUNBQVcsQ0FBQyxPQUFPLENBQUM7YUFDZixJQUFJLENBQUMsVUFBQyxVQUFzQjtZQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBaERRLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FVcUIsdUJBQWM7WUFDUCx5QkFBZ0I7WUFDcEIsNkJBQWE7T0FYMUIsb0JBQW9CLENBaURoQztJQUFELDJCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgaXNBdmFpbGFibGUsIHJlcXVlc3RQZXJtaXNzaW9ucywgdGFrZVBpY3R1cmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXRcIjtcblxuaW1wb3J0IHsgVGFsa3NQcm92aWRlciB9IGZyb20gXCIuLy4uL3Byb3ZpZGVycy90YWxrcy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlRhbGtEZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RhbGstZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90YWxrLWRldGFpbHMuc3R5bGVzLnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGFsa0RldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRhbGtEYXRhO1xuICAgIGltYWdlVGFrZW46IEFycmF5PEltYWdlQXNzZXQ+O1xuICAgIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGtlZXBBc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XG4gICAgd2lkdGg6IG51bWJlciA9IDMwMDtcbiAgICBoZWlnaHQ6IG51bWJlciA9IDMwMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRTcnY6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgdGFsa3NTcnY6IFRhbGtzUHJvdmlkZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5pbWFnZVRha2VuID0gW107XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGFyYW1zOiAnLCBwYXJhbXMpO1xuICAgICAgICAgICAgdGhpcy50YWxrRGF0YSA9IHRoaXMudGFsa3NTcnYuZ2V0VGFsa0J5SWQocGFyYW1zLmlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYWxrRGF0YTogJywgdGhpcy50YWxrRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0U3J2LmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIG9uVGFwKCRldmVudCkge1xuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbnMoKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAga2VlcEFzcGVjdFJhdGlvOiB0aGlzLmtlZXBBc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHNhdmVUb0dhbGxlcnk6IHRoaXMuc2F2ZVRvR2FsbGVyeVxuICAgICAgICB9O1xuXG4gICAgICAgIHRha2VQaWN0dXJlKG9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbigoaW1hZ2VBc3NldDogSW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VUYWtlbi5wdXNoKGltYWdlQXNzZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VUYWtlbi5wdXNoKGltYWdlQXNzZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VUYWtlbi5wdXNoKGltYWdlQXNzZXQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2l6ZTogXCIgKyBpbWFnZUFzc2V0Lm9wdGlvbnMud2lkdGggKyBcInhcIiArIGltYWdlQXNzZXQub3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==