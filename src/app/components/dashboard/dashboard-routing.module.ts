import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { UploadComponent } from './upload/upload.component';
import { ModalsComponent } from './modals/modals.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'my-docs', component: MyDocumentsComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'map', component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
