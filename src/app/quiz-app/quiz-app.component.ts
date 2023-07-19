import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QuizAppComponent {
  public questions: any = [];
  public activeQuestionIndex: number = 0;
  public countDown: number = 10;
  public btnsActive: boolean = false;
  private interval: any = null;
  public started: boolean = false;
  public finished: boolean = false;
  
  constructor(private http: HttpClient) {}

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  choose(e: any, answerIndex: number): void {
    this.questions[this.activeQuestionIndex].selected = answerIndex;
  }

  countdownTicks(): void {
    this.countDown--;
    if (this.countDown <= 20) {
      this.btnsActive = true;
    }
    if (this.countDown <= 0) {
      this.nextQuestion();
    }
  }

  nextQuestion(): void {
    if (!this.btnsActive) return;

    this.activeQuestionIndex++;
    if (this.activeQuestionIndex == 10) {
      this.finish();
    }
    this.btnsActive = false;
    this.countDown = 10;
  }

  start(): void {
    this.questions = [];
    this.getQuestions((data: any) => {
      var rnd = this.getRandom(1, 10);
      var qqq = data.body.filter((x: any) => x.userId === rnd);
      qqq.forEach((e: any) => {
        this.questions.push({
          userId: e.userId,
          id: e.id,
          question: e.title,
          answers: e.body.split('\n'),
          selected: undefined,
        });
      });

      this.finished = false;
      this.started = true;
      this.btnsActive = false;
      this.activeQuestionIndex = 0;
      this.interval = setInterval(() => {
        this.countdownTicks();
      }, 1000);

      console.log(this.questions);
    });
  }

  finish(): void {
    this.finished = true;
    this.started = false;
    this.ngOnDestroy();
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

  getRandom(min: number, max: number) {
    const floatRandom = Math.random();
    const difference = max - min;
    const random = Math.round(difference * floatRandom);
    const randomWithinRange = random + min;
    return randomWithinRange;
  }
}
