import { Component, OnInit, AfterContentInit, Input, OnChanges, ContentChild, OnDestroy,
  ElementRef, ViewChild, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child-after',
  templateUrl: './child-after.component.html',
  styleUrls: ['./child-after.component.scss']
})
export class ChildAfterComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked
,AfterViewInit, AfterViewChecked, DoCheck, OnDestroy {

  constructor() { 
    this.interval=setInterval(()=>{
      this.count++;
      console.log(this.count)
    }, 1000)
  }
  interval!:any;
  count=0;
  @Input() getData!:string;
  @ContentChild('content') parentContent!:ElementRef; // can access parent content h1 tag via contnetChild
  @ViewChild('currentComponentHtml') currentComponentHtml!:ElementRef;

  ngOnChanges(){
    console.log('ngOnchanges child');
  }
  ngOnInit(): void {
    console.log('ngOnInit child');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit', this.parentContent);
    this.parentContent.nativeElement.setAttribute('style', 'background-color:red')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', this.parentContent);
    this.parentContent.nativeElement.setAttribute('style',`background-color:${this.getData}`)
  }
  // first load sequence ngOnChanges, ngOnInit, ngAfterContentInit, ngAfterContentChecked

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit',this.currentComponentHtml);
    this.currentComponentHtml.nativeElement.setAttribute('style',`color:${this.getData}`)
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked',this.currentComponentHtml);
    this.currentComponentHtml.nativeElement.setAttribute('style',`color:${this.getData}`)
    
  }
  ngDoCheck(): void {
    console.log('do check child');
  }
  ngOnDestroy(): void {
    console.log('distroy');
    clearInterval(this.interval)
  }

}
