import { Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class Httpdemo{
    cities: Response;
    http: Http;
    constructor(http: Http){
        this.http = http;
    }
    getResponse(){
        return this.http.get('../../../app/services/cities/cities.json');
    }
}