import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasGenerosPage } from './noticias-generos.page';

describe('NoticiasGenerosPage', () => {
  let component: NoticiasGenerosPage;
  let fixture: ComponentFixture<NoticiasGenerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasGenerosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasGenerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
