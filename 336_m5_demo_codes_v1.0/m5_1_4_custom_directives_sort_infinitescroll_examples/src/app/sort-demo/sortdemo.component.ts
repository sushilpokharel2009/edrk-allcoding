import { Component, OnInit } from '@angular/core';
import {Sorter} from '../sort/sort';
@Component({
    selector: 'sort-demo',
    template:`
    <table>
    <thead>
        <tr>
            <th>&nbsp;</th>
            <th>
                <a sort-by="firstName" (sorted)="sort($event)" href="#">First Name</a>
                <span *ngIf="!sortReverse && sortProperty=='firstName'" class="glyphicon glyphicon-menu-down"></span>
                <span *ngIf="sortReverse && sortProperty=='firstName'" class="glyphicon glyphicon-menu-up"></span>
            </th>
            <th>
                <a sort-by="lastName" (sorted)="sort($event)" href="#">Last Name</a>
                <span *ngIf="!sortReverse && sortProperty=='lastName'" class="glyphicon glyphicon-menu-down"></span>
                <span *ngIf="sortReverse && sortProperty=='lastName'" class="glyphicon glyphicon-menu-up"></span>
            </th>
            <th>City</th>
            <!-- Or you can do this directly rather than using sort-by directive -->
            <th (click)="sort('salary')">Salary</th>
            <th>Join Date</th>

        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let employee of employees ; let i = index">
            <td>{{i+1}}</td>
            <td>{{employee.firstName}}</td>
            <td>{{employee.lastName}}</td>
            <td>{{employee.city}}</td>
            <td>{{employee.salary}}</td>
            <td>{{employee.dateofjoining}}</td>
        </tr>
    </tbody>
    </table>
    `
})
export class SortDemoComponent implements OnInit {
private sortReverse: boolean = false;
private sortProperty: string = '';
 employees: any = [
     {firstName: 'A', lastName: 'BD', city: 'Ny', salary: '10', dateofjoining: '12/06/2017'},
     {firstName: 'B', lastName: 'CE', city: 'Tn', salary: '100', dateofjoining: '15/06/2017'}
 ]
constructor(private sorter: Sorter) { }

sort(prop: string) {
    this.sortProperty = prop;
    this.sortReverse = !this.sortReverse;
 
    this.sorter.sort(this.employees, prop);
}

    ngOnInit() { 

    }

}