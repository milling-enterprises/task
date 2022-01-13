import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Modules
import { MaterialModule } from './shared/modules/material/material.module';

// Custom Components
import { MainComponent } from './components/main/main.component';
import { TasksStatusComponent } from './shared/components/tasks-status/tasks-status.component';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TasksStatusComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
