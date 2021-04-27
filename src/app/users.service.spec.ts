import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { User } from './state/app.interface';
import { environment } from './../environments/environment';

describe('UsersService', () => {
    let service: UsersService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(UsersService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return users', () => {
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

        service.getUsers().subscribe(userList => {
            expect(userList.length).toBe(2);
            expect(userList).toEqual(users);
        });

        const mockReq = httpMock.expectOne(environment.api.get_users);
        expect(mockReq.request.method).toBe('GET');
        mockReq.flush(users);
    });
});
