import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-onchanges',
  templateUrl: './ng-onchanges.component.html',
  styleUrls: ['./ng-onchanges.component.scss']
})
export class NgOnchangesComponent implements OnInit {

  constructor() { }
  parentData!:string;
  name!:string;
  age!:number;

  fromDetail:humanDetail=new humanDetail();

  ngOnInit(): void {
  }
  handleInpput(event:any){  
    this.parentData = event.target.value;
  }
  parentToChild(){
    // creating new object again and again so that onchanges detect change.
    // this.fromDetail={
    //   name:this.name,
    //   age:this.age
    // }
    // transfering data one by one
    this.fromDetail.age=this.age;
    this.fromDetail.name=this.name;
    // transfering as new object
    // this.fromDetail=new humanDetail();
    // this.fromDetail.age=this.age;
    // this.fromDetail.name=this.name;
  }

}

export class humanDetail{
  name!:string;
  age!:number;
}
