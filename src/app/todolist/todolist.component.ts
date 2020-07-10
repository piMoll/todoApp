import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/todo';
import {Observable} from 'rxjs';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public todolist: Todo[] = [];
  // public todolist$: Observable<Todo[]>;

  constructor(
    private _todoService: TodoService
  ) {
  }

  ngOnInit(): void {

    this._todoService.loadTodoList()
      .subscribe(todolist => this.todolist = todolist);


  }

}
