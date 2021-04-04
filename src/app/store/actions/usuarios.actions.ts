import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuariosSuccesss = createAction(
  '[Usuarios] Cargar Usuarios Success',
  props<{ usuarios: Array<UsuarioModel> }>());

export const cargarUsuariosError = createAction(
  '[Usuarios] Cargar Usuarios Error',
  props<{ payload: any }>());
