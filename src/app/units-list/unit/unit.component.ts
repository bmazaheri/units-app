import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../../store/units';

@Component({
  selector: 'unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  @Input()
  unit: Unit;

  constructor() { }

  ngOnInit() {
  }

}
