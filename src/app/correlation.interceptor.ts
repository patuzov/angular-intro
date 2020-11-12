import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorrelationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler): Observable<HttpEvent<unknown>> {

      console.log('intercepted');

      const updatedRequest = request.clone({
        headers: request.headers.set('X-CorrelationId', this.generateCorrelationId())
      });

      return next.handle(updatedRequest);
  }

  private generateCorrelationId(): string {
    return '42';
  }
}
