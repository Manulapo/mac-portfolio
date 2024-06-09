import { Component } from '@angular/core';
import { iconConfigModel } from './features/icon/model/icon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public iconConfig: iconConfigModel = {
    src: 'https://www.degiro.nl/assets/images/uk-ie-ch/global/maintenance.png',
    iconSize: '100px',
    iconText: {
      text: 'My Icon',
      textSize: '20px',
      textColor: 'black',
      textCentered: true,
      bootstrapClass: ''
    }
  };
}
