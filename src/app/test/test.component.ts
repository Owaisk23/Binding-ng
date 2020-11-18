import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 class="text-success">
    Welcome {{name}}
  </h2>
  <input [id]="myId" type="text" value="Owais">
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Owais">
  {{2+3}}
  {{"Welcome " + name}}
  {{name.length}}ss
  <h2 [ngClass]="messageClass">Hello WORLD!</h2>
  <h1 [class.text-danger]="hasError">{{name.toUpperCase()}}</h1>
  <h2 class="text-special">{{greetUser()}}</h2>
  <h2 [class]="dangerClass">{{siteUrl}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Owais Ahmed Khan";
  public myId = "testId";
  public isDisabled = true;
  public siteUrl = window.location.href;
  public dangerClass = "text-danger"
  public hasError = false;
  public isSpeacial = true;
  public messageClass ={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpeacial
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
