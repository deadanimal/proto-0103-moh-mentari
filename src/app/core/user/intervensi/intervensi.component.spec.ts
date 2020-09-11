/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntervensiComponent } from './intervensi.component';

describe('IntervensiComponent', () => {
  let component: IntervensiComponent;
  let fixture: ComponentFixture<IntervensiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervensiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
