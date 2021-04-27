import { User } from '../state/app.interface';
import { FilterUserPipe } from './filter-user.pipe';

describe('FilterUserPipe', () => {
    let pipe: FilterUserPipe;
    const users: User[] = [
        {
            id: 1,
            email: 'a@a.com',
            name: 'a',
            phone: 'a',
            username: 'a',
            website: 'a'
        },
        {
            id: 1,
            email: 'b@b.com',
            name: 'b',
            phone: 'b',
            username: 'b',
            website: 'b'
        }
    ];
    beforeEach(() => {
        pipe = new FilterUserPipe();
    });
    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
    it('should filter users', () => {
        const searchKey: string = 'a';
        const searchColumn: string = 'name';
        const result = pipe.transform(users, searchKey, searchColumn);
        expect(result).toEqual(users.splice(0, 1));
    });
    it('should not filter users', () => {
        const searchKey: string = '';
        const searchColumn: string = 'name';
        const result = pipe.transform(users, searchKey, searchColumn);
        expect(result).toEqual(users);
    });
    it('should return empty array', () => {
        const searchKey: string = 'x';
        const searchColumn: string = 'name';
        const result = pipe.transform(users, searchKey, searchColumn);
        expect(result).toEqual([]);
    });
});
