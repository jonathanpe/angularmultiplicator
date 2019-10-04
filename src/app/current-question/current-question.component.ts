import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-current-question',
  templateUrl: './current-question.component.html',
  styleUrls: ['./current-question.component.scss']
})
export class CurrentQuestionComponent implements OnInit {

  currentQuestionForm : FormGroup;
  @Input() question = null;
  currentQuestionNumber = 1;
  @Output() sendResult : EventEmitter<any> = new EventEmitter; 

  num1 : number;
  num2 : number;
  currentQ ;
  constructor(
    private fb : FormBuilder,
    private questionS : QuestionsService
    ) { 
      this.currentQ = this.questionS.calcul()
      /*console.log(this.questionS.calcul())
      console.log(this.questionS.calcul())
      console.log(this.questionS.calcul())*/
  }

  ngOnInit() {
    this.initCurrentQuestionForm()
  }

  nextQuestion(){
    let result = (this.currentQuestionForm.value['currentQuestion'] === this.currentQ[2])
    this.sendResult.emit({question : this.currentQ, result: this.currentQuestionForm.value['currentQuestion'], goodAnswer:result})
    this.currentQ = this.questionS.calcul()
    this.currentQuestionNumber++;
  }


  initCurrentQuestionForm(){
    this.currentQuestionForm = this.fb.group(
      {
        currentQuestion: new FormControl('', [
          Validators.required,
        ]),        
      }
    )
  }

  get currentQuestion() { return this.currentQuestionForm.get('currentQuestion')}

}
