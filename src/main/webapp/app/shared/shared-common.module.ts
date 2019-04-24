import { NgModule } from '@angular/core';

import { HitestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HitestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HitestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HitestSharedCommonModule {}
