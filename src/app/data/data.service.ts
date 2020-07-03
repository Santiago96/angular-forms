import { UserSettings } from './user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionType(): Observable<string[]> {
    return of(["Monthly","Annual","Lifetime"]);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    
    return this.http.post('https://putsreq.com/8jaAAqsk7Bwkm0jXOxWR', userSettings);
  }
}
