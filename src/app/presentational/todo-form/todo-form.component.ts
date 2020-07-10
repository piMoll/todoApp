import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemEventService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() newItemAdded = new EventEmitter();

  constructor(private itemEventService: ItemEventService) {}

  ngOnInit(): void {}

  save(itemToAdd: string) {
    // this.newItemAdded.emit(itemToAdd);
    this.itemEventService.addNewItem(itemToAdd);
  }
}
