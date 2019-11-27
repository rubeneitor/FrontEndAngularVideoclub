import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieCategoriesComponent } from './components/movie-categories/movie-categories.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import {MatInputModule, MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HighligthDirective } from './highligth.directive';
import { PorGeneroComponent } from './components/por-genero/por-genero.component';
import { MovieListHomeComponentComponent } from './components/movie-list-home-component/movie-list-home-component.component';
import { BusquedaFiltroComponent } from './components/busqueda-filtro/busqueda-filtro.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HeaderComponent,
    MovieCategoriesComponent,
    RegisterComponent,
    MovieDetailComponent,
    LoginComponent,
    PerfilComponent,
    UserDetailComponent,
    LogoutComponent,
    HighligthDirective,
    PorGeneroComponent,
    MovieListHomeComponentComponent,
    BusquedaFiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
