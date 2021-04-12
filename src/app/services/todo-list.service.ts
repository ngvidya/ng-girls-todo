import { Injectable } from '@angular/core';
import { ToDoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: ToDoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];
  constructor() { }

  getTodoList(): ToDoItem[] {
    return this.todoList;
  }

  addItem(item: ToDoItem): void {
    this.todoList.push(item);
  }
}
