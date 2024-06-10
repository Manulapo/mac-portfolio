import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRenderComponent } from './component/dynamic-render.component';



@NgModule({
  declarations: [DynamicRenderComponent],
  imports: [
    CommonModule
  ],
  exports: [DynamicRenderComponent]
})
export class DynamicRenderModule { }
