import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Howl, Howler} from 'howler';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  sound = new Howl({ src: ['assets/img/bdysong.wav'], html5 :true });
  //private subscription: Subscription;
 // private timer: Observable<any>;
  constructor(private _router:Router) {
   
    this.sound.play();

    // Change global volume.
   Howler.volume(0.5);
   }
  
  ngOnInit() {
   // this.sound.play();

    // Change global volume.
  //  Howler.volume(0.5);
  }
  next(){
    this.sound.play();

    // Change global volume.
   Howler.volume(0.5);
   console.log(" inside next");
 setInterval(()=> {
  this._router.navigate(['timeline']);
 }, 8000);
    //this._router.navigate(['timeline']);

  }
}
