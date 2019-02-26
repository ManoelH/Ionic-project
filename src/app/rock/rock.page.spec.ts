import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPage } from './rock.page';

describe('RockPage', () => {
  let component: RockPage;
  let fixture: ComponentFixture<RockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
