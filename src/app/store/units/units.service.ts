import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitsStateResponseModel } from './units.models';

@Injectable({ providedIn: 'root' })
export class UnitsService {
  private readonly apiUrl =
    'https://let-api-test.akelius.com/api/v1/DE/marketing/units';
  constructor(private http: HttpClient) {}

  public getUnits(): Observable<UnitsStateResponseModel> {
    return this.http.get<UnitsStateResponseModel>(this.apiUrl);
  }
}
