import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { FriendsComponent } from './friends/friends.component';
import { PersonEditorTemplateComponent } from './person-editor-template/person-editor-template.component';
import { AnimationsComponent } from './animations/animations.component';
import { ProfileEditorReactiveComponent } from './profile-editor-reactive/profile-editor-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    FriendsComponent,
    PersonEditorTemplateComponent,
    AnimationsComponent,
    ProfileEditorReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
