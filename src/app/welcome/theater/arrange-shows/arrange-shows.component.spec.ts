/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArrangeShowsComponent } from './arrange-shows.component';

describe('ArrangeShowsComponent', () => {
  let component: ArrangeShowsComponent;
  let fixture: ComponentFixture<ArrangeShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangeShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangeShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
