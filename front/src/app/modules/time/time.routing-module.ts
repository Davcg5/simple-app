import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourComponent } from './time/hour.component';

export const routes: Routes = [
    {
        path:'',
        component: HourComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class HourRoutingModule{}