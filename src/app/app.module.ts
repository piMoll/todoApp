import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './container/todo/todo.component';
import { TodolistComponent } from './presentational/todolist/todolist.component';

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
