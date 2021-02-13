import { Observable } from 'rxjs';

import { IUserInfo } from '../../Interfaces/IUser.Interface';

export abstract class IUser {
    abstract getAllUsers(): Observable<Array<IUserInfo>>;
}