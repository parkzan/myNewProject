import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SweetAlert } from 'sweetalert/typings/core';
declare const swal:SweetAlert;
@Component({
  selector: 'app-page-system',
  templateUrl: './page-system.component.html',
  styleUrls: ['./page-system.component.css']
})
export class PageSystemComponent implements OnInit {
   myTest:any;
  name = new FormControl();
  code = new FormControl();
  sysName:string = "SystemA";
  sysCode:String = "CRV";
  constructor() {   }

  ngOnInit() {

  }
  editSystem(){
      this.name.setValue(this.sysName);
      this.code.setValue(this.sysCode);
  }

  delSystem(){
    swal("Hello world!");
  } 

 
}
