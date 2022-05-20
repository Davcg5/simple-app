import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoraComponent } from './time/hora.component';

export const routes: Routes = [
    {
        path:'',
        component: HoraComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class HoraRoutingModule{}