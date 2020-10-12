import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditModule } from '../app/edit/edit.module'
import { AddModule } from '../app/add/add.module';
import { DeleteModule } from '../app/delete/delete.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditModule,
    AddModule,
    DeleteModule
  ],
  exports:[
    EditModule,
    AddModule,
    DeleteModule
  ]
})
export class SharedModule { }
