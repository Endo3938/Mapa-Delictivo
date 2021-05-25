import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { LoginService } from '../loginServices/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}
// si el usuario esta loggeado, avanzaa la siguiente pagina
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      //Si no está logegeado no carga
      return this.loginService.isLogged().then(result => {
        console.log("ACTIVADO " + result);
        if(!result)
        {
          this.router.navigateByUrl("/login");
          return false;
        }
        return true;
      })
  }
}
