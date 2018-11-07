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
            result = slot.talks.filter(function (t) { return t.id === talkId; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsa3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhbGtzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQXNDO0FBR3RDO0lBSUk7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUUsQ0FBQztRQUN4RixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1I7Z0JBQ0ksUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsS0FBSyxFQUFFO29CQUNIO3dCQUNJLEVBQUUsRUFBRSxVQUFVO3dCQUNkLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixLQUFLLEVBQUUsbUNBQW1DO3dCQUMxQyxXQUFXLEVBQUUsNEJBQTRCO3dCQUN6QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxZQUFZO3FCQUN0QjtvQkFDRDt3QkFDSSxFQUFFLEVBQUUsVUFBVTt3QkFDZCxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsS0FBSyxFQUFFLDZCQUE2Qjt3QkFDcEMsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0Q7d0JBQ0ksRUFBRSxFQUFFLFVBQVU7d0JBQ2QsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLEtBQUssRUFBRSwyREFBMkQ7d0JBQ2xFLFdBQVcsRUFBRSw0QkFBNEI7d0JBQ3pDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsS0FBSyxFQUFFO29CQUNIO3dCQUNJLEVBQUUsRUFBRSxVQUFVO3dCQUNkLE9BQU8sRUFBRSxnQkFBZ0I7d0JBQ3pCLEtBQUssRUFBRSx1Q0FBdUM7d0JBQzlDLFdBQVcsRUFBRSw0QkFBNEI7d0JBQ3pDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFlBQVk7cUJBQ3RCO29CQUNEO3dCQUNJLEVBQUUsRUFBRSxVQUFVO3dCQUNkLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixLQUFLLEVBQUUsb0JBQW9CO3dCQUMzQixXQUFXLEVBQUUsNEJBQTRCO3dCQUN6QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtvQkFDRDt3QkFDSSxFQUFFLEVBQUUsVUFBVTt3QkFDZCxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsS0FBSyxFQUFFLDJEQUEyRDt3QkFDbEUsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsS0FBSyxFQUFFLFFBQVE7cUJBQ2xCO2lCQUNKO2FBQ0o7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsU0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLE1BQWM7UUFDdEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNuQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBZixDQUFlLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQXJGUSxhQUFhO1FBRHpCLGlCQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7O09BQ3RCLGFBQWEsQ0F1RnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXZGRCxJQXVGQztBQXZGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46IFwicm9vdFwiIH0pXG5leHBvcnQgY2xhc3MgVGFsa3NQcm92aWRlciB7XG4gICAgcHJpdmF0ZSBkYXRhOiBBcnJheTxhbnk+O1xuICAgIHByaXZhdGUgdHJhY2tQbGFjZXM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50cmFja1BsYWNlcyA9IFsgXCJUUkFDSyAxIC0gQVVMQSBNQUdOQVwiLCBcIlRSQUNLIDIgLSBBVUxBIDEyXCIsIFwiVFJBQ0sgMyAtIEFVTEEgMTNcIiBdO1xuICAgICAgICB0aGlzLmRhdGEgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2xvdFRpbWU6IFwiOTowMCAtIDEwOjAwIEFNXCIsXG4gICAgICAgICAgICAgICAgdGFsa3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiMTVmZDVlZDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiTmFpYXJhIEFiYXJvYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIGFuaW1hdGlvbi4gVGhlIG5ldyBnZW5lcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBibGEgYmxhIGJsYS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHRoaXMudHJhY2tQbGFjZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlRBTEtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBcIkludGVybWVkaW9cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIxYjA4NTg2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogXCJZb2RyYSBMw7NwZXpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pcmEgbG8gcXVlIGhhIGhlY2hvLi4uIEdpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gYmxhIGJsYSBibGEuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrOiB0aGlzLnRyYWNrUGxhY2VzWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJUQUxLXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJCw6FzaWNvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiNzllZGQ2NGNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiU2VtYSBHYXJjw61hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZXNhcnJvbGxhIHR1IGFwcCBtw7N2aWwgbmF0aXZhIGNvbiBOYXRpdmVTY3JpcHQgeSBBbmd1bGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBibGEgYmxhIGJsYS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHRoaXMudHJhY2tQbGFjZXNbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIldPUktTSE9QXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJCw6FzaWNvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2xvdFRpbWU6IFwiMTA6MDAgLSAxMTowMCBBTVwiLFxuICAgICAgICAgICAgICAgIHRhbGtzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImM2MzNkNTk4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkF4ZWwgSGVybsOhbmRlelwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwidXNlUmVhY3QoKSAtIFVuYSBpbnRyb2R1Y2Npw7NuIGEgSG9va3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGJsYSBibGEgYmxhLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjazogdGhpcy50cmFja1BsYWNlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVEFMS1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IFwiSW50ZXJtZWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImFhYWJjNmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiBcIk1hbnVlbCBQYWRyw7NuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWJtaWRpICsgUmVhY3QuanNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGJsYSBibGEgYmxhLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjazogdGhpcy50cmFja1BsYWNlc1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVEFMS1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IFwiQsOhc2ljb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjJiNGM1ZWI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiBcIlNlbWEgR2FyY8OtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVzYXJyb2xsYSB0dSBhcHAgbcOzdmlsIG5hdGl2YSBjb24gTmF0aXZlU2NyaXB0IHkgQW5ndWxhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gYmxhIGJsYSBibGEuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrOiB0aGlzLnRyYWNrUGxhY2VzWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJXT1JLU0hPUFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IFwiQsOhc2ljb1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZ2V0VGFsa3MoKSB7XG4gICAgICAgIHJldHVybiBvZih0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIGdldFRhbGtCeUlkKHRhbGtJZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoc2xvdCkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gc2xvdC50YWxrcy5maWx0ZXIoKHQpID0+IHQuaWQgPT09IHRhbGtJZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59XG4iXX0=