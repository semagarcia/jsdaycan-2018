import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class TalksProvider {
    private data: Array<any>;
    private trackPlaces;

    constructor() {
        this.trackPlaces = [ "TRACK 1 - AULA MAGNA", "TRACK 2 - AULA 12", "TRACK 3 - AULA 13" ];
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

    getTalks() {
        return of(this.data);
    }

    getTalkById(talkId: string) {
        let result = null;
        this.data.forEach((slot) => {
            const slotTime = slot.slotTime;
            const temp = slot.talks.filter((t) => t.id === talkId);
            if (temp && temp.length > 0) {
                temp[0].slotTime = slotTime;
                result = temp[0];
            }
        });

        return result;
    }

}
