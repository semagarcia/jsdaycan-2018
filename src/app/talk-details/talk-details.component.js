"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_camera_1 = require("nativescript-camera");
var nativescript_share_file_1 = require("nativescript-share-file");
var app = require("tns-core-modules/application");
var talks_service_1 = require("./../providers/talks.service");
// import { LocalNotifications } from "nativescript-local-notifications";
// import { Color } from "tns-core-modules/color";
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
        //LocalNotifications.hasPermission();
        //this.x();
    };
    TalkDetailsComponent.prototype.goBack = function () {
        this.routerExtSrv.backToPreviousPage();
    };
    /*x() {
        LocalNotifications.schedule([{
            id: 1,
            title: 'The title',
            body: 'Recurs every minute until cancelled',
            ticker: 'The ticker',
            color: new Color("red"),
            badge: 1,
            groupedMessages: ["The first", "Second", "Keep going", "one more..", "OK Stop"], //android only
            groupSummary: "Summary of the grouped messages above", //android only
            ongoing: true, // makes the notification ongoing (Android only)
            icon: 'res://heart',
            image: "https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg",
            thumbnail: true,
            interval: 'minute',
            channel: 'My Channel', // default: 'Channel'
            sound: "customsound-ios.wav", // falls back to the default sound on Android
            at: new Date(new Date().getTime() + (10 * 1000)) // 10 seconds from now
          }]).then(() => {
                console.log("Notification scheduled");
              }, (error) => {
                console.log("scheduling error: " + error);
              }
          );
    }*/
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
            /*console.log("imageAsset1: ", imageAsset);
            console.log("imageAsset2: ", imageAsset.android);
            console.log("imageAsset3: ", imageAsset.ios);
            console.log("imageAsset4: ", imageAsset.nativeImage);*/
            _this.imageTaken.push(imageAsset);
            _this.imageTaken.push(imageAsset);
            _this.imageTaken.push(imageAsset);
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    TalkDetailsComponent.prototype.onImageShare = function (img) {
        this.shareFile = new nativescript_share_file_1.ShareFile();
        this.shareFile.open({
            path: (app.android) ? img.android : img.ios,
            intentTitle: "Share through...",
            rect: {
                x: 110,
                y: 110,
                width: 0,
                height: 0
            },
            options: false,
            animated: true // optional iOS
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsay1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhbGstZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUMvRCwyREFBbUY7QUFDbkYsbUVBQW9EO0FBQ3BELGtEQUFvRDtBQUlwRCw4REFBNkQ7QUFDN0QseUVBQXlFO0FBQ3pFLGtEQUFrRDtBQVFsRDtJQVNJLDhCQUNZLEtBQXFCLEVBQ3JCLFlBQThCLEVBQzlCLFFBQXVCO1FBSG5DLGlCQVdDO1FBVlcsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFSbkMsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixXQUFNLEdBQVcsR0FBRyxDQUFDO1FBT2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7UUFDdkMscUNBQXFDO1FBQ3JDLFdBQVc7SUFDZixDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXdCRztJQUVILG9DQUFLLEdBQUwsVUFBTSxNQUFNO1FBQVosaUJBdUJDO1FBdEJHLHdDQUFrQixFQUFFLENBQUM7UUFFckIsSUFBTSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDcEMsQ0FBQztRQUVGLGlDQUFXLENBQUMsT0FBTyxDQUFDO2FBQ2YsSUFBSSxDQUFDLFVBQUMsVUFBc0I7WUFDekI7OzttRUFHdUQ7WUFDdkQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxHQUFlO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQ0FBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRztZQUMzQyxXQUFXLEVBQUUsa0JBQWtCO1lBQy9CLElBQUksRUFBRTtnQkFDRixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsR0FBRztnQkFDTixLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsQ0FBQzthQUNaO1lBQ0QsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDakMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpHUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBV3FCLHVCQUFjO1lBQ1AseUJBQWdCO1lBQ3BCLDZCQUFhO09BWjFCLG9CQUFvQixDQWtHaEM7SUFBRCwyQkFBQztDQUFBLEFBbEdELElBa0dDO0FBbEdZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGlzQXZhaWxhYmxlLCByZXF1ZXN0UGVybWlzc2lvbnMsIHRha2VQaWN0dXJlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCB7IFNoYXJlRmlsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc2hhcmUtZmlsZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0XCI7XG5cbmltcG9ydCB7IFRhbGtzUHJvdmlkZXIgfSBmcm9tIFwiLi8uLi9wcm92aWRlcnMvdGFsa3Muc2VydmljZVwiO1xuLy8gaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XG4vLyBpbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlRhbGtEZXRhaWxzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RhbGstZGV0YWlscy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi90YWxrLWRldGFpbHMuc3R5bGVzLnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgVGFsa0RldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRhbGtEYXRhO1xuICAgIGltYWdlVGFrZW46IEFycmF5PEltYWdlQXNzZXQ+O1xuICAgIHNoYXJlRmlsZTogU2hhcmVGaWxlO1xuICAgIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGtlZXBBc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XG4gICAgd2lkdGg6IG51bWJlciA9IDMwMDtcbiAgICBoZWlnaHQ6IG51bWJlciA9IDMwMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRTcnY6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgdGFsa3NTcnY6IFRhbGtzUHJvdmlkZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5pbWFnZVRha2VuID0gW107XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUGFyYW1zOiAnLCBwYXJhbXMpO1xuICAgICAgICAgICAgdGhpcy50YWxrRGF0YSA9IHRoaXMudGFsa3NTcnYuZ2V0VGFsa0J5SWQocGFyYW1zLmlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYWxrRGF0YTogJywgdGhpcy50YWxrRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICAgICAgLy9Mb2NhbE5vdGlmaWNhdGlvbnMuaGFzUGVybWlzc2lvbigpO1xuICAgICAgICAvL3RoaXMueCgpO1xuICAgIH1cblxuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRTcnYuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgLyp4KCkge1xuICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6ICdUaGUgdGl0bGUnLFxuICAgICAgICAgICAgYm9keTogJ1JlY3VycyBldmVyeSBtaW51dGUgdW50aWwgY2FuY2VsbGVkJyxcbiAgICAgICAgICAgIHRpY2tlcjogJ1RoZSB0aWNrZXInLFxuICAgICAgICAgICAgY29sb3I6IG5ldyBDb2xvcihcInJlZFwiKSxcbiAgICAgICAgICAgIGJhZGdlOiAxLFxuICAgICAgICAgICAgZ3JvdXBlZE1lc3NhZ2VzOiBbXCJUaGUgZmlyc3RcIiwgXCJTZWNvbmRcIiwgXCJLZWVwIGdvaW5nXCIsIFwib25lIG1vcmUuLlwiLCBcIk9LIFN0b3BcIl0sIC8vYW5kcm9pZCBvbmx5XG4gICAgICAgICAgICBncm91cFN1bW1hcnk6IFwiU3VtbWFyeSBvZiB0aGUgZ3JvdXBlZCBtZXNzYWdlcyBhYm92ZVwiLCAvL2FuZHJvaWQgb25seVxuICAgICAgICAgICAgb25nb2luZzogdHJ1ZSwgLy8gbWFrZXMgdGhlIG5vdGlmaWNhdGlvbiBvbmdvaW5nIChBbmRyb2lkIG9ubHkpXG4gICAgICAgICAgICBpY29uOiAncmVzOi8vaGVhcnQnLFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4taW1hZ2VzLTEubWVkaXVtLmNvbS9tYXgvMTIwMC8xKmMzY1F2WUpyVmV6dl9BejBDb0RjYkEuanBlZ1wiLFxuICAgICAgICAgICAgdGh1bWJuYWlsOiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6ICdtaW51dGUnLFxuICAgICAgICAgICAgY2hhbm5lbDogJ015IENoYW5uZWwnLCAvLyBkZWZhdWx0OiAnQ2hhbm5lbCdcbiAgICAgICAgICAgIHNvdW5kOiBcImN1c3RvbXNvdW5kLWlvcy53YXZcIiwgLy8gZmFsbHMgYmFjayB0byB0aGUgZGVmYXVsdCBzb3VuZCBvbiBBbmRyb2lkXG4gICAgICAgICAgICBhdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoMTAgKiAxMDAwKSkgLy8gMTAgc2Vjb25kcyBmcm9tIG5vd1xuICAgICAgICAgIH1dKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzY2hlZHVsZWRcIik7XG4gICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NoZWR1bGluZyBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgIH0qL1xuXG4gICAgb25UYXAoJGV2ZW50KSB7XG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICBrZWVwQXNwZWN0UmF0aW86IHRoaXMua2VlcEFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5XG4gICAgICAgIH07XG5cbiAgICAgICAgdGFrZVBpY3R1cmUob3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0OiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgLypjb25zb2xlLmxvZyhcImltYWdlQXNzZXQxOiBcIiwgaW1hZ2VBc3NldCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZUFzc2V0MjogXCIsIGltYWdlQXNzZXQuYW5kcm9pZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZUFzc2V0MzogXCIsIGltYWdlQXNzZXQuaW9zKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlQXNzZXQ0OiBcIiwgaW1hZ2VBc3NldC5uYXRpdmVJbWFnZSk7Ki9cbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlVGFrZW4ucHVzaChpbWFnZUFzc2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlVGFrZW4ucHVzaChpbWFnZUFzc2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlVGFrZW4ucHVzaChpbWFnZUFzc2V0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpemU6IFwiICsgaW1hZ2VBc3NldC5vcHRpb25zLndpZHRoICsgXCJ4XCIgKyBpbWFnZUFzc2V0Lm9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkltYWdlU2hhcmUoaW1nOiBJbWFnZUFzc2V0KSB7XG4gICAgICAgIHRoaXMuc2hhcmVGaWxlID0gbmV3IFNoYXJlRmlsZSgpO1xuICAgICAgICB0aGlzLnNoYXJlRmlsZS5vcGVuKHtcbiAgICAgICAgICAgIHBhdGg6IChhcHAuYW5kcm9pZCkgPyBpbWcuYW5kcm9pZCA6IGltZy5pb3MsXG4gICAgICAgICAgICBpbnRlbnRUaXRsZTogXCJTaGFyZSB0aHJvdWdoLi4uXCIsIC8vIG9wdGlvbmFsIEFuZHJvaWRcbiAgICAgICAgICAgIHJlY3Q6IHsgLy8gb3B0aW9uYWwgaVBhZFxuICAgICAgICAgICAgICAgIHg6IDExMCxcbiAgICAgICAgICAgICAgICB5OiAxMTAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczogZmFsc2UsIC8vIG9wdGlvbmFsIGlPU1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUgLy8gb3B0aW9uYWwgaU9TXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==