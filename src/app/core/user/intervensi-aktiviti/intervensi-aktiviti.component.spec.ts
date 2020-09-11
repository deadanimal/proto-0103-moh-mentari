/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntervensiAktivitiComponent } from './intervensi-aktiviti.component';

describe('IntervensiAktivitiComponent', () => {
  let component: IntervensiAktivitiComponent;
  let fixture: ComponentFixture<IntervensiAktivitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervensiAktivitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervensiAktivitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
