import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditorTemplateComponent } from './person-editor-template.component';

describe('PersonEditorTemplateComponent', () => {
  let component: PersonEditorTemplateComponent;
  let fixture: ComponentFixture<PersonEditorTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEditorTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditorTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
