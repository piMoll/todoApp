import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public todolist$: Observable<Todo[]>;

  constructor(private readonly todoService: TodoService) {}

  ngOnInit(): void {
    this.todolist$ = this.todoService.loadTodoList();
  }
}
