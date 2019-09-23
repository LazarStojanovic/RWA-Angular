import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsList } from './requests-list.component';

describe('RequestsList', () => {
  let component: RequestsList;
  let fixture: ComponentFixture<RequestsList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
