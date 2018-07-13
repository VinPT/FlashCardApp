import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveWordComponent } from './remove-word.component';

describe('RemoveWordComponent', () => {
  let component: RemoveWordComponent;
  let fixture: ComponentFixture<RemoveWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
