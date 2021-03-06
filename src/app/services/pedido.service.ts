import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido.model';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  formPedidoNone = true;
  btnAlquilarNone = true;
  constructor(private httpClient: HttpClient) { }

  //endpoint de registrar un pedido
  hacerPedido(pedido: Pedido):Observable<object>{
    return this.httpClient.post('http://localhost:3000/pedidos/addPedido', pedido)
  }

  //endpoint para mostrar los pedidos de un usuario
  buscarPedidosUsuario(id: number){
    console.log(`http://localhost:3000/pedidos/id/${id}`);
    
    return this.httpClient.get(`http://localhost:3000/pedidos/id/${id}`)
  }
 
}
