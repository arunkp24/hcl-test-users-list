import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FilterOption } from './filter-option.interface';
import { AppFacade } from './../state/app.facade';
import { Observable } from 'rxjs';
import { User } from '../state/app.interface';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    options: FilterOption[] = [
        {
            value: 'name',
            text: 'Name'
        },
        {
            value: 'username',
            text: 'User Name'
        },
        {
            value: 'email',
            text: 'Email'
        },
        {
            value: 'phone',
            text: 'Phone'
        },
        {
            value: 'website',
            text: 'Website'
        }
    ];

    constructor(private facade: AppFacade, private formBuilder: FormBuilder) { }

    // Facade for getting the users.
    users$: Observable<User[]> = this.facade.users$;
    // Facade for getting the error state
    error$: Observable<Error> = this.facade.error$;
    // Reactive form
    filterForm: FormGroup;
    // Observable for the reactive form
    filterForm$: Observable<FormGroup>;

    ngOnInit(): void {
        // Build form for HTML
        this.filterForm = this.formBuilder.group({
            searchColumn: [this.options[0].value],
            searchKey: ['']
        });
        // Onservable for the form
        this.filterForm$ = this.filterForm.valueChanges;
        // Facade to load the users
        this.facade.loadUsers();
    }
}
