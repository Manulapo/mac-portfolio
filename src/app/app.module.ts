import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NavBarModule } from './features/nav-bar/nav-bar.module';
import { WindowNavBarModule } from './features/window-nav-bar/window-nav-bar.module';
import { IconModule } from './features/icon/icon.module';
import { ButtonModule } from './features/button/button.module';
import { ActiveBarModule } from './features/active-bar/active-bar.module';
import { HomeModule } from './pages/home/home.module';
import { ContextMenuModule } from './features/context-menu/context-menu.module';
import { WindowModule } from './features/window/window.module';
import { DesktopModule } from './features/desktop/desktop.module';
import { sharedDirectivesModule } from './shared-module/shared-directives-module.module';
import { DynamicRenderComponent } from './features/dynamic-render/dynamic-render.component';

const sharedModules = [
  NavBarModule,
  WindowNavBarModule,
  IconModule,
  ButtonModule,
  ActiveBarModule,
  ContextMenuModule,
  WindowModule,
  HomeModule,
  DesktopModule,
];


@NgModule({
  declarations: [
    AppComponent,
    DynamicRenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    sharedDirectivesModule,
    ...sharedModules,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
