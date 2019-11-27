import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieCategoriesComponent} from './components/movie-categories/movie-categories.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PorGeneroComponent } from './components/por-genero/por-genero.component';
import { MovieListHomeComponentComponent } from './components/movie-list-home-component/movie-list-home-component.component';
import { BusquedaFiltroComponent } from './components/busqueda-filtro/busqueda-filtro.component';



const routes: Routes = [
  {path: "user/login", component:LoginComponent},
  {path: "", redirectTo: "peliculas", pathMatch: "full"},//para que muestre en home que ponga /discover
  {path: "peliculasMovie", component:MovieListComponent},
  {path: "peliculasFiltro", component:BusquedaFiltroComponent},
  // {path: "pelicula", component:BusquedaFiltroComponent},
  // {path: "peliculas", component:MovieListHomeComponentComponent},
  // {path: "peliculasGeneros/name/:name", component:PorGeneroComponent},
  // {path: "movies/:category", component:MovieCategoriesComponent},
  {path: "register", component:RegisterComponent},//Añadimos la ruta de registro 
  {path: "pelicula/:id", component:MovieDetailComponent},
  
  {path: "user/perfil", component:PerfilComponent},
  {path: "user/perfil/:username", component:UserDetailComponent},
  {path: "user/logout", component:LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
