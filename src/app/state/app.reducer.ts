import { Action, createReducer, on } from '@ngrx/store';
import * as UserListActions from './app.actions';
import { AppState } from './app.interface';

// Initial state of the application
const INITIAL_STATE: AppState = {
    users: [],
    loading: false,
    error: null
};

export function appReducer(state: AppState | undefined, action: Action) {
    return reducer(state, action);
}

const reducer = createReducer(
    INITIAL_STATE,
    on(UserListActions.loadUsers, (state, action) => ({
        ...state,
        users: [],
        loading: true,
        error: null
    })),
    on(UserListActions.loadUsersSuccess, (state, action) => ({
        ...state,
        users: action.users,
        loading: false,
        error: null
    })),
    on(UserListActions.loadUserFail, (state, action) => ({
        ...state,
        users: [],
        loading: false,
        error: action.error
    }))
);
