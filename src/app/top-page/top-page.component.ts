import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit  {

  cards$:any; 
  p: number = 1;
 
 
  constructor(private httpService: HttpService){}

  ngOnInit(){   
    this.cards$ = this.httpService.getTopTracks();
  }


}
