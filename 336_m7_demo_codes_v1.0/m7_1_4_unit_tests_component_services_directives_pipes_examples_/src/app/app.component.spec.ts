import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
	let comp: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ AppComponent ],
			schemas: [ NO_ERRORS_SCHEMA ]
		});
		fixture = TestBed.createComponent(AppComponent);
		comp = fixture.componentInstance;
	});

	it("can load instance", () => {
		expect(comp).toBeTruthy();
	});

	it("title defaults to: 'Developers List'", () => {
		expect(comp.title).toEqual('Developers List');
	});

	it("developers defaults to: DEVELOPERS", () => {
		expect(comp.developers).toEqual(DEVELOPERS);
	});

});
