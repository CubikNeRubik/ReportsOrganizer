import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxElectronModule } from 'ngx-electron';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material';

import { SideMenuComponent } from '../side-menu/side-menu.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReportsComponent } from '../reports/reports.component';
import { ProjectsComponent } from '../projects/projects.component';
import { GlobalErrorHandler } from '../../infrastructure/global-error-handler.infrastructure';
import { AppComponent } from './app.component';
import { routing }  from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatButtonModule,
        routing,
        NgxElectronModule,
        MatTableModule,
        MatCheckboxModule,
        MatCardModule,
        MatIconModule,
    ],

    declarations: [
        AppComponent,
        SideMenuComponent,
        DashboardComponent,
        ReportsComponent,
        ProjectsComponent,
    ],

    providers: [
        {
            provide: ErrorHandler, 
            useClass: GlobalErrorHandler
        }
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }