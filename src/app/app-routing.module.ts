import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BusquedaFiltroComponent } from './components/busqueda-filtro/busqueda-filtro.component';
import { AlguilerPeliculaComponent } from './components/alguiler-pelicula/alguiler-pelicula.component';
import { PedidosUsuarioComponent } from './components/pedidos-usuario/pedidos-usuario.component';


//routas de la aplicacion de los componentes que queremos acceder desde otra ruta
const routes: Routes = [
  {path: "user/login", component:LoginComponent},//Ruta del login
  {path: "", redirectTo: "peliculasTodas", pathMatch: "full"},//Redirigimos a la pagina principal de todas las peliculas
  {path: "peliculasTodas", component:MovieListComponent},//Mostramos todas las peliculas
  {path: "peliculasFiltro", component:BusquedaFiltroComponent},//Ruta de los filtros
  {path: "register", component:RegisterComponent},//Añadimos la ruta de registro 
  {path: "pelicula/:id", component:MovieDetailComponent},//Ruta donde sale los detalles de la pelicula seleccionada
  {path: "user/perfil", component:PerfilComponent},//Ruta de perfil del usuario logueado
  {path: "user/logout", component:LogoutComponent},//Ruta para el logout
  {path: "pedido", component:AlguilerPeliculaComponent},//Ruta donde alguilamos una pelicula
  {path: "pedidos/id/:id", component:PedidosUsuarioComponent}//Ruta donde salen los detalles de los pedidos del usuario logueado

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
