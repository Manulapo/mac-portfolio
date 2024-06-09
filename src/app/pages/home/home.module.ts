import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { IconModule } from '../../features/icon/icon.module';
import { sharedDirectivesModule } from '../../shared-module/shared-directives-module.module';
import { DesktopModule } from '../../features/desktop/desktop.module';

const sharedModules = [
  IconModule,
  DesktopModule
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
