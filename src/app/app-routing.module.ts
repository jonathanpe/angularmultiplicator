import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartTestComponent } from './start-test/start-test.component';
import { EndTestComponent } from './end-test/end-test.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {state: 'home' }
  },
  {
    path: 'starttest',
    component: StartTestComponent,
  },
  {
    path: 'endtest',
    component: EndTestComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
