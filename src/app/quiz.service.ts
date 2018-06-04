import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Quiz} from './quiz';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: Http) {}
    // retrieving quiz questoin

    getQuiz(){
      return this.http.get('http://localhost:8080/quiz')
      .pipe(map(res => res.json()));
    }
   
}
