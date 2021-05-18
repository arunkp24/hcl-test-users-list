import { TestBed } from "@angular/core/testing";
import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from "rxjs";

import { UsersService } from './../users.service';
import { AppEffects } from './app.effects';
import { User } from "./app.interface";
import * as AppActions from './app.actions';

describe('AppEffects', () => {
    let actions$: Observable<Action>;
    let appEffects: AppEffects;
    let userService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [],
        providers: [
            provideMockStore(),
            provideMockActions(() => actions$),
            AppEffects,
            {
                provide: UsersService, 
                useValue: jasmine.createSpyObj('userService', ['getUsers'])
            }
        ]
    }));
    beforeEach(() => {
        appEffects = TestBed.inject(AppEffects);
        userService = TestBed.inject(UsersService);
    });

    it('should return loadUserSuccess action', (done) => {
        const usersToReturn: User[] = [
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
        userService.getUsers.and.returnValue(of(usersToReturn));

        actions$ = of(AppActions.loadUsers);

        appEffects.loadUsers.subscribe(action => {
            expect(action).toEqual(AppActions.loadUsersSuccess({users: usersToReturn}));
            done();
        });
    });
    it('should return loadUserFail action', (done) => {
        const error:Error = { name: 'dummy name', message: 'dummy message' };
        userService.getUsers.and.returnValue(throwError(error));

        actions$ = of(AppActions.loadUsers);

        appEffects.loadUsers.subscribe(action => {
            expect(action.type).toEqual(AppActions.loadUserFail({error}).type);
            done();
        });
    });
});