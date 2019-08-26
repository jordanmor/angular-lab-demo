import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Person } from '../models/Person';
import { FRIENDS } from '../data/friends';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  // simulates the process of Observables with a long web delay
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

  getFriends(): Observable<Person[]> {
    return of(FRIENDS);
  }
}
