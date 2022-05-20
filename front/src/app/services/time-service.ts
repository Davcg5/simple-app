import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backURL } from '../constants/constants';

@Injectable()
export class TimeService {
    constructor(private readonly _httpClient: HttpClient) { }
    
    getHour(){
        const url = backURL + '/get-hour'
        return this._httpClient.get(url)
    }

}