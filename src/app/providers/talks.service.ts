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
                        speaker: "Iván Bacallado",
                        speakerBio: "I’m an enthusiast about Javascript and all it’s ecosystem. I'm a fan of Facebook ecosystem (React, React Native, GraphQl...). I like to use good practices, linters and formatters because I think is very important to keep the projects clean and divide into small elements that resolves just one problem.",
                        speakerAvatar: "https://jsdaycanarias.com/assets/img/speakers/ivan-bacallado.png",
                        title: "Realidad virtual y Aumentada con React Native y ViroReact",
                        description: "Desarrollar aplicaciones basadas en Realidad Virtual o Realidad Aumentada nunca ha sido tan sencillo con Viro y React Native. Veremos las diferencias entre AR y VR, cómo crear un proyecto desde cero, repasaremos los componentes básicos, cómo utilizarlos y por último, veremos las aplicaciones en el mundo real de la AR y VR.",
                        track: this.trackPlaces[0],
                        type: "TALK",
                        level: "Avanzado"
                    },
                    {
                        id: "1b08586e",
                        speaker: "Yodra López",
                        speakerBio: "CS Engineer on System Administration. I'm currently working as fullstack developer at LeanMind. In addition, I'm teacher at a youth entrepreneurship program focused on Fullstack Web Development at EOI (Industrial Management School). On my professional live I've been working on different technological project in order to up-to-date the Government of the Canary Islands systems.",
                        speakerAvatar: "https://jsdaycanarias.com/assets/img/speakers/yodra-lopez.png",
                        title: "Mira lo que ha hecho... Git",
                        description: "Seguro que más de una vez has oído o incluso has dicho tu mismo 'Mira lo que hizo GIT', o algo como 'GIT se volvió loco', 'GIT lo mergeó mal!'. En el fondo sabes que no es GIT quien lo hizo mal. Vamos a ver los típicos errores que se cometen y algunos no tan típicos, por desconocimiento del uso de GIT, confusión con otros VCS; pero además, veremos algunas reglas/trucos a tener en cuenta para evitarlo.",
                        track: this.trackPlaces[1],
                        type: "TALK",
                        level: "Básico"
                    },
                    {
                        id: "79edd64c",
                        speaker: "Sema García",
                        speakerBio: "JavaScript architect and clean coder, hobby pianist. Cordovan. I love things well done. There is always something new to be able to learn.",
                        speakerAvatar: "https://jsdaycanarias.com/assets/img/speakers/sema-garcia.png",
                        title: "Desarrolla tu app móvil nativa con NativeScript y Angular",
                        description: "Introducción al desarrollo de apps para dispositivos móviles (Android e iOS) utilizando el framework NativeScript. NS está basado en tecnologías web (JavaScript / TypeScript), que junto a la plataforma Angular, nos permitirá crear aplicaciones nativas.",
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
                        speakerBio: "Fullstack developer. Defender of typescript. Typescript is the best thing that has happened to javascript since async / await.",
                        speakerAvatar: "https://jsdaycanarias.com/assets/img/speakers/axel-hernandez.png",
                        title: "useReact() - Una introducción a Hooks",
                        description: "Recientemente el equipo de React anunció Hooks, una funcionalidad que nos va a permitir compartir lógica en nuestros componentes y que cambiará la forma en la que escribimos nuestros componentes.",
                        track: this.trackPlaces[0],
                        type: "TALK",
                        level: "Intermedio"
                    },
                    {
                        id: "aaabc6ed",
                        speaker: "Dailos Díaz",
                        speakerBio: "I have an experience of more than five years in the computer sector where I have worked as a programmer, analyst and team coordinator. In addition to this, I previously worked for more than five years in the industrial engineering sector, designing, planning, executing and coordinating technical projects.",
                        speakerAvatar: "https://jsdaycanarias.com/assets/img/speakers/dailos-diaz.png",
                        title: "De API REST a GraphQL en 45 minutos o menos",
                        description: "Partiendo de una API REST genérica, analizaremos qué aporta de nuevo GraphQL, cómo podemos integrarlo con nuestros proyectos actuales y los puntos clave para empezar a entender esta nueva herramienta, que está llamada a cambiar la manera con la que nuestras aplicaciones cliente intercambiarán datos con los servidores.",
                        track: this.trackPlaces[1],
                        type: "TALK",
                        level: "Intermedio"
                    },
                    {
                        id: "2b4c5eb7",
                        speaker: "Sema García",
                        speakerBio: "JavaScript architect and clean coder, hobby pianist. Cordovan. I love things well done. There is always something new to be able to learn.",
                        speakerAvatar: "https://jsdaycanarias.com/assets/img/speakers/sema-garcia.png",
                        title: "Desarrolla tu app móvil nativa con NativeScript y Angular",
                        description: "Continuación del taller. Seguiremos construyendo nuestra aplicación con NativeScript de la mano de Sema.",
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
