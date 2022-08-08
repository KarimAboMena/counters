import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  count=0;
  ADD(){
    this.count++;
  }
  subtract(){
    this.count--;
  }
  reset(){
    this.count=0;
  }
  count1=0;
  ADD1(){
    this.count1++;
  }
  subtract1(){
    this.count1--;
  }
  reset1(){
    this.count1=0;
  }
  count2=0;
  ADD2(){
    this.count2++;
  }
  subtract2(){
    this.count2--;
  }
  reset2(){
    this.count2=0;
  }
  
}