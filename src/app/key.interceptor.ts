import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment.prod";

@Injectable()
export class KeyInterceptor implements HttpInterceptor{
    constructor(
        private getReq: HttpService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    
    const secureReq = req.clone({
        url: req.url.replace('YOUR_API_KEY', `${environment.apiKey}`)
    });

    return next.handle(secureReq)
    .pipe(
        catchError( error => {
           return throwError(error)
        })
    )
  }



    
}