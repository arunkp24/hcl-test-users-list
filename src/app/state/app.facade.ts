import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { APP_STATE } from './app.interface';
import * as query from './app.selectors';
import * as AppActions from './app.actions';

// Encapsulation for all the store stuffs.
@Injectable()
export class AppFacade {

    constructor(private store: Store<APP_STATE>) { }
    // Get the list of users from store
    users$ = this.store.select(query.getUsers);
    // Get the loading state
    loading$ = this.store.select(query.getLoading);
    // Get the error state
    error$ = this.store.select(query.getError);
    // Dispatch the loadUsers action
    loadUsers() {
        this.store.dispatch(AppActions.loadUsers());
    }
}