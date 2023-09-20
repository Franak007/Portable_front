import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {PortableComponent} from "./portable/portable.component";
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./auth.guard";

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'portable', component: PortableComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
