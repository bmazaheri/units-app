import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitResponseModel } from './units.models';

@Injectable({ providedIn: 'root' })
export class UnitsService {
  private readonly apiUrl =
    'https://let-api-test.akelius.com/api/v1/DE/marketing/units';
  constructor(private http: HttpClient) {}

  public getUnits(): Observable<UnitResponseModel> {
    return this.http.get<UnitResponseModel>(this.apiUrl);
  }
}
