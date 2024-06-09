import { Component, Input, OnInit, Output } from '@angular/core';
import { iconConfigModel } from '../model/icon.model';
import { DataHandlerDirective } from '../../../directives/dataHandler/dataHandlerDirective.directive';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends DataHandlerDirective implements OnInit {

  @Input() iconConfig: iconConfigModel | undefined;
  @Output() onIconClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }

  public iconClicked(ev: Event) {
    this.onIconClick.emit(ev);
  }

}
