import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AudioApp'; 

  audioObj = new Audio();

  files = [
    {
      url : './assets/song1.mp3',
      name : 'Song 1'
    },
    {
      url : './assets/song2.mp3',
      name : 'Song 2'
    },
    {
      url : './assets/song3.mp3',
      name : 'Song 3'
    }
  ] ;

  openFile(url){
    
  }

  play(){
    console.log("Clicked Play");
  }

  pause(){
    console.log("Clicked Pause");
  }

  stop(){
    console.log("Clicked stop");
  }
}
