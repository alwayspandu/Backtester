import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService {

  constructor(    
    private authserviceService: AuthserviceService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authserviceService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }

}
