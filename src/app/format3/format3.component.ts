import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format3',
  templateUrl: './format3.component.html',
  styleUrls: ['./format3.component.css']
})
export class Format3Component implements OnInit {

  public myDate!:Date
  constructor() { 
    setInterval(() =>{
    this.myDate=new Date},100)
     
  }

  ngOnInit(): void {
  }

}
