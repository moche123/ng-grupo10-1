import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges,ViewChild,AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnChanges,OnInit,AfterViewInit {

  @Input() salary = 0;
  @Output() infoChild: EventEmitter<string> = new EventEmitter<string>();

  
  @ViewChild('viewContent') viewContent!: ElementRef;

  


  constructor(){
    console.log('Constructor');

  }

  ngOnChanges( changes: SimpleChanges ){
    //: Se ejecuta por una vez antes del oninit, y lueg cada vez que cambie el input. ESO SIEMPRE Y CUANDO TENGA UN INPUT QUE RECIBA VALORES
    console.log(`onchanges ${this.salary}`);
    //console.log({...changes}); //* SPREAD OPERATOR
  }

  ngOnInit(){
    
    console.log('OnInit');
    // console.log(this.viewContent) //! undefined
  }

  //* RENDERIZADO => PINTE LA PANTALLA

  ngAfterViewInit(){
    //! SE EJECUTA CUANDO EL TEMPLATE ESTE CARGADO CORRECTAMENTE
    //! SI QUIERO HACER REFERENCIA A UN OBJETO DEL DOM, DEBO HACERLO AQUI
    console.log('NgAfterViewInit');
    console.log(this.viewContent)

    this.viewContent.nativeElement.style.backgroundColor = 'cyan';
  }

  ngOnDestroy(){
    console.log('Destroy');
  }

  sendToParent(){
    this.infoChild.emit('Hello Parent')
  }

}
