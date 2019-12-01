import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-alguiler-pelicula',
  templateUrl: './alguiler-pelicula.component.html',
  styleUrls: ['./alguiler-pelicula.component.scss']
})
export class AlguilerPeliculaComponent implements OnInit {
  fecha = new Date();
  pedido: Pedido = {
    numPedido: null,
    idUsuario: null,
    tituloPelicula: '',
    direccion: '',
    fechaAlquiler: new Date(),
    fechaEntrega: null
  }
  user: User = {
    id: null,
    username: '',
    password: '',
    nombre: '',
    email: '',
    direccion: '',
    telefono: null
  }
  res:object;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.pedido.idUsuario = this.user.id

  }

  alquilerPedido() {
    this.pedidoService.hacerPedido(this.pedido)
      .subscribe(res => this.res = res)
  }

}
