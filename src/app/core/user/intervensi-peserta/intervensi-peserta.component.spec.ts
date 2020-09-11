/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntervensiPesertaComponent } from './intervensi-peserta.component';

describe('IntervensiPesertaComponent', () => {
  let component: IntervensiPesertaComponent;
  let fixture: ComponentFixture<IntervensiPesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervensiPesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervensiPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
