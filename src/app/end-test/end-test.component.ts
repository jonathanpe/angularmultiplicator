import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-end-test',
  templateUrl: './end-test.component.html',
  styleUrls: ['./end-test.component.scss']
})
export class EndTestComponent implements OnInit {

  user : string;
  note: number;
  constructor(
    private route: ActivatedRoute,
    private questionS : QuestionsService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      let test = JSON.parse(params.test)
      this.user=test.user;
      this.note = test.note
      this.questionS.addTest(test)
    });
  }

}
