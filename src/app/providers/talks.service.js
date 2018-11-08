"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var TalksProvider = /** @class */ (function () {
    function TalksProvider() {
        this.trackPlaces = ["TRACK 1 - AULA MAGNA", "TRACK 2 - AULA 12", "TRACK 3 - AULA 13"];
        this.data = [
            {
                slotTime: "9:00 - 10:00 AM",
                talks: [
                    {
                        id: "15fd5ed5",
                        speaker: "Naiara Abaroa",
                        title: "Web animation. The new generation",
                        description: "Lorem ipsum bla bla bla...",
                        track: this.trackPlaces[0],
                        type: "TALK",
                        level: "Intermedio"
                    },
                    {
                        id: "1b08586e",
                        speaker: "Yodra López",
                        title: "Mira lo que ha hecho... Git",
                        description: "Lorem ipsum bla bla bla...",
                        track: this.trackPlaces[1],
                        type: "TALK",
                        level: "Básico"
                    },
                    {
                        id: "79edd64c",
                        speaker: "Sema García",
                        title: "Desarrolla tu app móvil nativa con NativeScript y Angular",
                        description: "Lorem ipsum bla bla bla...",
                        track: this.trackPlaces[2],
                        type: "WORKSHOP",
                        level: "Básico"
                    }
                ]
            },
            {
                slotTime: "10:00 - 11:00 AM",
                talks: [
                    {
                        id: "c633d598",
                        speaker: "Axel Hernández",
                        title: "useReact() - Una introducción a Hooks",
                        description: "Lorem ipsum bla bla bla...",
                        track: this.trackPlaces[0],
                        type: "TALK",
                        level: "Intermedio"
                    },
                    {
                        id: "aaabc6ed",
                        speaker: "Manuel Padrón",
                        title: "Webmidi + React.js",
                        description: "Lorem ipsum bla bla bla...",
                        track: this.trackPlaces[1],
                        type: "TALK",
                        level: "Básico"
                    },
                    {
                        id: "2b4c5eb7",
                        speaker: "Sema García",
                        title: "Desarrolla tu app móvil nativa con NativeScript y Angular",
                        description: "Lorem ipsum bla bla bla...",
                        track: this.trackPlaces[2],
                        type: "WORKSHOP",
                        level: "Básico"
                    }
                ]
            }
        ];
    }
    TalksProvider.prototype.getTalks = function () {
        return rxjs_1.of(this.data);
    };
    TalksProvider.prototype.getTalkById = function (talkId) {
        var result = null;
        this.data.forEach(function (slot) {
            var slotTime = slot.slotTime;
            var temp = slot.talks.filter(function (t) { return t.id === talkId; });
            if (temp && temp.length > 0) {
                temp[0].slotTime = slotTime;
                result = temp[0];
            }
        });
        return result;
    };
    TalksProvider = __decorate([
        core_1.Injectable({ providedIn: "root" }),
        __metadata("design:paramtypes", [])
    ], TalksProvider);
    return TalksProvider;
}());
exports.TalksProvider = TalksProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsa3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhbGtzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQXNDO0FBR3RDO0lBSUk7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUUsQ0FBQztRQUN4RixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1I7Z0JBQ0ksUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsS0FBSyxFQUFFO29CQUNIO3dCQUNJLEVBQUUsRUFBRSxVQUFVO3dCQUNkLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixLQUFLLEVBQUUsbUNBQW1DO3dCQUMxQyxXQUFXLEVBQUUsNEJBQTRCO3dCQUN6QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxZQUFZO3FCQUN0QjtvQkFDRDt3QkFDSSxFQUFFLEVBQUUsVUFBVTt3QkFDZCxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsS0FBSyxFQUFFLDZCQUE2Qjt3QkFDcEMsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0Q7d0JBQ0ksRUFBRSxFQUFFLFVBQVU7d0JBQ2QsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLEtBQUssRUFBRSwyREFBMkQ7d0JBQ2xFLFdBQVcsRUFBRSw0QkFBNEI7d0JBQ3pDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsS0FBSyxFQUFFO29CQUNIO3dCQUNJLEVBQUUsRUFBRSxVQUFVO3dCQUNkLE9BQU8sRUFBRSxnQkFBZ0I7d0JBQ3pCLEtBQUssRUFBRSx1Q0FBdUM7d0JBQzlDLFdBQVcsRUFBRSw0QkFBNEI7d0JBQ3pDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFlBQVk7cUJBQ3RCO29CQUNEO3dCQUNJLEVBQUUsRUFBRSxVQUFVO3dCQUNkLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixLQUFLLEVBQUUsb0JBQW9CO3dCQUMzQixXQUFXLEVBQUUsNEJBQTRCO3dCQUN6QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtvQkFDRDt3QkFDSSxFQUFFLEVBQUUsVUFBVTt3QkFDZCxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsS0FBSyxFQUFFLDJEQUEyRDt3QkFDbEUsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsS0FBSyxFQUFFLFFBQVE7cUJBQ2xCO2lCQUNKO2FBQ0o7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsU0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLE1BQWM7UUFDdEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNuQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWYsQ0FBZSxDQUFDLENBQUM7WUFDdkQsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQzVCLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBMUZRLGFBQWE7UUFEekIsaUJBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7T0FDdEIsYUFBYSxDQTRGekI7SUFBRCxvQkFBQztDQUFBLEFBNUZELElBNEZDO0FBNUZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogXCJyb290XCIgfSlcbmV4cG9ydCBjbGFzcyBUYWxrc1Byb3ZpZGVyIHtcbiAgICBwcml2YXRlIGRhdGE6IEFycmF5PGFueT47XG4gICAgcHJpdmF0ZSB0cmFja1BsYWNlcztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRyYWNrUGxhY2VzID0gWyBcIlRSQUNLIDEgLSBBVUxBIE1BR05BXCIsIFwiVFJBQ0sgMiAtIEFVTEEgMTJcIiwgXCJUUkFDSyAzIC0gQVVMQSAxM1wiIF07XG4gICAgICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzbG90VGltZTogXCI5OjAwIC0gMTA6MDAgQU1cIixcbiAgICAgICAgICAgICAgICB0YWxrczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIxNWZkNWVkNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogXCJOYWlhcmEgQWJhcm9hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgYW5pbWF0aW9uLiBUaGUgbmV3IGdlbmVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGJsYSBibGEgYmxhLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjazogdGhpcy50cmFja1BsYWNlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVEFMS1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IFwiSW50ZXJtZWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjFiMDg1ODZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiBcIllvZHJhIEzDs3BlelwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTWlyYSBsbyBxdWUgaGEgaGVjaG8uLi4gR2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBibGEgYmxhIGJsYS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHRoaXMudHJhY2tQbGFjZXNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlRBTEtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBcIkLDoXNpY29cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCI3OWVkZDY0Y1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogXCJTZW1hIEdhcmPDrWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlc2Fycm9sbGEgdHUgYXBwIG3Ds3ZpbCBuYXRpdmEgY29uIE5hdGl2ZVNjcmlwdCB5IEFuZ3VsYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGJsYSBibGEgYmxhLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjazogdGhpcy50cmFja1BsYWNlc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiV09SS1NIT1BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBcIkLDoXNpY29cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzbG90VGltZTogXCIxMDowMCAtIDExOjAwIEFNXCIsXG4gICAgICAgICAgICAgICAgdGFsa3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYzYzM2Q1OThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiQXhlbCBIZXJuw6FuZGV6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJ1c2VSZWFjdCgpIC0gVW5hIGludHJvZHVjY2nDs24gYSBIb29rc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gYmxhIGJsYSBibGEuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrOiB0aGlzLnRyYWNrUGxhY2VzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUQUxLXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJJbnRlcm1lZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYWFhYmM2ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiTWFudWVsIFBhZHLDs25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYm1pZGkgKyBSZWFjdC5qc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gYmxhIGJsYSBibGEuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrOiB0aGlzLnRyYWNrUGxhY2VzWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUQUxLXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJCw6FzaWNvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMmI0YzVlYjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiU2VtYSBHYXJjw61hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZXNhcnJvbGxhIHR1IGFwcCBtw7N2aWwgbmF0aXZhIGNvbiBOYXRpdmVTY3JpcHQgeSBBbmd1bGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBibGEgYmxhIGJsYS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHRoaXMudHJhY2tQbGFjZXNbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIldPUktTSE9QXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJCw6FzaWNvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBnZXRUYWxrcygpIHtcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VGFsa0J5SWQodGFsa0lkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChzbG90KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbG90VGltZSA9IHNsb3Quc2xvdFRpbWU7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gc2xvdC50YWxrcy5maWx0ZXIoKHQpID0+IHQuaWQgPT09IHRhbGtJZCk7XG4gICAgICAgICAgICBpZiAodGVtcCAmJiB0ZW1wLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0ZW1wWzBdLnNsb3RUaW1lID0gc2xvdFRpbWU7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGVtcFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn1cbiJdfQ==