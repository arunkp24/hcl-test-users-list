import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from '../state/app.effects';
import { AppFacade } from '../state/app.facade';
import { appReducer } from '../state/app.reducer';
import { FilterUserPipe } from './filter-user.pipe';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsersComponent, FilterUserPipe],
            providers: [AppFacade],
            imports: [
                HttpClientModule, 
                ReactiveFormsModule, 
                FormsModule, 
                StoreModule.forRoot({ root: appReducer }),
                EffectsModule.forRoot([AppEffects])
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
