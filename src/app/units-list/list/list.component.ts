import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store';
import { Unit } from '../../store/units';
import { Observable } from 'rxjs';
import {
  getFilteredCities,
  getCities,
  getNeighborhoods
} from '../../store/units/units.selectors';
import { takeWhile } from 'rxjs/operators';
import {
  SetCityFilter,
  ResetCityFilter,
  SetNeighborFilter,
  ResetNeighborFilter
} from '../../store/filters';

@Component({
  selector: 'units-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  public units$: Observable<Unit[]>;
  public cities$: Observable<string[]>;
  public neighborhoods$: Observable<string[]>;

  private isAlive = true;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getSelectors();
    this.subscribeToParamChanges();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  public onNeighborhoodSelect(neighborhood: string): void {
    neighborhood
      ? this.store.dispatch(new SetNeighborFilter(neighborhood))
      : this.store.dispatch(new ResetNeighborFilter());
  }

  private subscribeToParamChanges() {
    this.route.params.subscribe(params => {
      params.city
        ? this.store.dispatch(new SetCityFilter(params['city']))
        : this.store.dispatch(new ResetCityFilter());
      this.store.dispatch(new ResetNeighborFilter());
    });
  }

  private getSelectors() {
    this.units$ = this.selectFromStore(getFilteredCities);
    this.cities$ = this.selectFromStore(getCities);
    this.neighborhoods$ = this.selectFromStore(getNeighborhoods);
  }

  private selectFromStore<K>(
    selectorFn: (state: AppState) => K
  ): Observable<K> {
    return this.store.pipe(
      takeWhile(() => this.isAlive),
      select(selectorFn)
    );
  }
}
