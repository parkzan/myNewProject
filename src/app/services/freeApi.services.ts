import { NgModule, Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class freeapiService{
    constructor (private httpClient: HttpClient){}
    
    getComments():Observable<any>{
        const url = "https://jsonplaceholder.typicode.com/get/1/comments";
        const response =  this.httpClient.get(url);
        return response;
    }
}
