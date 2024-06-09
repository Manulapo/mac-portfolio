import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './component/icon.component';
import { sharedDirectivesModule } from '../../shared-module/shared-directives-module.module';

@NgModule({
  imports: [
    sharedDirectivesModule,
    CommonModule
  ],
  declarations: [IconComponent],
  exports: [IconComponent]
})
export class IconModule { }
