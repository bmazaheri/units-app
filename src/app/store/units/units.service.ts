import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitResponseModel } from './units.models';

@Injectable({ providedIn: 'root' })
export class UnitsService {
  constructor(private http: HttpClient) { }

  public getUnits(): Observable<UnitResponseModel> {
    return this.http.get<UnitResponseModel>(this.getApiUrl());
  }

  private getApiUrl(): string {
    return 'https://let-api-test.akelius.com/api/v1/DE/marketing/units';
  }

}