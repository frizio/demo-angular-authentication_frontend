import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { EventsComponent } from './components/events/events.component';
import { AuthenticationGuard } from './utils/authentication.guard';

const routes: Routes = [
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'events', component: EventsComponent},
    {path: 'special', component: SpecialEventsComponent, canActivate: [AuthenticationGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EventsComponent, SpecialEventsComponent, LoginComponent, RegisterComponent ];
