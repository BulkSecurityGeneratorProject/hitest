import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HitestSharedModule } from 'app/shared';
import {
    LieferantComponent,
    LieferantDetailComponent,
    LieferantUpdateComponent,
    LieferantDeletePopupComponent,
    LieferantDeleteDialogComponent,
    lieferantRoute,
    lieferantPopupRoute
} from './';

const ENTITY_STATES = [...lieferantRoute, ...lieferantPopupRoute];

@NgModule({
    imports: [HitestSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        LieferantComponent,
        LieferantDetailComponent,
        LieferantUpdateComponent,
        LieferantDeleteDialogComponent,
        LieferantDeletePopupComponent
    ],
    entryComponents: [LieferantComponent, LieferantUpdateComponent, LieferantDeleteDialogComponent, LieferantDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HitestLieferantModule {}
