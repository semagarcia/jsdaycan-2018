import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { isAvailable, requestPermissions, takePicture } from "nativescript-camera";
import * as app from "tns-core-modules/application";
import { ImageAsset } from "tns-core-modules/image-asset";

import { TalksProvider } from "./../providers/talks.service";

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
    }

    goBack(): void {
        this.routerExtSrv.backToPreviousPage();
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
