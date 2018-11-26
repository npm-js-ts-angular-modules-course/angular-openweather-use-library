import { FindType } from './../../../../nodets/training-node-ts-openweather-api/lib/classes/enums/find-type.enum';
import { Result } from './../../../../nodets/training-node-ts-openweather-api/lib/classes/interfaces/api.interface';
import { CurrentWeatherService } from './services/current-weather.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'openweather-app';
  current: Result;
  constructor( currenWeather: CurrentWeatherService) {
    currenWeather.get(FindType.Zip, ['89104', true]).subscribe((data) => {
      console.log('ZIP');
      this.current = data.body;
      console.log(this.current);
    });
    currenWeather.get(FindType.Location, [{lat: 36.1699412, lng: -115.13982959999998}, true]).subscribe((data) => {
      console.log('LOCATION');
      this.current = data.body;
      console.log(this.current);
    });
    currenWeather.get(FindType.City, ['Madrid,es', true]).subscribe((data) => {
      console.log('CITY');
      this.current = data.body;
      console.log(this.current);
    });
  }
}
