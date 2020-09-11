/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KonsultasiComponent } from './konsultasi.component';

describe('KonsultasiComponent', () => {
  let component: KonsultasiComponent;
  let fixture: ComponentFixture<KonsultasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonsultasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsultasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
