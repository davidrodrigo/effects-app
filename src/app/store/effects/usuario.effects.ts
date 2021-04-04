import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as usuarioActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';
import { of } from "rxjs";

@Injectable()

export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuario$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      mergeMap((action) => this.usuarioService.getUserById(action.id)
        .pipe(map(user => usuarioActions.cargarUsuarioSuccesss({usuario: user})),
              catchError(err => of(usuarioActions.cargarUsuarioError({payload: err}))))
      )
    )
  );

}
