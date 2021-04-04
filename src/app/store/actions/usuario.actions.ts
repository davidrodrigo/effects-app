import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction(
  '[Usuarios] Cargar Usuario',
  props<{id: string}>()
);

export const cargarUsuarioSuccesss = createAction(
  '[Usuarios] Cargar Usuario Success',
  props<{ usuario: UsuarioModel }>());

export const cargarUsuarioError = createAction(
  '[Usuarios] Cargar Usuario Error',
  props<{ payload: any }>());
