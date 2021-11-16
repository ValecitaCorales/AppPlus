import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BdLocalService } from '../services/bd-local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private bdLocalService: BdLocalService){}

  canActivate(){
      if(this.bdLocalService.existeInfo('logged-in')){
        return true
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
