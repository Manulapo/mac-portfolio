import { Component, OnInit } from '@angular/core';
import { iconConfigModel } from '../../../features/icon/model/icon.model';
import { menuItemModel } from '../../../directives/context-menu/model/menu-item.model';
import { dynamicRenderModel } from '../../../features/dynamic-render/model/dynamic-render.model';
import { IconComponent } from '../../../features/icon/component/icon.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public iconConfig: iconConfigModel = {
    src: 'https://www.degiro.nl/assets/images/uk-ie-ch/global/maintenance.png',
    iconSize: '100px',
    bootstrapClass: 'my-5 mx-4',
    iconText: {
      text: 'My Icon',
      textSize: '20px',
      textColor: 'black',
      textCentered: true,
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

  menuItems : menuItemModel[] = [
    { label: 'Home', icon: '', action: () => console.log('home') },
    { label: 'Home', icon: '', action: () => console.log('home') },
    { label: 'Home', icon: '', action: () => console.log('home') },
    { label: 'Home', icon: '', action: () => console.log('home') },
    { label: 'Home', icon: '', action: () => console.log('home') },
  ];

  menuItems2 : menuItemModel[] = [
    { label: 'eee', icon: '', action: () => console.log('test') },
    { label: 'eee', icon: '', action: () => console.log('test') },
  ];

  menuItems3 : menuItemModel[] = [
    { label: 'test', icon: '', action: () => console.log('test') },
    { label: 'e', icon: '', action: () => console.log('test') },
    { label: '3', icon: '', action: () => console.log('test') },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
