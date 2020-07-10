import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Todo } from '../../models/todo';
import {
  Actions,
  ItemEventService,
  OnEvent,
} from '../../services/calculator.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit, OnEvent {
  public todolist: Todo[];

  constructor(
    private readonly todoService: TodoService,
    private itemEventService: ItemEventService
  ) {}

  ngOnInit(): void {
    this.todoService
      .loadTodoList()
      .subscribe((items) => (this.todolist = items));

    this.itemEventService.registerOnActions([Actions.NewItemAdded], this);

    this.itemEventService.itemAdded
      .pipe(
        switchMap((value: string) => this.todoService.addTodo(value)),
        switchMap(() => this.todoService.loadTodoList())
      )
      .subscribe((items) => (this.todolist = items));
  }

  eventHappened(data: any) {
    alert(data);
  }

  addNewItem(item: string) {
    console.log('want to add', item);
  }
}
