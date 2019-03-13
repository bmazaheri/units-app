import { Component } from '@angular/core';
import { Unit } from '../store/units';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store';
import { ActivatedRoute } from '@angular/router';
import {
  map,
  filter,
  switchMap,
  distinctUntilChanged,
  takeWhile
} from 'rxjs/operators';
import { getUnit } from '../store/units/units.selectors';

@Component({
  selector: 'unit-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  public unit$: Observable<Unit>;

  private isAlive = true;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.unit$ = this.route.params.pipe(
      takeWhile(() => this.isAlive),
      map(params => params['unitId']),
      filter(unitId => unitId),
      distinctUntilChanged(),
      switchMap(unitId => this.store.pipe(select(getUnit, { unitId })))
    );
  }
}
