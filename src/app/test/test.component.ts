import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>
  <input [id]="myId" type="text" value="Owais">
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Owais">
  {{2+3}}
  {{"Welcome " + name}}
  {{name.length}}
  <h1>{{name.toUpperCase()}}</h1>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Owais Ahmed Khan";
  public myId = "testId";
  public isDisabled = true;
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
