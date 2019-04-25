import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestoesPage } from './sugestoes.page';

describe('SugestoesPage', () => {
  let component: SugestoesPage;
  let fixture: ComponentFixture<SugestoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
