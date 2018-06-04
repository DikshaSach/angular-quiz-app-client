import { Component, OnInit } from '@angular/core';
import {QuizService} from '../quiz.service';
import {Quiz} from '../quiz';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  // dependency injection
  question: Quiz[];
  
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getQuiz()
    .subscribe(question =>
    this.question = question)
  }

}
