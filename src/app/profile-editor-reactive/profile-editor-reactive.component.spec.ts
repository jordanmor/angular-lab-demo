import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorReactiveComponent } from './profile-editor-reactive.component';

describe('ProfileEditorReactiveComponent', () => {
  let component: ProfileEditorReactiveComponent;
  let fixture: ComponentFixture<ProfileEditorReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
