// context-menu.directive.ts
import { Directive, HostListener, Input, ComponentRef, ViewContainerRef, OnDestroy, Injector, ElementRef } from '@angular/core';
import { ContextMenuComponent } from '../../features/context-menu/component/context-menu.component';
import { menuItemModel } from './model/menu-item.model';
import { ContextMenuService } from '../../services/context-menu-service/context-menu.service';

@Directive({
  selector: '[appContextMenu]'
})
export class ContextMenuDirective implements OnDestroy {
  @Input('contextItemsList') menuItems: menuItemModel[] = [];
  private contextMenuRef: ComponentRef<ContextMenuComponent> | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private contextMenuService: ContextMenuService,
    private elRef: ElementRef 
  ) {
    this.contextMenuService.closeMenuObservable.subscribe(() => {
      this.closeMenu();
    });
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation(); 
    if (!this.elRef.nativeElement.contains(event.target)) {
      return; 
    }

    this.closeMenu();

    this.contextMenuService.notifyCloseMenu();

    this.contextMenuRef = this.viewContainerRef.createComponent(ContextMenuComponent, {
      injector: this.injector,
    });
    this.contextMenuRef.instance.menuItems = this.menuItems;
    this.contextMenuRef.instance.show(event.clientX, event.clientY);

    document.addEventListener('click', this.closeMenu);
  }

  private closeMenu = () => {
    if (this.contextMenuRef) {
      this.contextMenuRef.instance.hide();
      this.contextMenuRef.destroy();
      this.contextMenuRef = null;
      document.removeEventListener('click', this.closeMenu);
    }
  };

  ngOnDestroy() {
    this.closeMenu();
  }
}
