import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustompageComponent } from './custompage/custompage.component';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [ 

  { path: '', redirectTo: '/home', pathMatch: 'full', title: 'Collers - Landing Page' },

  { path: 'home', component: HomeComponent, title: 'Collers', pathMatch: 'full' },
  { path: 'products', component: CustompageComponent, title: 'Products - Collers', data: {title: 'Products'} },
  { path: 'solutions', component: CustompageComponent, title: 'Solutions - Collers', data: {title: 'Solutions'} },
  { path: 'pricing', component: CustompageComponent, title: 'Pricing - Collers', data: {title: 'Pricing'} },
  { path: 'resources', component: CustompageComponent, title: 'Resources - Collers', data: {title: 'Resources'} },
  { path: 'login', component: CustompageComponent, title: 'Login - Collers', data: {title: 'Login'} },
  { path: 'signup', component: CustompageComponent, title: 'Sign Up - Collers', data: {title: 'Signup'} },
  { path: 'quizApp', component: QuizAppComponent, title: 'Quiz App - Collers' },

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
