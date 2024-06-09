import { Component, Input } from '@angular/core';
import { menuItemModel } from '../../../directives/context-menu/model/menu-item.model';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {
  @Input() menuItems: menuItemModel[] = [];
  @Input() x = 0;
  @Input() y = 0;
  isVisible = false;

  show(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  onMenuItemClick(item: any) {
    if (item.action) {
      item.action();
    }
    this.hide();
  }
}
