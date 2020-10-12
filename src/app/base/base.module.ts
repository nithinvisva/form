import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'




@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports:[BaseComponent]
})
export class BaseModule { }
