/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddSnacksComponent } from './add-snacks.component';

describe('AddSnacksComponent', () => {
  let component: AddSnacksComponent;
  let fixture: ComponentFixture<AddSnacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSnacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSnacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
