import { Component } from '@angular/core';
import { iconConfigModel } from './features/icon/model/icon.model';
import { dynamicRenderModel } from './features/dynamic-render/model/dynamic-render.model';
import { IconComponent } from './features/icon/component/icon.component';

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

  public navbarItems: dynamicRenderModel[] = [
    {
      id: 'icon',
      component: IconComponent,
      inputs: {
        iconConfig: {
          src: 'https://www.degiro.nl/assets/images/uk-ie-ch/global/maintenance.png',
          iconSize: '80px',
        }
      },
    },
    {
      id: 'icon2',
      component: IconComponent,
      inputs: {
        iconConfig: {
          src: 'https://www.degiro.nl/assets/images/uk-ie-ch/global/maintenance.png',
          iconSize: '80px',
        }
      },
    }
  ];
}
