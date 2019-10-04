import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentQuestionComponent } from './current-question.component';

describe('CurrentQuestionComponent', () => {
  let component: CurrentQuestionComponent;
  let fixture: ComponentFixture<CurrentQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
