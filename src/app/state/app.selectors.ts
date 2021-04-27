import { createFeatureSelector, createSelector } from "@ngrx/store";
import { APP_STATE } from './app.interface';

// Get the root state
const appState = createFeatureSelector<APP_STATE>('root');
// Selector for getting the users
export const getUsers = createSelector(appState, state => state.users);
// Selector for getting the load state
export const getLoading = createSelector(appState, state => state.loading);
// Selector for getting the error state
export const getError = createSelector(appState, state => state.error);