import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time-service';
@Component({
    selector: 'app-hour',
    templateUrl: './hour.component.html'
})

export class HourComponent {
    actualTime:string= ""
    showErrorMessage:Boolean = false
   
    constructor(
        private _timeService :TimeService
    ) { }


    async askHour(){
        this.showErrorMessage = false
        
        await this._timeService.getHour().subscribe(
            {
                next: (data:any) => {
                    this.actualTime = data["hour"]+ ":" +data["minutes"]
                },
                error: () => {
                    console.log("there is an error")
                    this.showErrorMessage = true
                }
            }
        
        )

    }
}