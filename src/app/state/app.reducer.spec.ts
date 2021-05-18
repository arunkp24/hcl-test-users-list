import { Action, createReducer, on } from '@ngrx/store';

import { appReducer } from './app.reducer';
import * as AppActions from './app.actions';
import { AppState, User } from './app.interface';

const INITIAL_STATE: AppState = {
    users: [],
    loading: false,
    error: null
};

describe('AppReducer', () => {
    it('should return the default state', () => {
        const action: Action = { type: '' };
        const result = appReducer(undefined, action);
        expect(result).toEqual(INITIAL_STATE);
    });
    it('should set loading to true', () => {
        const action: Action = AppActions.loadUsers();
        const result = appReducer(INITIAL_STATE, action);
        expect(result.loading).toBeTruthy();
    });
    it('should set the users', () => {
        const users: User[] = [
            {
                id: 1,
                email: 'a@email.com',
                name: 'A',
                phone: '1234567890',
                username: 'a',
                website: 'www.a.com'
            },
            {
                id: 2,
                email: 'b@email.com',
                name: 'B',
                phone: '1234567890',
                username: 'b',
                website: 'www.b.com'
            }
        ];
        const action: Action = AppActions.loadUsersSuccess({ users });
        const result = appReducer(INITIAL_STATE, action);
        expect(result.users).toEqual(users);
    });
    it('should set error state', () => {
        const error: Error = { name: 'dummy name', message: 'dummy message' };
        const action: Action = AppActions.loadUserFail({ error });
        const result = appReducer(INITIAL_STATE, action);
        expect(result.error).toEqual(error);
    });
});