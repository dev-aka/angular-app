import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
import { IUserInfo } from '../../Interfaces/IUser.Interface';

// Services
import { IUser } from './user.IService';


@Injectable({
    providedIn: 'root'
})
export class UserService extends IUser {
    url: string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {
        super();
    }

    getAllUsers(): Observable<IUserInfo[]> {
        return this.http.get<IUserInfo[]>(this.url)
    }
}
