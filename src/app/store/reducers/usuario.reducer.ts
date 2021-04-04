import { createReducer, on } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';
import * as usuarioActions from '../actions';

export interface UsuarioState {
    id: string,
    user: UsuarioModel,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuarioInitialState: UsuarioState = {
  id: null,
  user: new UsuarioModel(null, null, null, null, null),
  loaded: false,
  loading: false,
  error: null
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on(usuarioActions.cargarUsuario, (state, {id}) => ({
      ...state,
      loading: true,
      id: id
    })),

    on(usuarioActions.cargarUsuarioSuccesss, (state, {usuario}) => ({
      ...state,
      loading: false,
      loaded: true,
      user: {...usuario}
    })),

    on(usuarioActions.cargarUsuarioError, (state, {payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
      }
    })),

);

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}
