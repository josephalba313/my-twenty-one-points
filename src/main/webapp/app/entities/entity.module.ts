import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#MyTwentyOnePointsRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#MyTwentyOnePointsCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#MyTwentyOnePointsLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#MyTwentyOnePointsDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#MyTwentyOnePointsTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#MyTwentyOnePointsEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#MyTwentyOnePointsJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#MyTwentyOnePointsJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyTwentyOnePointsEntityModule {}
