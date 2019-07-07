import { Injectable } from '@angular/core';
import {Item} from '../../interfaces/item';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
    
    constructor(private _http: Http) { }
    getItems(){
        return this._http.get('http://localhost:3000/api/items')
        .map(res=>res.json());
    }
    addItem(newItem: Item){
        let headers = new Headers();
        headers.append('content-type','application/json');
        return this._http.post('http://localhost:3000/api/item', JSON.stringify(newItem), {headers: headers})
        .map(res=>res.json());
    }
    updateItem(item: Item){
        let headers = new Headers();
        headers.append('content-type','application/json');
        return this._http.put('http://localhost:3000/api/item/' + item._id, JSON.stringify(item), {headers: headers})
        .map(res=>res.json());
    }
    deleteItem(id: any){
        return this._http.delete('http://localhost:3000/api/item/' + id)
        .map(res=>res.json());
    }
}