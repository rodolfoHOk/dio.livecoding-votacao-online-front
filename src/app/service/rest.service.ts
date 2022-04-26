import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  BASE_URL = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  getData(endpoint: string): Observable<any[]> {
    console.log(`${this.BASE_URL}${endpoint}`);
    return this.httpClient.get<any[]>(`${this.BASE_URL}${endpoint}`);
  }

  postData(endpoint: string, data: any): Observable<any> {
    console.log(`${this.BASE_URL}${endpoint}`, data);
    return this.httpClient
      .post<any>(`${this.BASE_URL}${endpoint}`, data)
      .pipe(catchError(this.handlerError));
  }

  private handlerError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, Mensagem: ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
