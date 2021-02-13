import { Observable } from 'rxjs';

export abstract class ICommon {
    abstract setItemClicked(name: string) : void;
    abstract getItemClicked(): Observable<string>;
    abstract unSubscribe(): void;
}