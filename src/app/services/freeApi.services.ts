import { NgModule, Injectable } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class freeapiService{
    constructor (private httpClient: HttpClient){}

    getComments(): Observable<any>{
        return this.httpClient.get("https://jsonplaceholder.typicode.com/get/1/comments");
    }
}
