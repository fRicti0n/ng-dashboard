import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng4-charts/ng4-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    DashboardRoutingModule
  ],
  declarations: [HomeComponent, ProfileComponent, MyDocumentsComponent, UploadComponent]
})
export class DashboardModule { }
