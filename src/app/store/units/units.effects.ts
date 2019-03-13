import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, defer, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UnitsService } from './units.service';
import { UnitsActionTypes, GetUnitsSuccess, GetUnits } from './units.actions';

@Injectable()
export class UnitsEffects {

  @Effect()
  loadUnits$ = this.actions$.pipe(
    ofType(UnitsActionTypes.GET),
    mergeMap(() => this.unitsService.getUnits()
      .pipe(
        map(response => new GetUnitsSuccess(response)),
        catchError(() => EMPTY)
      ))
  );

  @Effect()
  init$ = defer(() => of(new GetUnits()));

  constructor(
    private actions$: Actions,
    private unitsService: UnitsService
  ) { }
}