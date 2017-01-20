import { Routes, RouterModule }  from '@angular/router';
import {ChatComponent} from "./chat/chat.component";
export const app_routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent, pathMatch: 'full' }
];
