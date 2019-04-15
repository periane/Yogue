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
  { path: 'wall/catalogue', component: CatalogueComponent },
  { path: 'wall/galerie', component: GalerieComponent },
  { path: 'wall/conseil', component: ConseilComponent },
  { path: 'wall/contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
