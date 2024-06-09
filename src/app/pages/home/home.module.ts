import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { IconModule } from '../../features/icon/icon.module';
import { sharedDirectivesModule } from '../../shared-module/shared-directives-module.module';

const sharedModules = [
  IconModule,
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
