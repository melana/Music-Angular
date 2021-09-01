import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { TopPageComponent } from './top-page/top-page.component';

const routes: Routes = [
  {path: '', component: TopPageComponent},
  {path: 'top', component: TopPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: '**', component: TopPageComponent}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
