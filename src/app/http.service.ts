import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient){ }
  
  getTopTracks(): Observable<any>{
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json`).pipe(
      map ( (cards: any) => {
        console.log(cards)
        return cards.tracks.track.map( (card:  { name: any; artist: { name: any; url: any; }; image: any;  }) => ({
          name: card.name,
          artist: {
            name: card.artist.name,
            url: card.artist.url,
          },
          image: card.image[0]["#text"]
        }))}   
      ))
  }

  search(searchTrack:string): Observable<any>{
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchTrack}&api_key=YOUR_API_KEY&format=json`).pipe(
      map ( (cards: any) => {
        console.log(cards)
        return cards.results.trackmatches.track.map( (card:  { name: any; artist: any; image: any; url:any }) => ({
          name: card.name,
          artist: card.artist,
          image: card.image[0]["#text"],
          url: card.url
        }))}   
      ))
  }

  

}