import { Component } from '@angular/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    constructor() { }
    audio: any;
    sayName = function () {
        this.audio = new Audio();
        this.audio.src = '../assets/audio/apple.mp3';
        this.audio.load();
        this.audio.play();
    };

}
