import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-afterhook',
  templateUrl: './ng-afterhook.component.html',
  styleUrls: ['./ng-afterhook.component.scss']
})
export class NgAfterhookComponent implements OnInit {

  constructor() { }
  parentData!:string;

  ngOnInit(): void {
    this.parentData="green";
  }

  changeBackground(event:any){
    this.parentData = event.target.value;
  }

}
