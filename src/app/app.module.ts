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
import { WelcomeComponent } from './welcome/welcome.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { QuestionComponent } from './questions/question/question.component';
import { QuestionSummaryComponent } from './questions/question-summary/question-summary.component';
import { VotecellComponent } from './questions/votecell/votecell.component';
import { PostcellComponent } from './questions/postcell/postcell.component';
import { CommentcellComponent } from './questions/commentcell/commentcell.component';
import { StatuscellComponent } from './questions/question-summary/statuscell/statuscell.component';
import { QuestioncellComponent } from './questions/question-summary/questioncell/questioncell.component';
import { TagcellComponent } from './questions/question-summary/tagcell/tagcell.component';
import { AvatarcellComponent } from './questions/question-summary/avatarcell/avatarcell.component'

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
    SidenavListComponent,
    HeaderComponent,
    QuestionComponent,
    QuestionSummaryComponent,
    VotecellComponent,
    PostcellComponent,
    CommentcellComponent,
    StatuscellComponent,
    QuestioncellComponent,
    TagcellComponent,
    AvatarcellComponent,
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
