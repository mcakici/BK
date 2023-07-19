import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuizAppComponent {
  @ViewChild('test1') test1!: ElementRef;
  public questions: any = [];
  public activeQuestion: any = {};
  public activeQuestionIndex: number = 0;
  public countDown: number = 30;
  public btnsActive: boolean = false;
  constructor(private http: HttpClient) {
    this.getQuestions((data: any) => {
      var qqq = data.body.filter((x: any) => x.userId === 1);
      //console.log(qqq);
      qqq.forEach((e: any) => {
        this.questions.push({
          userId: e.userId,
          id: e.id,
          question: e.title,
          answers: e.body.split('\n'),
          selected: 0,
        });
      });

      this.activeQuestion = this.questions[0];
      this.btnsActive = false;
      setInterval(() => {
        this.countDown--;
        if (this.countDown <= 20) {
          this.btnsActive = true;
        }
        if (this.countDown <= 0){
          this.nextQuestion();
        }
      }, 1000);

      console.log(this.questions);
      //this.questions
    });
  }

  choose(e : any): void{
    console.log(e);
  }

  nextQuestion(): void {
    if (!this.btnsActive)
      return;

    this.activeQuestionIndex++;
    if (this.activeQuestionIndex == 10){
      this.activeQuestionIndex = 0;
    }
    this.btnsActive = false;
    this.countDown = 30;
    
    this.activeQuestion = this.questions[this.activeQuestionIndex];
    
  }

  getQuestions(callback: any): any {
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts', {
        observe: 'response',
        responseType: 'json',
      })
      .pipe(retry(1))
      .subscribe((data) => {
        if (callback) callback(data);
      });
  }

  getLetter(index: number): any {
    switch (index) {
      case 0:
        return 'A';
      case 1:
        return 'B';
      case 2:
        return 'C';
      case 3:
        return 'D';
    }
  }
}
