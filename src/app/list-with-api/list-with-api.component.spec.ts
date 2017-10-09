import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithApiComponent } from './list-with-api.component';

describe('ListWithApiComponent', () => {
  let component: ListWithApiComponent;
  let fixture: ComponentFixture<ListWithApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWithApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
