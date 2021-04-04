import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { UsuarioModel } from '../../models/usuario.model';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios = new Array<UsuarioModel>();
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({users, loading, error}) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    })
    this.store.dispatch(cargarUsuarios());
  }

}
