import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import {MatInputModule, MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HighligthDirective } from './highligth.directive';
import { BusquedaFiltroComponent } from './components/busqueda-filtro/busqueda-filtro.component';
import { NgMarqueeModule } from 'ng-marquee';
import { AlguilerPeliculaComponent } from './components/alguiler-pelicula/alguiler-pelicula.component';
import { PedidosUsuarioComponent } from './components/pedidos-usuario/pedidos-usuario.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HeaderComponent,
    RegisterComponent,
    MovieDetailComponent,
    LoginComponent,
    PerfilComponent,
    LogoutComponent,
    HighligthDirective,
    BusquedaFiltroComponent,
    AlguilerPeliculaComponent,
    PedidosUsuarioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NgMarqueeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
