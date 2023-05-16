import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck } from '@angular/core';
import {humanDetail} from '../ng-onchanges.component'

@Component({
  selector: 'app-child-ngonchanges',
  templateUrl: './child-ngonchanges.component.html',
  styleUrls: ['./child-ngonchanges.component.scss']
})
export class ChildNgonchangesComponent implements OnInit, OnChanges, DoCheck {

  constructor() { 
    console.log('constructor child ngonchages');
  }
  @Input() childVarParentData!:string;
  @Input() wholeForm!:humanDetail;

  ngOnInit(): void {
    console.log('ngOninit in child ngonchages');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // not called as from parent to child or child to parent is not happening
    console.log('NgOnChanges in child ngonchages', changes);
  }

  ngDoCheck(): void {
    console.log('Do check called', this.wholeForm);
  }

}
