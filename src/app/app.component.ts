import { Component } from '@angular/core';
import {freeapiService} from './services/freeApi.services'
import { Comments } from './class/comments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor (){}
    

  listComment:Comments[];

    ngOnInit(){
     
    }

 
}
