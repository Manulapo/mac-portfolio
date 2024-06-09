import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveBarComponent } from './component/active-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActiveBarComponent],
  exports: [ActiveBarComponent]
})
export class ActiveBarModule { }
