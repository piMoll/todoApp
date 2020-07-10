import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../models/todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'https://localhost:5001';

  constructor(
    private http: HttpClient
  ) {

  }

  loadTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/api/Todos/`);
  }
}
