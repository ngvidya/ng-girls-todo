import { Component,Input, OnInit } from '@angular/core';
import { ToDoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template :`
  {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item : ToDoItem;
  constructor() { }

  ngOnInit(): void {
  }

}
