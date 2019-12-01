import { Component, OnInit, Input } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Pedido } from 'src/app/models/pedido.model';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-pedidos-usuario',
  templateUrl: './pedidos-usuario.component.html',
  styleUrls: ['./pedidos-usuario.component.scss']
})
export class PedidosUsuarioComponent implements OnInit {
 

  pedidos: Array<Pedido> = [];
  users: Array<User> = [];

  pedido: Pedido = {
    numPedido: null,
    idUsuario: null,
    tituloPelicula: '',
    direccion: '',
    fechaAlquiler: null,
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

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('user'))
    this.pedidoService.buscarPedidosUsuario(this.user.id)
      .subscribe(
        res => {
          this.pedidos = Object.values(res)
        
      },
        err => {
          console.log("ERR ", err)
        }
      )
  }

}
