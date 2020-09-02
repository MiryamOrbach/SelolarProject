import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateAreaComponent } from './private-area/private-area.component';



const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"homepage",component:HomePageComponent},
  {path:"login",component:LoginComponent},
  {path:"private_area",component:PrivateAreaComponent},
  {path:'',component:HomePageComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
