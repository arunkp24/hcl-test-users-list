import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import { catchError, concatMap, exhaustMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { UsersService } from '../users.service';
import * as AppActions from './app.actions';
import { User } from './app.interface';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions, private usersService: UsersService) { }
    // Effects for loading users.
    loadUsers = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.loadUsers),
            concatMap(action =>
                this.usersService.getUsers().pipe(
                    map((response: User[]) => AppActions.loadUsersSuccess({ users: response })),
                    catchError(error => of(AppActions.loadUserFail(error)))
                )
            )
        )
    );

}
