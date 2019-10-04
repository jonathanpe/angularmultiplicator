import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Joueur } from '../joueur';
import { Test } from '../test';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.scss']
})
export class StartTestComponent implements OnInit {

  currentQuestionForm : FormGroup;
  user : Joueur = null;
  note : number = 0;
  test : Test = null;
  nextQuestion;
  history = []

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private questionS : QuestionsService,
    private router: Router,
  ) { }

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

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
     this.user = new Joueur()
      this.user.email = params.username,
      this.user.password = '123'
      this.initCurrentQuestionForm()
      this.test = new Test()
      this.test.user=this.user.email
    });
  }

  refresh($event){
    console.log($event)
    if($event.goodAnswer)this.note++;
    this.test.note = this.note
    this.history = this.questionS.refreshTest($event)
    console.log(JSON.stringify(this.test))
    if(this.questionS.isEndTest()){
      this.router.navigate(
        ['/endtest'], // destination donc l'uri
        {queryParams : { test : JSON.stringify(this.test)}} // on peut récupérer ces informations (TODO)
      );
    }
    }

  switchQuestion($event){
  }


  initTestForm(){
    {
      this.test = new Test()
    }
  }

}
