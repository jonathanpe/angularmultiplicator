import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultResponse, Question } from './test';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private testsURL = 'https://multiplicator-8f664.firebaseio.com/tests';
  step : number = 0;
  questions = this.buildQuestion();
  history = []

  constructor(
    private http: HttpClient
  ) { }


  calcul(){
    console.log(this.questions)
    const q = this.questions[this.step];
    this.step ++ ;
    return q;
  }

  buildQuestion(): Array<Question>{
    let questions = []
    for(let i=0; i<10;i++){
      let number1:number = Math.round(Math.random() * 51 - 0.5);
      let number2:number =Math.round(Math.random() * 51 - 0.5);
      let result =number1*number2 ;
      questions.push([number1,number2,result])
    }
    return questions
  }

  refreshTest(lastResponse : ResultResponse) : Array<number>{
    this.history.push(lastResponse)
    return this.history
  }

  isEndTest() : boolean{
    return this.history.length == this.questions.length
  }

  addTest(test) : Observable<void>{

    return this.http.post<void>(this.testsURL + '/.json', test)
  }
}
