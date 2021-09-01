import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  trackName = new FormControl('');

  cards$:any;
  p: number = 1;
  
  constructor(private httpService: HttpService){}

  search(){
    this.cards$ = this.httpService.search(this.trackName.value);
  }

  ngOnInit(): void {
  }

}
