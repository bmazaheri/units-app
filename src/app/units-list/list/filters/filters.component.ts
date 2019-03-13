import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store';
import { SetNeighborFilter, ResetNeighborFilter } from '../../../store/filters';
import { takeWhile } from 'rxjs/operators';
import { getFilters } from '../../../store/filters/filters.selectors';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Input()
  cities: string[] = [];

  @Input()
  neighborhoods: string[] = [];

  public selectedNeighborhood: string;

  private isAlive = true;

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(
        takeWhile(() => this.isAlive),
        select(getFilters)
      )
      .subscribe(
        filter =>
          (this.selectedNeighborhood = filter ? filter.neighborhood : null)
      );
  }

  public selectNeighborhood(neighborhood: string): void {
    neighborhood
      ? this.store.dispatch(new SetNeighborFilter(neighborhood))
      : this.store.dispatch(new ResetNeighborFilter());
  }
}
