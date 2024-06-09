import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedDirectivesModule } from '../../shared-module/shared-directives-module.module';
import { ContextMenuComponent } from './component/context-menu.component';

@NgModule({
  declarations: [ContextMenuComponent],
  imports: [
    CommonModule,
    sharedDirectivesModule,
  ],
})
export class ContextMenuModule { }
