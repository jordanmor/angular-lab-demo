import { Project } from '../models/Project';

export const PROJECTS: Project[] = [
  {id: 1, title: 'Coding Friends', link: 'friends', description: 'A list of people is displayed using the service class, dependency injection, and observables. A template-based approach is used for wiring up a model object.'},
  {id: 2, title: 'Profile', link: 'profile', description: 'The reactive model is used for building a form utilizing FormBuilder that updates user information.'},
  {id: 3, title: 'Animations', link: 'animations', description: 'Animations created by transitioning between different states using enums and buttons.'},
  {id: 4, title: 'Top 10 Movies', link: 'movies', description: 'A list built using a model and imported, mock data.'},
];