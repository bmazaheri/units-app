import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  neighborhoodSelect = new EventEmitter<string>()

  public selectNeighborhood(neighborhood: string): void {
    this.neighborhoodSelect.emit(neighborhood);
  }

}
