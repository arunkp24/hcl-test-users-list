import { getUsers, getLoading, getError } from './app.selectors';
import { AppState } from './app.interface';

const state: AppState = {
    users: [
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
    ],
    loading: false,
    error: null
};

describe('AppSelectors', () => {
    it('should get the users', () => {
        const result = getUsers.projector(state);
        expect(result.length).toBe(2);
    });
    it('should get the loading state', () => {
        const result = getLoading.projector(state);
        expect(result).toBe(false);
    });
    it('should get the error state', () => {
        const result = getError.projector(state);
        expect(result).toBe(null);
    });
});