import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BdLocalService } from '../services/bd-local.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

  constructor(private router: Router, private bdLocalService:BdLocalService){}

  canActivate(){    
      if(this.bdLocalService.existeInfo('logged-in')){
        this.router.navigate(['/tab2']);
        return false;
      }else{
        return true;
      }
  }
  
}
