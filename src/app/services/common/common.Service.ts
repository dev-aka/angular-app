import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { ICommon } from './common.IService';

@Injectable({
    providedIn: 'root'
})
export class CommonService extends ICommon {

    private itemClicked$: any = new BehaviorSubject<any>('');

    constructor(private http: HttpClient) {
        super();
    }

    getItemClicked(): Observable<string> {
        return this.itemClicked$.asObservable();
    }

    setItemClicked(name: string): void {
        this.itemClicked$.next(name);
    }

    unSubscribe(): void {
        if (this.itemClicked$)
            this.itemClicked$.unSubscribe();
    }
}
