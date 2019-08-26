import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent} from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileEditorReactiveComponent } from './profile-editor-reactive/profile-editor-reactive.component';
import { AnimationsComponent } from './animations/animations.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'friends', component: FriendsComponent },
  { path: 'profile', component: ProfileEditorReactiveComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }