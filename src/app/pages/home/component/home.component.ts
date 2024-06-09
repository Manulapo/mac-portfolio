import { Component, OnInit } from '@angular/core';
import { iconConfigModel } from '../../../features/icon/model/icon.model';
import { menuItemModel } from '../../../directives/context-menu/model/menu-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  menuItems : menuItemModel[] = [
    { label: 'Home', icon: '', action: () => console.log('home') },
  ];

  menuItems2 : menuItemModel[] = [
    { label: 'test', icon: '', action: () => console.log('test') },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
