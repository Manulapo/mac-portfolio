import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './component/nav-bar.component';
import { DynamicRenderModule } from '../dynamic-render/dynamic-render.module';

const sharedModules = [
  DynamicRenderModule,
];

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
