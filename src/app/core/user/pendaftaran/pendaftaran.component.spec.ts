/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PendaftaranComponent } from './pendaftaran.component';

describe('PendaftaranComponent', () => {
  let component: PendaftaranComponent;
  let fixture: ComponentFixture<PendaftaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
