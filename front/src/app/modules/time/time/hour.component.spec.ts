import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { HourComponent } from "./hour.component";
import { TimeService } from 'src/app/services/time-service';
import { Observable, of, throwError } from "rxjs";

describe('HourComponent', () => {
    let fixture: ComponentFixture<HourComponent>
    let app: HourComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports:[
                
            ],
            declarations:[
                HourComponent
            ],
            providers:[
                {
                    provide: TimeService,
                    useClass: MockTimeService
                },
            ]
        }).compileComponents()
        fixture = TestBed.createComponent(HourComponent);
        app = fixture.componentInstance
    })
    it('should be the right time',() => {
        app.askHour()
        //const mockGetTime = mockTimeService.getHour.and.returnValue(of({"hour":"12", "minutes":"00"}))
        fixture.detectChanges()
        expect(app.actualTime).toBe("12:00")
    })

});

describe('HourComponent', () => {
    let fixture: ComponentFixture<HourComponent>
    let app: HourComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports:[
                
            ],
            declarations:[
                HourComponent
            ],
            providers:[
                {
                    provide: TimeService,
                    useClass: MockTimeServiceFailed
                }
            ]
        }).compileComponents()
        fixture = TestBed.createComponent(HourComponent);
        app = fixture.componentInstance
    })

    it('should show error message', () => {
        app.askHour()
        fixture.detectChanges()
        expect(app.showErrorMessage).toBe(true)
    })
});



class MockTimeService {
    getHour(): Observable<any> {
      return of({"hour":"12", "minutes":"00"});
    }
  }

  class MockTimeServiceFailed {
    getHour(): Observable<any> {
      return throwError("");
    }
  }