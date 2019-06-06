import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  strMessage = 'test';
  constructor() { }

  ngOnInit() {
  }

  testAlert(str){
      alert(str);
  }

}
