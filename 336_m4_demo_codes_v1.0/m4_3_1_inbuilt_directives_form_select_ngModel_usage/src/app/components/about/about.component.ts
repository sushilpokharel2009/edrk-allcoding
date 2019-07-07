import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'about',
    template:`
    <h1>About Us</h1>
    Param Id: {{param}}
    <br>
    Query Params: {{query}}
    <br>
    Fragment Params:  {{fragment}}
    `
})
export class AboutComponent implements OnInit {
    public param: any;
    public query: any;
    public fragment: any;
    public paramsSub: any;
    public querySub: any;
    public fragmentSub: any;
    constructor(private activatedRoute: ActivatedRoute , private router: Router) { }
    ngOnInit() {
        /* Static */
        //this.param = this.activatedRoute.snapshot.params['id'] || 'None';
        //this.query = this.activatedRoute.snapshot.queryParams['name'] || 'None';
        /* Dynamic */
        this.paramsSub = this.activatedRoute.params.subscribe(params => this.param = params['id']);
        this.querySub = this.activatedRoute.queryParams.subscribe(query => this.query = query['name'] || 'None');
    }
    
}