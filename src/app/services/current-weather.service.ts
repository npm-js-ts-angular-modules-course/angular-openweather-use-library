import { ApiService } from '@mugan86/openweather-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  apiService: ApiService;
  constructor( ) {
    console.log('Service Running');
    this.apiService = new ApiService('ec32f42ea9357dae4e8e8dbc6d0f77f9', 'm', 'es');
   }

  get(type: string, params: any) {
    return this.apiService.getCurrentWeather(type, params);
  }
}
