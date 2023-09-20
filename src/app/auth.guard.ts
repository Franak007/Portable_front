import {Injectable} from "@angular/core";
import {  ActivatedRouteSnapshot,  CanActivate,  Router,  RouterStateSnapshot,} from "@angular/router";
import {AuthService} from "./auth.service";



@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{
  constructor(private route: Router, private auth: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.isLogged()){
    return true;
  } else {
    this.route.navigate(['login'])
    return false
    }
  }

}
