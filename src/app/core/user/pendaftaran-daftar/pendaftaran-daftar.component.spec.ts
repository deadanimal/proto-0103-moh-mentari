/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PendaftaranDaftarComponent } from './pendaftaran-daftar.component';

describe('PendaftaranDaftarComponent', () => {
  let component: PendaftaranDaftarComponent;
  let fixture: ComponentFixture<PendaftaranDaftarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranDaftarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranDaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
