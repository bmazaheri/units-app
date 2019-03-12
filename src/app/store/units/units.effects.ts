import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UnitsService } from './units.service';
import { UnitsActionTypes, GetUnitsSuccess } from './units.actions';

@Injectable()
export class UnitsEffects {

  @Effect()
  loadUnits$ = this.actions$.pipe(
    ofType(UnitsActionTypes.GET),
    mergeMap(() => this.unitsService.getUnits()
      .pipe(
        map(response => new GetUnitsSuccess(response.data)),
        catchError(() => EMPTY)
      ))
  );

  constructor(
    private actions$: Actions,
    private unitsService: UnitsService
  ) { }
}