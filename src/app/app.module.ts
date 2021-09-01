import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackCardComponent } from './track-card/track-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { KeyInterceptor } from './key.interceptor';
import { SearchPageComponent } from './search-page/search-page.component';
import { TopPageComponent } from './top-page/top-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TrackCardComponent, 
    SearchPageComponent,
    TopPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: KeyInterceptor
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
