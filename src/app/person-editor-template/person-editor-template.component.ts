import { Component } from '@angular/core';
import { Person } from '../models/Person';
import { FRIENDS } from '../data/friends';

@Component({
  selector: 'app-person-editor-template',
  templateUrl: './person-editor-template.component.html',
  styleUrls: ['./person-editor-template.component.css']
})
export class PersonEditorTemplateComponent {
  person: Person = new Person(this.getNextId(), '', '');

  // Returns the next id in FRIENDS array to be used for adding a new friend
  getNextId(): number {
    return FRIENDS.length + 1;
  }

  onSubmit() {
    // Add new friend from form submission
    FRIENDS.push(this.person);
    // Alert user of successful form submission
    alert(`You successfully added ${this.person.firstName} ${this.person.lastName} to the list`);
    // Reset form model - include next friend id
    this.person = new Person(this.getNextId(), '', '');
  }

}
