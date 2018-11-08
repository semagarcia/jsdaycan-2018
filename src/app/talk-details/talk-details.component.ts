import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { isAvailable, requestPermissions, takePicture } from "nativescript-camera";
import * as app from "tns-core-modules/application";
import { ImageAsset } from "tns-core-modules/image-asset";

import { TalksProvider } from "./../providers/talks.service";

import { LocalNotifications } from "nativescript-local-notifications";
import { Color } from "tns-core-modules/color";

@Component({
    selector: "TalkDetails",
    moduleId: module.id,
    templateUrl: "./talk-details.component.html",
    styleUrls: ["./talk-details.styles.scss"]
})
export class TalkDetailsComponent implements OnInit {
    talkData;
    imageTaken: Array<ImageAsset>;
    saveToGallery: boolean = true;
    keepAspectRatio: boolean = true;
    width: number = 300;
    height: number = 300;

    constructor(
        private route: ActivatedRoute,
        private routerExtSrv: RouterExtensions,
        private talksSrv: TalksProvider
    ) {
        this.imageTaken = [];
        this.route.params.subscribe((params) => {
            console.log('Params: ', params);
            this.talkData = this.talksSrv.getTalkById(params.id);
            console.log('TalkData: ', this.talkData);
        });
    }

    ngOnInit(): void {
        // Init your component properties here.
        LocalNotifications.hasPermission();
        this.x();
    }

    goBack(): void {
        this.routerExtSrv.backToPreviousPage();
    }

    x() {
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
    }

    onTap($event) {
        requestPermissions();

        const options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };

        takePicture(options)
            .then((imageAsset: ImageAsset) => {
                this.imageTaken.push(imageAsset);
                this.imageTaken.push(imageAsset);
                this.imageTaken.push(imageAsset);
                console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            }).catch((err) => {
                console.log(err.message);
            });
    }
}
