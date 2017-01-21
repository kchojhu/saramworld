/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Navbar} from "./navbar.component";
import {app_routes} from "../app.route";
import {RouterModule} from "@angular/router";
import {AppModule} from "../app.module";

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    })
    .compileComponents();
  }));

// test
  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ok', () => {
    expect(component).toBeTruthy();
  });
});
