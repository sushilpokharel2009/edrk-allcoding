import { Component} from '@angular/core';
import {Httpdemo} from '../../services/httpsrv/httpsrv.service';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
    <div>HTTP with HTTP GET - {{cities}}</div>
  `
})
export class RootappComponent{
    cities: Response;
    constructor(Httpdemo: Httpdemo){
        //http.get('../../app/services/cities/cities.json').subscribe((cities)=>{ 
            //this.cities = cities;
        //    this.cities = JSON.parse(cities._body).cities;          
        //    console.log(this.cities); 
        //});
        Httpdemo.getResponse().subscribe((cities: any)=>{ 
            this.cities = JSON.parse(cities._body).cities;;          
            console.log(this.cities);
        });
    }
}
