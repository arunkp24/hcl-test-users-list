import { createAction, props } from '@ngrx/store';
import { User } from './app.interface';

// Action to load users
export const loadUsers = createAction(
    '[Users] LOAD_USERS'
);
// Action to be called when loading users is success
export const loadUsersSuccess = createAction(
    '[Users] LOAD_USERS_SUCCESS',
    props<{ users: User[] }>()
);
// Action to be called when loading users failed
export const loadUserFail = createAction(
    '[Users] LOAD_USERS_FAIL',
    props<{ error: Error }>()
);
