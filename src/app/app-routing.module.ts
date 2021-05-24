import { R2Component } from './r2/r2.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { R3Component } from './r3/r3.component'


const routes: Routes = [
  { path: '', component: R2Component},
  { path: 'video', component: R3Component},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
