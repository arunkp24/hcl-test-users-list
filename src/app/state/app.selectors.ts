import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.interface';

// Get the root state
const appState = createFeatureSelector<AppState>('root');
// Selector for getting the users
export const getUsers = createSelector(appState, state => state.users);
// Selector for getting the load state
export const getLoading = createSelector(appState, state => state.loading);
// Selector for getting the error state
export const getError = createSelector(appState, state => state.error);
