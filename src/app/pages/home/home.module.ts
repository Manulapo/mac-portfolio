import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { IconModule } from '../../features/icon/icon.module';
import { sharedDirectivesModule } from '../../shared-module/shared-directives-module.module';
import { DesktopModule } from '../../features/desktop/desktop.module';
import { NavBarModule } from '../../features/nav-bar/nav-bar.module';

const sharedModules = [
  IconModule,
  DesktopModule,
  NavBarModule,
];

@NgModule({
  imports: [
    CommonModule,
    sharedDirectivesModule,
    ...sharedModules
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
