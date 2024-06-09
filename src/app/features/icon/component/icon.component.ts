import { Component, Input, OnInit } from '@angular/core';
import { iconConfigModel } from '../model/icon.model';
import { DataHandlerDirective } from '../../../directives/dataHandler/dataHandlerDirective.directive';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends DataHandlerDirective implements OnInit {

  @Input() iconConfig: iconConfigModel | undefined;

  constructor() {
    super();
  }

}
