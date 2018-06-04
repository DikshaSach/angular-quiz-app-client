import { Component } from '@angular/core';
import {QuizService} from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: Array<any>
  count: number;
  currentQuestion: String
  answerList: String;
  answerChoiceArray: Array<any>
  answerChoiceA: String
  constructor(private _quizService: QuizService){
    this.count = 0;
   this._quizService.getQuiz()
   .subscribe((res) =>  {this.questions = res;
   this.currentQuestion = this.questions[this.count].question;
   this.answerList = this.questions[this.count].answerchoices;

   this.answerChoiceArray = this.answerList.split(',');

   console.log(this.answerChoiceArray[0], this.answerChoiceArray[1], this.answerChoiceArray[2]);

   });
   
  }
}
