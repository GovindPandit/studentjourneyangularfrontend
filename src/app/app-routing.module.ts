import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';


const routes: Routes = [
  {path:"add",component:AddUserComponent},
  {path:"display",component:DisplayUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
