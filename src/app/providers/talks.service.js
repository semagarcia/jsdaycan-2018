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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFsa3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhbGtzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQXNDO0FBR3RDO0lBSUk7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUUsQ0FBQztRQUN4RixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1I7Z0JBQ0ksUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsS0FBSyxFQUFFO29CQUNIO3dCQUNJLEVBQUUsRUFBRSxVQUFVO3dCQUNkLE9BQU8sRUFBRSxnQkFBZ0I7d0JBQ3pCLFVBQVUsRUFBRSxnVEFBZ1Q7d0JBQzVULGFBQWEsRUFBRSxrRUFBa0U7d0JBQ2pGLEtBQUssRUFBRSwyREFBMkQ7d0JBQ2xFLFdBQVcsRUFBRSxzVUFBc1U7d0JBQ25WLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFVBQVU7cUJBQ3BCO29CQUNEO3dCQUNJLEVBQUUsRUFBRSxVQUFVO3dCQUNkLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixVQUFVLEVBQUUsNFhBQTRYO3dCQUN4WSxhQUFhLEVBQUUsK0RBQStEO3dCQUM5RSxLQUFLLEVBQUUsNkJBQTZCO3dCQUNwQyxXQUFXLEVBQUUsc1pBQXNaO3dCQUNuYSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLElBQUksRUFBRSxNQUFNO3dCQUNaLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtvQkFDRDt3QkFDSSxFQUFFLEVBQUUsVUFBVTt3QkFDZCxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsVUFBVSxFQUFFLDRJQUE0STt3QkFDeEosYUFBYSxFQUFFLCtEQUErRDt3QkFDOUUsS0FBSyxFQUFFLDJEQUEyRDt3QkFDbEUsV0FBVyxFQUFFLDhQQUE4UDt3QkFDM1EsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsS0FBSyxFQUFFLFFBQVE7cUJBQ2xCO2lCQUNKO2FBQ0o7WUFDRDtnQkFDSSxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixLQUFLLEVBQUU7b0JBQ0g7d0JBQ0ksRUFBRSxFQUFFLFVBQVU7d0JBQ2QsT0FBTyxFQUFFLGdCQUFnQjt3QkFDekIsVUFBVSxFQUFFLGdJQUFnSTt3QkFDNUksYUFBYSxFQUFFLGtFQUFrRTt3QkFDakYsS0FBSyxFQUFFLHVDQUF1Qzt3QkFDOUMsV0FBVyxFQUFFLHFNQUFxTTt3QkFDbE4sS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLEVBQUUsTUFBTTt3QkFDWixLQUFLLEVBQUUsWUFBWTtxQkFDdEI7b0JBQ0Q7d0JBQ0ksRUFBRSxFQUFFLFVBQVU7d0JBQ2QsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFVBQVUsRUFBRSxvVEFBb1Q7d0JBQ2hVLGFBQWEsRUFBRSwrREFBK0Q7d0JBQzlFLEtBQUssRUFBRSw2Q0FBNkM7d0JBQ3BELFdBQVcsRUFBRSxpVUFBaVU7d0JBQzlVLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxFQUFFLE1BQU07d0JBQ1osS0FBSyxFQUFFLFlBQVk7cUJBQ3RCO29CQUNEO3dCQUNJLEVBQUUsRUFBRSxVQUFVO3dCQUNkLE9BQU8sRUFBRSxhQUFhO3dCQUN0QixVQUFVLEVBQUUsNElBQTRJO3dCQUN4SixhQUFhLEVBQUUsK0RBQStEO3dCQUM5RSxLQUFLLEVBQUUsMkRBQTJEO3dCQUNsRSxXQUFXLEVBQUUsMEdBQTBHO3dCQUN2SCxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLElBQUksRUFBRSxVQUFVO3dCQUNoQixLQUFLLEVBQUUsUUFBUTtxQkFDbEI7aUJBQ0o7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxTQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksTUFBYztRQUN0QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ25CLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBZixDQUFlLENBQUMsQ0FBQztZQUN2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDNUIsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUF0R1EsYUFBYTtRQUR6QixpQkFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDOztPQUN0QixhQUFhLENBd0d6QjtJQUFELG9CQUFDO0NBQUEsQUF4R0QsSUF3R0M7QUF4R1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiBcInJvb3RcIiB9KVxuZXhwb3J0IGNsYXNzIFRhbGtzUHJvdmlkZXIge1xuICAgIHByaXZhdGUgZGF0YTogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIHRyYWNrUGxhY2VzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudHJhY2tQbGFjZXMgPSBbIFwiVFJBQ0sgMSAtIEFVTEEgTUFHTkFcIiwgXCJUUkFDSyAyIC0gQVVMQSAxMlwiLCBcIlRSQUNLIDMgLSBBVUxBIDEzXCIgXTtcbiAgICAgICAgdGhpcy5kYXRhID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNsb3RUaW1lOiBcIjk6MDAgLSAxMDowMCBBTVwiLFxuICAgICAgICAgICAgICAgIHRhbGtzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjE1ZmQ1ZWQ1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkl2w6FuIEJhY2FsbGFkb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlckJpbzogXCJJ4oCZbSBhbiBlbnRodXNpYXN0IGFib3V0IEphdmFzY3JpcHQgYW5kIGFsbCBpdOKAmXMgZWNvc3lzdGVtLiBJJ20gYSBmYW4gb2YgRmFjZWJvb2sgZWNvc3lzdGVtIChSZWFjdCwgUmVhY3QgTmF0aXZlLCBHcmFwaFFsLi4uKS4gSSBsaWtlIHRvIHVzZSBnb29kIHByYWN0aWNlcywgbGludGVycyBhbmQgZm9ybWF0dGVycyBiZWNhdXNlIEkgdGhpbmsgaXMgdmVyeSBpbXBvcnRhbnQgdG8ga2VlcCB0aGUgcHJvamVjdHMgY2xlYW4gYW5kIGRpdmlkZSBpbnRvIHNtYWxsIGVsZW1lbnRzIHRoYXQgcmVzb2x2ZXMganVzdCBvbmUgcHJvYmxlbS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJBdmF0YXI6IFwiaHR0cHM6Ly9qc2RheWNhbmFyaWFzLmNvbS9hc3NldHMvaW1nL3NwZWFrZXJzL2l2YW4tYmFjYWxsYWRvLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhbGlkYWQgdmlydHVhbCB5IEF1bWVudGFkYSBjb24gUmVhY3QgTmF0aXZlIHkgVmlyb1JlYWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXNhcnJvbGxhciBhcGxpY2FjaW9uZXMgYmFzYWRhcyBlbiBSZWFsaWRhZCBWaXJ0dWFsIG8gUmVhbGlkYWQgQXVtZW50YWRhIG51bmNhIGhhIHNpZG8gdGFuIHNlbmNpbGxvIGNvbiBWaXJvIHkgUmVhY3QgTmF0aXZlLiBWZXJlbW9zIGxhcyBkaWZlcmVuY2lhcyBlbnRyZSBBUiB5IFZSLCBjw7NtbyBjcmVhciB1biBwcm95ZWN0byBkZXNkZSBjZXJvLCByZXBhc2FyZW1vcyBsb3MgY29tcG9uZW50ZXMgYsOhc2ljb3MsIGPDs21vIHV0aWxpemFybG9zIHkgcG9yIMO6bHRpbW8sIHZlcmVtb3MgbGFzIGFwbGljYWNpb25lcyBlbiBlbCBtdW5kbyByZWFsIGRlIGxhIEFSIHkgVlIuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjazogdGhpcy50cmFja1BsYWNlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVEFMS1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IFwiQXZhbnphZG9cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCIxYjA4NTg2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogXCJZb2RyYSBMw7NwZXpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJCaW86IFwiQ1MgRW5naW5lZXIgb24gU3lzdGVtIEFkbWluaXN0cmF0aW9uLiBJJ20gY3VycmVudGx5IHdvcmtpbmcgYXMgZnVsbHN0YWNrIGRldmVsb3BlciBhdCBMZWFuTWluZC4gSW4gYWRkaXRpb24sIEknbSB0ZWFjaGVyIGF0IGEgeW91dGggZW50cmVwcmVuZXVyc2hpcCBwcm9ncmFtIGZvY3VzZWQgb24gRnVsbHN0YWNrIFdlYiBEZXZlbG9wbWVudCBhdCBFT0kgKEluZHVzdHJpYWwgTWFuYWdlbWVudCBTY2hvb2wpLiBPbiBteSBwcm9mZXNzaW9uYWwgbGl2ZSBJJ3ZlIGJlZW4gd29ya2luZyBvbiBkaWZmZXJlbnQgdGVjaG5vbG9naWNhbCBwcm9qZWN0IGluIG9yZGVyIHRvIHVwLXRvLWRhdGUgdGhlIEdvdmVybm1lbnQgb2YgdGhlIENhbmFyeSBJc2xhbmRzIHN5c3RlbXMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyQXZhdGFyOiBcImh0dHBzOi8vanNkYXljYW5hcmlhcy5jb20vYXNzZXRzL2ltZy9zcGVha2Vycy95b2RyYS1sb3Blei5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pcmEgbG8gcXVlIGhhIGhlY2hvLi4uIEdpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2VndXJvIHF1ZSBtw6FzIGRlIHVuYSB2ZXogaGFzIG/DrWRvIG8gaW5jbHVzbyBoYXMgZGljaG8gdHUgbWlzbW8gJ01pcmEgbG8gcXVlIGhpem8gR0lUJywgbyBhbGdvIGNvbW8gJ0dJVCBzZSB2b2x2acOzIGxvY28nLCAnR0lUIGxvIG1lcmdlw7MgbWFsIScuIEVuIGVsIGZvbmRvIHNhYmVzIHF1ZSBubyBlcyBHSVQgcXVpZW4gbG8gaGl6byBtYWwuIFZhbW9zIGEgdmVyIGxvcyB0w61waWNvcyBlcnJvcmVzIHF1ZSBzZSBjb21ldGVuIHkgYWxndW5vcyBubyB0YW4gdMOtcGljb3MsIHBvciBkZXNjb25vY2ltaWVudG8gZGVsIHVzbyBkZSBHSVQsIGNvbmZ1c2nDs24gY29uIG90cm9zIFZDUzsgcGVybyBhZGVtw6FzLCB2ZXJlbW9zIGFsZ3VuYXMgcmVnbGFzL3RydWNvcyBhIHRlbmVyIGVuIGN1ZW50YSBwYXJhIGV2aXRhcmxvLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHRoaXMudHJhY2tQbGFjZXNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlRBTEtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBcIkLDoXNpY29cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCI3OWVkZDY0Y1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcjogXCJTZW1hIEdhcmPDrWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJCaW86IFwiSmF2YVNjcmlwdCBhcmNoaXRlY3QgYW5kIGNsZWFuIGNvZGVyLCBob2JieSBwaWFuaXN0LiBDb3Jkb3Zhbi4gSSBsb3ZlIHRoaW5ncyB3ZWxsIGRvbmUuIFRoZXJlIGlzIGFsd2F5cyBzb21ldGhpbmcgbmV3IHRvIGJlIGFibGUgdG8gbGVhcm4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyQXZhdGFyOiBcImh0dHBzOi8vanNkYXljYW5hcmlhcy5jb20vYXNzZXRzL2ltZy9zcGVha2Vycy9zZW1hLWdhcmNpYS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlc2Fycm9sbGEgdHUgYXBwIG3Ds3ZpbCBuYXRpdmEgY29uIE5hdGl2ZVNjcmlwdCB5IEFuZ3VsYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkludHJvZHVjY2nDs24gYWwgZGVzYXJyb2xsbyBkZSBhcHBzIHBhcmEgZGlzcG9zaXRpdm9zIG3Ds3ZpbGVzIChBbmRyb2lkIGUgaU9TKSB1dGlsaXphbmRvIGVsIGZyYW1ld29yayBOYXRpdmVTY3JpcHQuIE5TIGVzdMOhIGJhc2FkbyBlbiB0ZWNub2xvZ8OtYXMgd2ViIChKYXZhU2NyaXB0IC8gVHlwZVNjcmlwdCksIHF1ZSBqdW50byBhIGxhIHBsYXRhZm9ybWEgQW5ndWxhciwgbm9zIHBlcm1pdGlyw6EgY3JlYXIgYXBsaWNhY2lvbmVzIG5hdGl2YXMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjazogdGhpcy50cmFja1BsYWNlc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiV09SS1NIT1BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBcIkLDoXNpY29cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzbG90VGltZTogXCIxMDowMCAtIDExOjAwIEFNXCIsXG4gICAgICAgICAgICAgICAgdGFsa3M6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYzYzM2Q1OThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI6IFwiQXhlbCBIZXJuw6FuZGV6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyQmlvOiBcIkZ1bGxzdGFjayBkZXZlbG9wZXIuIERlZmVuZGVyIG9mIHR5cGVzY3JpcHQuIFR5cGVzY3JpcHQgaXMgdGhlIGJlc3QgdGhpbmcgdGhhdCBoYXMgaGFwcGVuZWQgdG8gamF2YXNjcmlwdCBzaW5jZSBhc3luYyAvIGF3YWl0LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlckF2YXRhcjogXCJodHRwczovL2pzZGF5Y2FuYXJpYXMuY29tL2Fzc2V0cy9pbWcvc3BlYWtlcnMvYXhlbC1oZXJuYW5kZXoucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJ1c2VSZWFjdCgpIC0gVW5hIGludHJvZHVjY2nDs24gYSBIb29rc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmVjaWVudGVtZW50ZSBlbCBlcXVpcG8gZGUgUmVhY3QgYW51bmNpw7MgSG9va3MsIHVuYSBmdW5jaW9uYWxpZGFkIHF1ZSBub3MgdmEgYSBwZXJtaXRpciBjb21wYXJ0aXIgbMOzZ2ljYSBlbiBudWVzdHJvcyBjb21wb25lbnRlcyB5IHF1ZSBjYW1iaWFyw6EgbGEgZm9ybWEgZW4gbGEgcXVlIGVzY3JpYmltb3MgbnVlc3Ryb3MgY29tcG9uZW50ZXMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjazogdGhpcy50cmFja1BsYWNlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVEFMS1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IFwiSW50ZXJtZWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImFhYWJjNmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiBcIkRhaWxvcyBEw61helwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlckJpbzogXCJJIGhhdmUgYW4gZXhwZXJpZW5jZSBvZiBtb3JlIHRoYW4gZml2ZSB5ZWFycyBpbiB0aGUgY29tcHV0ZXIgc2VjdG9yIHdoZXJlIEkgaGF2ZSB3b3JrZWQgYXMgYSBwcm9ncmFtbWVyLCBhbmFseXN0IGFuZCB0ZWFtIGNvb3JkaW5hdG9yLiBJbiBhZGRpdGlvbiB0byB0aGlzLCBJIHByZXZpb3VzbHkgd29ya2VkIGZvciBtb3JlIHRoYW4gZml2ZSB5ZWFycyBpbiB0aGUgaW5kdXN0cmlhbCBlbmdpbmVlcmluZyBzZWN0b3IsIGRlc2lnbmluZywgcGxhbm5pbmcsIGV4ZWN1dGluZyBhbmQgY29vcmRpbmF0aW5nIHRlY2huaWNhbCBwcm9qZWN0cy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJBdmF0YXI6IFwiaHR0cHM6Ly9qc2RheWNhbmFyaWFzLmNvbS9hc3NldHMvaW1nL3NwZWFrZXJzL2RhaWxvcy1kaWF6LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGUgQVBJIFJFU1QgYSBHcmFwaFFMIGVuIDQ1IG1pbnV0b3MgbyBtZW5vc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGFydGllbmRvIGRlIHVuYSBBUEkgUkVTVCBnZW7DqXJpY2EsIGFuYWxpemFyZW1vcyBxdcOpIGFwb3J0YSBkZSBudWV2byBHcmFwaFFMLCBjw7NtbyBwb2RlbW9zIGludGVncmFybG8gY29uIG51ZXN0cm9zIHByb3llY3RvcyBhY3R1YWxlcyB5IGxvcyBwdW50b3MgY2xhdmUgcGFyYSBlbXBlemFyIGEgZW50ZW5kZXIgZXN0YSBudWV2YSBoZXJyYW1pZW50YSwgcXVlIGVzdMOhIGxsYW1hZGEgYSBjYW1iaWFyIGxhIG1hbmVyYSBjb24gbGEgcXVlIG51ZXN0cmFzIGFwbGljYWNpb25lcyBjbGllbnRlIGludGVyY2FtYmlhcsOhbiBkYXRvcyBjb24gbG9zIHNlcnZpZG9yZXMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFjazogdGhpcy50cmFja1BsYWNlc1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVEFMS1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IFwiSW50ZXJtZWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIjJiNGM1ZWI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyOiBcIlNlbWEgR2FyY8OtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlckJpbzogXCJKYXZhU2NyaXB0IGFyY2hpdGVjdCBhbmQgY2xlYW4gY29kZXIsIGhvYmJ5IHBpYW5pc3QuIENvcmRvdmFuLiBJIGxvdmUgdGhpbmdzIHdlbGwgZG9uZS4gVGhlcmUgaXMgYWx3YXlzIHNvbWV0aGluZyBuZXcgdG8gYmUgYWJsZSB0byBsZWFybi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXJBdmF0YXI6IFwiaHR0cHM6Ly9qc2RheWNhbmFyaWFzLmNvbS9hc3NldHMvaW1nL3NwZWFrZXJzL3NlbWEtZ2FyY2lhLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVzYXJyb2xsYSB0dSBhcHAgbcOzdmlsIG5hdGl2YSBjb24gTmF0aXZlU2NyaXB0IHkgQW5ndWxhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ29udGludWFjacOzbiBkZWwgdGFsbGVyLiBTZWd1aXJlbW9zIGNvbnN0cnV5ZW5kbyBudWVzdHJhIGFwbGljYWNpw7NuIGNvbiBOYXRpdmVTY3JpcHQgZGUgbGEgbWFubyBkZSBTZW1hLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IHRoaXMudHJhY2tQbGFjZXNbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIldPUktTSE9QXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogXCJCw6FzaWNvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBnZXRUYWxrcygpIHtcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VGFsa0J5SWQodGFsa0lkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChzbG90KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbG90VGltZSA9IHNsb3Quc2xvdFRpbWU7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gc2xvdC50YWxrcy5maWx0ZXIoKHQpID0+IHQuaWQgPT09IHRhbGtJZCk7XG4gICAgICAgICAgICBpZiAodGVtcCAmJiB0ZW1wLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0ZW1wWzBdLnNsb3RUaW1lID0gc2xvdFRpbWU7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGVtcFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn1cbiJdfQ==