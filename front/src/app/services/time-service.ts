import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backURL } from '../constants/constants';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable()
export class TimeService {
    constructor(private readonly _httpClient: HttpClient) { }
    
    getHour(){
        const url = backURL + '/get-hour'
        return this._httpClient.get(url).pipe(
            catchError((error)=>{
                console.log(error)
                return throwError(error)
            })
        )
    }
}