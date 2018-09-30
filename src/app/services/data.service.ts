import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Param } from 'src/app/models/param.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  paramsUrl = 'assets/params.json';
  appsUrl = 'assets/apps.json';

  constructor(private http: HttpClient) { }

  getParams() {
    return this.http.get(this.paramsUrl);
  }

  getApps() {
    return this.http.get(this.appsUrl);
  }

}
