import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { WallComponent }      from './wall/wall.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ConseilComponent } from './conseil/conseil.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';





const routes: Routes = [
  { path: '', redirectTo: '/wall', pathMatch: 'full' },
  { path: 'wall', component: WallComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'conseil', component: ConseilComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
