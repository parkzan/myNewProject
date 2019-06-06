import { Component, OnInit } from '@angular/core';
import {freeapiService} from 'src/app/services/freeApi.services'
@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  
  constructor(private MockApi:freeapiService,private resultDetail:freeapiService) { }

  ngOnInit() {
      this.MockApi.getComments()
      .subscribe(
          data => this.MockApi = data 
        );
  }
  doDetail(result){
    this.resultDetail = result;
  }

}
