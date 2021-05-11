import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProfileComponent} from './profile/profile.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import {UserComponent} from './user/user.component'
const routes: Routes = [
{path:'',redirectTo:'user',pathMatch:'full'},
{path:'user',component:UserComponent},
{path:'repo/:repository/:name',component:RepoDetailsComponent},
{path:'profile/:login',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
