import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time-service';
@Component({
    selector: 'app-hora',
    templateUrl: './hora.component.html'
})

export class HoraComponent implements OnInit {
    actualTime:string= ""
    showErrorMessage:Boolean = false

    constructor(
        private _timeService :TimeService
    ) { }
    ngOnInit() { }

    async askHour(){
        this.showErrorMessage = false
        let timeResponse:any  = await this._timeService.getHour().toPromise()

        if (!!(timeResponse)){
            let hour = timeResponse["hour"]
            let minutes = timeResponse["minutes"]
            this.actualTime = hour + ":" + minutes
        }
        else {
            this.showErrorMessage = true
        }
    }
}