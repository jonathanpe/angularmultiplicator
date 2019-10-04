import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { StartTestComponent } from './start-test/start-test.component';
import { CurrentQuestionComponent } from './current-question/current-question.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EndTestComponent } from './end-test/end-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartTestComponent,
    CurrentQuestionComponent,
    EndTestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
