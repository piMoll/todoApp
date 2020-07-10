import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'https://localhost:5001';

  constructor(private http: HttpClient) {}

  loadTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/api/Todos/`);
  }

  addTodo(value: string): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseUrl}/api/Todos/`, { value });
  }
}
