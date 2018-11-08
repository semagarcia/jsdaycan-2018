"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_camera_1 = require("nativescript-camera");
var talks_service_1 = require("./../providers/talks.service");
var nativescript_local_notifications_1 = require("nativescript-local-notifications");
var color_1 = require("tns-core-modules/color");
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
        nativescript_local_notifications_1.LocalNotifications.hasPermission();
        this.x();
    };
    TalkDetailsComponent.prototype.goBack = function () {
        this.routerExtSrv.backToPreviousPage();
    };
    TalkDetailsComponent.prototype.x = function () {
        nativescript_local_notifications_1.LocalNotifications.schedule([{
                id: 1,
                title: 'The title',
                body: 'Recurs every minute until cancelled',
                ticker: 'The ticker',
                color: new color_1.Color("red"),
                badge: 1,
                groupedMessages: ["The first", "Second", "Keep going", "one more..", "OK Stop"],
                groupSummary: "Summary of the grouped messages above",
                ongoing: true,
                icon: 'res://heart',
                image: "https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg",
                thumbnail: true,
                interval: 'minute',
                channel: 'My Channel',
                sound: "customsound-ios.wav",
                at: new Date(new Date().getTime() + (10 * 1000)) // 10 seconds from now
            }]).then(function () {
            console.log("Notification scheduled");
        }, function (error) {
            console.log("scheduling error: " + error);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsay1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhbGstZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUMvRCwyREFBbUY7QUFJbkYsOERBQTZEO0FBRTdELHFGQUFzRTtBQUN0RSxnREFBK0M7QUFRL0M7SUFRSSw4QkFDWSxLQUFxQixFQUNyQixZQUE4QixFQUM5QixRQUF1QjtRQUhuQyxpQkFXQztRQVZXLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBUm5DLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQU9qQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksdUNBQXVDO1FBQ3ZDLHFEQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxxQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxnQ0FBQyxHQUFEO1FBQ0kscURBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUscUNBQXFDO2dCQUMzQyxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsS0FBSyxFQUFFLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQztnQkFDdkIsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsZUFBZSxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQztnQkFDL0UsWUFBWSxFQUFFLHVDQUF1QztnQkFDckQsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEtBQUssRUFBRSx3RUFBd0U7Z0JBQy9FLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsRUFBRSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7YUFDeEUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FDSixDQUFDO0lBQ1IsQ0FBQztJQUVELG9DQUFLLEdBQUwsVUFBTSxNQUFNO1FBQVosaUJBbUJDO1FBbEJHLHdDQUFrQixFQUFFLENBQUM7UUFFckIsSUFBTSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDcEMsQ0FBQztRQUVGLGlDQUFXLENBQUMsT0FBTyxDQUFDO2FBQ2YsSUFBSSxDQUFDLFVBQUMsVUFBc0I7WUFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTVFUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBVXFCLHVCQUFjO1lBQ1AseUJBQWdCO1lBQ3BCLDZCQUFhO09BWDFCLG9CQUFvQixDQTZFaEM7SUFBRCwyQkFBQztDQUFBLEFBN0VELElBNkVDO0FBN0VZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGlzQXZhaWxhYmxlLCByZXF1ZXN0UGVybWlzc2lvbnMsIHRha2VQaWN0dXJlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0XCI7XG5cbmltcG9ydCB7IFRhbGtzUHJvdmlkZXIgfSBmcm9tIFwiLi8uLi9wcm92aWRlcnMvdGFsa3Muc2VydmljZVwiO1xuXG5pbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVGFsa0RldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGFsay1kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3RhbGstZGV0YWlscy5zdHlsZXMuc2Nzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBUYWxrRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgdGFsa0RhdGE7XG4gICAgaW1hZ2VUYWtlbjogQXJyYXk8SW1hZ2VBc3NldD47XG4gICAgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IHRydWU7XG4gICAga2VlcEFzcGVjdFJhdGlvOiBib29sZWFuID0gdHJ1ZTtcbiAgICB3aWR0aDogbnVtYmVyID0gMzAwO1xuICAgIGhlaWdodDogbnVtYmVyID0gMzAwO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dFNydjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSB0YWxrc1NydjogVGFsa3NQcm92aWRlclxuICAgICkge1xuICAgICAgICB0aGlzLmltYWdlVGFrZW4gPSBbXTtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXJhbXM6ICcsIHBhcmFtcyk7XG4gICAgICAgICAgICB0aGlzLnRhbGtEYXRhID0gdGhpcy50YWxrc1Nydi5nZXRUYWxrQnlJZChwYXJhbXMuaWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RhbGtEYXRhOiAnLCB0aGlzLnRhbGtEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuaGFzUGVybWlzc2lvbigpO1xuICAgICAgICB0aGlzLngoKTtcbiAgICB9XG5cbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0U3J2LmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIHgoKSB7XG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ1RoZSB0aXRsZScsXG4gICAgICAgICAgICBib2R5OiAnUmVjdXJzIGV2ZXJ5IG1pbnV0ZSB1bnRpbCBjYW5jZWxsZWQnLFxuICAgICAgICAgICAgdGlja2VyOiAnVGhlIHRpY2tlcicsXG4gICAgICAgICAgICBjb2xvcjogbmV3IENvbG9yKFwicmVkXCIpLFxuICAgICAgICAgICAgYmFkZ2U6IDEsXG4gICAgICAgICAgICBncm91cGVkTWVzc2FnZXM6IFtcIlRoZSBmaXJzdFwiLCBcIlNlY29uZFwiLCBcIktlZXAgZ29pbmdcIiwgXCJvbmUgbW9yZS4uXCIsIFwiT0sgU3RvcFwiXSwgLy9hbmRyb2lkIG9ubHlcbiAgICAgICAgICAgIGdyb3VwU3VtbWFyeTogXCJTdW1tYXJ5IG9mIHRoZSBncm91cGVkIG1lc3NhZ2VzIGFib3ZlXCIsIC8vYW5kcm9pZCBvbmx5XG4gICAgICAgICAgICBvbmdvaW5nOiB0cnVlLCAvLyBtYWtlcyB0aGUgbm90aWZpY2F0aW9uIG9uZ29pbmcgKEFuZHJvaWQgb25seSlcbiAgICAgICAgICAgIGljb246ICdyZXM6Ly9oZWFydCcsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8xMjAwLzEqYzNjUXZZSnJWZXp2X0F6MENvRGNiQS5qcGVnXCIsXG4gICAgICAgICAgICB0aHVtYm5haWw6IHRydWUsXG4gICAgICAgICAgICBpbnRlcnZhbDogJ21pbnV0ZScsXG4gICAgICAgICAgICBjaGFubmVsOiAnTXkgQ2hhbm5lbCcsIC8vIGRlZmF1bHQ6ICdDaGFubmVsJ1xuICAgICAgICAgICAgc291bmQ6IFwiY3VzdG9tc291bmQtaW9zLndhdlwiLCAvLyBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0IHNvdW5kIG9uIEFuZHJvaWRcbiAgICAgICAgICAgIGF0OiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICgxMCAqIDEwMDApKSAvLyAxMCBzZWNvbmRzIGZyb20gbm93XG4gICAgICAgICAgfV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHNjaGVkdWxlZFwiKTtcbiAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2hlZHVsaW5nIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgb25UYXAoJGV2ZW50KSB7XG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICBrZWVwQXNwZWN0UmF0aW86IHRoaXMua2VlcEFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5XG4gICAgICAgIH07XG5cbiAgICAgICAgdGFrZVBpY3R1cmUob3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0OiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVRha2VuLnB1c2goaW1hZ2VBc3NldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVRha2VuLnB1c2goaW1hZ2VBc3NldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVRha2VuLnB1c2goaW1hZ2VBc3NldCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaXplOiBcIiArIGltYWdlQXNzZXQub3B0aW9ucy53aWR0aCArIFwieFwiICsgaW1hZ2VBc3NldC5vcHRpb25zLmhlaWdodCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19