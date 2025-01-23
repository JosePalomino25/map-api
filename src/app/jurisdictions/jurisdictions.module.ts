import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitizensComponent } from './citizens/citizens.component';
import {HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MapComponent } from './map/map.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [
        CitizensComponent,
        MapComponent,
    ],
  exports: [
    CitizensComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class JurisdictionsModule { }
