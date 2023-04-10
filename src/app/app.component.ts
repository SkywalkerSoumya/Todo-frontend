import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Schedule Manager';
  currentDate : Date;


  ngOnInit(): void {
    this.currentDate = new Date();
  }
  
  //constructor(){
    // setTimeout(()=>{
    //   this.title="title changed !!! "
    // },5000);  

  //}
}
