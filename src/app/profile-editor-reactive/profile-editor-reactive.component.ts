import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../models/Profile';
import { ModalService } from '../services/modal.service';
import { patternValidator } from '../shared/pattern-validator';

@Component({
  selector: 'app-profile-editor-reactive',
  templateUrl: './profile-editor-reactive.component.html',
  styleUrls: ['./profile-editor-reactive.component.css']
})
export class ProfileEditorReactiveComponent {

  mockJsonData: Profile;

  profileForm: FormGroup = this.builder.group({
    firstName: ['Gerard', [Validators.required]],
    lastName: ['Butler', [Validators.required]],
    username: ['gbutler', [Validators.required]],
    password: ['1234', [Validators.required]],
    email: ['gbutler@gmail.com', [
      Validators.required,
      patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]],
    zip: ['90210']
  });

  constructor(
    private builder: FormBuilder, 
    private modal: ModalService ) {}

  updateProfile() {
    const updatedProfile: Profile = new Profile( 
      this.profileForm.controls["firstName"].value,
      this.profileForm.controls["lastName"].value,
      this.profileForm.controls["username"].value,
      this.profileForm.controls["password"].value,
      this.profileForm.controls["email"].value,
      this.profileForm.controls["zip"].value,
    );
    
    this.profileForm.patchValue(updatedProfile);

    // Send updated profile model data in JSON format to mock server to update db
    console.log(JSON.stringify(this.profileForm.value))
    // Populate page with beautified, updated mock JSON data
    this.mockJsonData = updatedProfile;
    // Alert user that the profile information has been successfully updated
    this.modal.setMessage(`The profile information for ${updatedProfile.firstName} ${updatedProfile.lastName} has been successfully updated.`);
  }

}
