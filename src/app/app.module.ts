import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { SignupComponent } from './auth/signup/signup.component'
import { LoginComponent } from './auth/login/login.component'
import { QuestionsComponent } from './questions/questions.component'
import { AskComponent } from './questions/ask/ask.component'
import { AnswerComponent } from './questions/answer/answer.component'
import { ReadComponent } from './questions/read/read.component'
import { UsersComponent } from './users/users.component'
import { ProfileComponent } from './users/profile/profile.component'
import { TagsComponent } from './tags/tags.component'
import { WelcomeComponent } from './welcome/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    QuestionsComponent,
    AskComponent,
    AnswerComponent,
    ReadComponent,
    UsersComponent,
    ProfileComponent,
    TagsComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
