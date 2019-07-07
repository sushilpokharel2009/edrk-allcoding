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
        // Has get, post, put, patch, delete functions
        // path from the root of the index.html
        return this.http.get('../../../app/services/cities/cities.json').map(res => res.json());
    }
}
