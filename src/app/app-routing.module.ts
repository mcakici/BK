import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustompageComponent } from './custompage/custompage.component';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  //{ path: '', component: LandingPageComponent, title: 'Collers - Landing Page', pathMatch: 'full' },
  { path: 'quizApp', component: QuizAppComponent, title: 'Quiz App - Collers' },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Collers', pathMatch: 'full' },
  { path: 'products', component: CustompageComponent, title: 'Products - Collers' },
  { path: 'solutions', component: CustompageComponent, title: 'Solutions - Collers' },
  { path: 'pricing', component: CustompageComponent, title: 'Pricing - Collers' },
  { path: 'resources', component: CustompageComponent, title: 'Resources - Collers' },
  { path: 'login', component: CustompageComponent, title: 'Login - Collers' },
  { path: 'signup', component: CustompageComponent, title: 'Sign Up - Collers' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }