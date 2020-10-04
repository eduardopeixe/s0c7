import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { QuestionsComponent } from './questions/questions.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
