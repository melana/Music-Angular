import { Component, OnInit, Input } from '@angular/core';
import { CardTop } from '../interfaces';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {

  @Input()
  card!: CardTop;
  name: string = "";
  artist: string = "";
  image: string = "";


  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
