import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getFriends();
  }

  getFriends() {
      this.personService
      // delay simulates the process of Observables with a long web delay
      .delay(3000)
      .then(() => 
        this.personService.getFriends()
          .subscribe(friends => this.friends = friends));
  }

}
