import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { dynamicRenderModel } from '../../features/dynamic-render/model/dynamic-render.model';

export interface NavbarState {
  activeApp: dynamicRenderModel | null;
}

@Injectable()
export class NavbarStateStore extends ComponentStore<NavbarState> {
  constructor() {
    super({ activeApp: null });
  }

  readonly setActiveApp = this.updater((state, activeApp: dynamicRenderModel) => ({
    ...state,
    activeApp,
  }));

  readonly activeApp$ = this.select(state => state.activeApp);
}