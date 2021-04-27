import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../state/app.interface';

// Pipe to filter users based on searchkey and column
@Pipe({
    name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

    transform(users: User[], searchKey: string, searchColumn: string): User[] {
        if (!users || !searchKey || !searchColumn) {
            return users;
        }

        return users.filter(user => user[searchColumn].toLowerCase().includes(searchKey.toLowerCase()));
    }

}
