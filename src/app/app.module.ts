import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FilterUserPipe } from './users/filter-user.pipe';

import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';
import { AppFacade } from './state/app.facade';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FilterUserPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ root: appReducer }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AppFacade, AppEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
