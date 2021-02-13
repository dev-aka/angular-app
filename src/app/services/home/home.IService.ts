import { Observable } from 'rxjs';

import { ICard } from '../../Interfaces/ICard.Interface';
import { IPost } from '../../Interfaces/IPost.Interface';

export abstract class IHome {
    abstract getAllCardDetails(): Observable<Array<ICard>>;
    abstract getAllPosts() : Observable<Array<IPost>>;
}