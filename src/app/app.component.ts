import { Component } from '@angular/core';
//import { firstComponent} from './first/first.component';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ginni';
  sound = new Howl({ src: ['assets/img/bdysong.wav'], html5 :true });
  constructor(){
     
    this.sound.play();

    // Change global volume.
   Howler.volume(0.5);
  }
  


}
