import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HitestSharedModule } from 'app/shared';
import {
    ArtikelComponent,
    ArtikelDetailComponent,
    ArtikelUpdateComponent,
    ArtikelDeletePopupComponent,
    ArtikelDeleteDialogComponent,
    artikelRoute,
    artikelPopupRoute
} from './';

const ENTITY_STATES = [...artikelRoute, ...artikelPopupRoute];

@NgModule({
    imports: [HitestSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ArtikelComponent,
        ArtikelDetailComponent,
        ArtikelUpdateComponent,
        ArtikelDeleteDialogComponent,
        ArtikelDeletePopupComponent
    ],
    entryComponents: [ArtikelComponent, ArtikelUpdateComponent, ArtikelDeleteDialogComponent, ArtikelDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HitestArtikelModule {}
