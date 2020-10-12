import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'add', loadChildren: () => import('./add/add.module').then(m => m.AddModule) }, 
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) }, 
  { path: 'delete', loadChildren: () => import('./delete/delete.module').then(m => m.DeleteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
