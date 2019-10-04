import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userForm : FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log('Initialized')
    this.initNewUserForm()
  }

  initNewUserForm(){
    console.log('ici')
    this.userForm = this.fb.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
        ]),
      }
    );
  }

  get name() { return this.userForm.get('name')  }

  onSubmit() {

    console.log(this.userForm.value['name'])
    this.router.navigate(
      ['/starttest'], // destination donc l'uri
      {queryParams : { username : this.userForm.value['name']}} // on peut récupérer ces informations (TODO)
    );
  }

}
