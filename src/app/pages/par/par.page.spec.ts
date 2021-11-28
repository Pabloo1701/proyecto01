import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParPage } from './par.page';

describe('ParPage', () => {
  let component: ParPage;
  let fixture: ComponentFixture<ParPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
