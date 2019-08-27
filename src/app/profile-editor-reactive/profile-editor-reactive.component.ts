import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from '../models/Profile';

@Component({
  selector: 'app-profile-editor-reactive',
  templateUrl: './profile-editor-reactive.component.html',
  styleUrls: ['./profile-editor-reactive.component.css']
})
export class ProfileEditorReactiveComponent {

  mockJsonData: Profile;

  profileForm: FormGroup = this.builder.group({
    firstName: ['Gerard'],
    lastName: ['Butler'],
    username: ['gbutler'],
    password: ['1234'],
    email: ['gbutler@gmail.com'],
    zip: ['90210']
  });

  constructor(private builder: FormBuilder) {}

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
    alert("Your profile information has been successfully updated.")
  }

}
