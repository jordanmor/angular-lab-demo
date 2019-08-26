import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { MOVIES } from '../data/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = MOVIES;

  constructor() { }

  ngOnInit() {
  }

}
