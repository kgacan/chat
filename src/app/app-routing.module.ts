import { ChatComponent } from './pages/chat/chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';


const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'/login'},
  {path:'login', component: LoginComponent},
  {path:'singup', component: SingupComponent},
  {path:'chat', component: ChatComponent},
  {path:'**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
