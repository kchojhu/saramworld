import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { app_routes} from "./app.route";
import {RouterModule} from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import {AppConfig} from "./app.config";
import {Navbar} from "./navbar/navbar.component";
import {TooltipModule} from "ng2-bootstrap"

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SidebarComponent,
    Navbar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(app_routes, { useHash: true }),
    TooltipModule.forRoot()
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
