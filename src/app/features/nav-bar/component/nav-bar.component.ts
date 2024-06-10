import { Component, Input } from '@angular/core';
import { dynamicRenderModel } from '../../dynamic-render/model/dynamic-render.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  @Input() componentsArray: dynamicRenderModel[] = [];

  constructor() { }


}
