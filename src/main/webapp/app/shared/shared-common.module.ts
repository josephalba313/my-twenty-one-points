import { NgModule } from '@angular/core';

import { MyTwentyOnePointsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MyTwentyOnePointsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MyTwentyOnePointsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MyTwentyOnePointsSharedCommonModule {}
