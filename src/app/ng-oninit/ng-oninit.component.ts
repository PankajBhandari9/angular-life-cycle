import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-oninit',
  templateUrl: './ng-oninit.component.html',
  styleUrls: ['./ng-oninit.component.scss']
})
export class NgOninitComponent implements OnInit {

  constructor() { 
    console.log('Constructor called')
  }

  ngOnInit(): void {
    console.log('NgOnint called')
  }

}
