import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BtresultComponent } from './btresult/btresult.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardServiceService } from './service/route-guard-service.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent  },//canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardServiceService]},
  { path: 'backtestresult/:name/:id', component: BtresultComponent, canActivate:[RouteGuardServiceService] },
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardServiceService] },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
