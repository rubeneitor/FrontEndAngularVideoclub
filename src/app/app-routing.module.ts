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



const routes: Routes = [
  {path: "user/login", component:LoginComponent},
  {path: "", redirectTo: "peliculasTodas", pathMatch: "full"},//para que muestre en home que ponga /discover
  {path: "peliculasTodas", component:MovieListComponent},
  {path: "peliculasFiltro", component:BusquedaFiltroComponent},
  {path: "register", component:RegisterComponent},//Añadimos la ruta de registro 
  {path: "pelicula/:id", component:MovieDetailComponent},
  {path: "user/perfil", component:PerfilComponent},
  {path: "user/logout", component:LogoutComponent},
  {path: "pedido", component:AlguilerPeliculaComponent},
  {path: "pedidos/id/:id", component:PedidosUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
